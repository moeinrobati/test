"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Lottie, { AnimationItem } from "lottie-web";

export default function HistorySwitcher() {
  const [tab, setTab] = useState<"all" | "joined">("all");
  const gradientRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (gradientRef.current) {
      animationInstance.current = Lottie.loadAnimation({
        container: gradientRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/gradient.json",
      });
    }
    return () => {
      animationInstance.current?.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#121212",
        overflow: "hidden",
      }}
    >
      {/* بکگراند گرادینت */}
      <Box
        ref={gradientRef}
        sx={{
          position: "fixed",
          top: 289,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* سوئیچر */}
      <Box
        sx={{
          position: "fixed",
          top: 22,
          left: "50%",
          transform: "translateX(-50%)",
          width: 390,
          height: 40,
          borderRadius: 999,
          backgroundColor: "#1f1f1f",
          display: "flex",
          p: "4px",
          zIndex: 1,
        }}
      >
        {/* بکگراند انتخاب شده */}
        <Box
          sx={{
            position: "absolute",
            top: 5,
            left: tab === "all" ? 4 : "calc(50% + 2px)",
            width: "calc(50% - 6px)",
            height: 37,
            backgroundColor: "#3a3a3a",
            borderRadius: 999,
            transition: "all 0.3s ease",
            zIndex: 0,
          }}
        />

        {/* دکمه All */}
        <Box
          onClick={() => setTab("all")}
          sx={{ flex: 1, textAlign: "center", zIndex: 1, cursor: "pointer" }}
        >
<Typography
  sx={{
    fontWeight: 600,
    color: tab === "all" ? "#fff" : "#aaa",
    transition: "color 0.3s",
    lineHeight: "37px", // به جای عدد، این رو تنظیم کن
  }}
>
  All
</Typography>
        </Box>

        {/* دکمه Joined */}
        <Box
          onClick={() => setTab("joined")}
          sx={{ flex: 1, textAlign: "center", zIndex: 1, cursor: "pointer",}}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: tab === "joined" ? "#fff" : "#aaa",
              transition: "color 0.3s",
              lineHeight: "37px", // به جای عدد، این رو تنظیم کن
            }}
          >
            Joined
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
