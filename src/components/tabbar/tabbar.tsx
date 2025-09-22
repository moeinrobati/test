"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function AnimatedTabBarPro() {
  const [value, setValue] = useState(1); // پیش‌فرض روی "Create"
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const animationInstances = useRef<(AnimationItem | null)[]>([]);
  const stopTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // مسیر JSON انیمیشن‌ها
  const animations = [
    "/animations/active.json",
    "/animations/create.json",
    "/animations/history.json",
  ];

  // مسیر صفحات
  const paths = ["/active", "/create", "/history"];

  // وقتی مسیر تغییر کنه تب درست انتخاب بشه
  useEffect(() => {
    const currentIndex = paths.indexOf(pathname);
    if (currentIndex !== -1) setValue(currentIndex);
  }, [pathname]);

  // تغییر رنگ استروک‌ها به سفید
  const changeStrokeColor = (container: HTMLDivElement | null) => {
    if (!container) return;
    const svg = container.querySelector("svg");
    if (!svg) return;

    svg.querySelectorAll("[stroke]").forEach((el) => {
      el.setAttribute("stroke", "#FFFFFF");
    });
  };

  // فانکشن برای لود انیمیشن‌ها
  const loadAnimation = (index: number, loop = false, autoplay = false) => {
    const container = refs[index].current;
    if (!container) return;

    if (animationInstances.current[index]) {
      animationInstances.current[index]?.destroy();
    }

    animationInstances.current[index] = Lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay,
      path: animations[index],
    });

    // تغییر رنگ بعد از لود شدن
    animationInstances.current[index].addEventListener("DOMLoaded", () => {
      changeStrokeColor(container);
    });
  };

  // لود اولیه انیمیشن‌ها
  useEffect(() => {
    refs.forEach((_, index) => {
      loadAnimation(index, false, false);
    });
  }, []);

  // پلی/استاپ انیمیشن‌ها وقتی تب تغییر کنه
  useEffect(() => {
    if (stopTimeout.current) clearTimeout(stopTimeout.current);

    animationInstances.current.forEach((anim, index) => {
      if (!anim) return;

      if (index === value) {
        anim.goToAndPlay(0, true);

        if (index === 0) {
          stopTimeout.current = setTimeout(() => {
            anim.goToAndStop(28, true);
          }, 2500);
        }
      } else {
        anim.stop();
        anim.goToAndStop(25, true);
      }
    });

    return () => {
      if (stopTimeout.current) clearTimeout(stopTimeout.current);
    };
  }, [value]);

  // تغییر تب + ریدایرکت
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
    router.push(paths[newValue]);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "#121212",
        borderTop: "1px solid #222",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          backgroundColor: "#121212",
          ".Mui-selected": {
            color: "#FFF",
            fontWeight: "bold",
          },
          ".MuiBottomNavigationAction-root": {
            color: "#888",
          },
        }}
      >
        <BottomNavigationAction
          label="Active"
          icon={<div ref={refs[0]} style={{ width: 36, height: 36 }} />}
        />
        <BottomNavigationAction
          label="Create"
          icon={<div ref={refs[1]} style={{ width: 36, height: 36 }} />}
        />
        <BottomNavigationAction
          label="History"
          icon={<div ref={refs[2]} style={{ width: 36, height: 36 }} />}
        />
      </BottomNavigation>
    </Paper>
  );
}
