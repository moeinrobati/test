"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AnimatedTabBarPro(): JSX.Element {
  const [value, setValue] = useState<number>(1); // Create = index 1
  const router = useRouter();

  // مثال برای هندل تغییر تب
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) router.push("/");
    if (newValue === 1) router.push("/profile");
    if (newValue === 2) router.push("/settings");
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Profile" />
        <BottomNavigationAction label="Settings" />
      </BottomNavigation>
    </Paper>
  );
}
