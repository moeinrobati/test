"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";

export default function ActiveSwitcher() {
  const [tab, setTab] = useState<"joined" | "browse" | "created">("joined");
  const [gradientAnimation, setGradientAnimation] = useState(null);

  useEffect(() => {
    fetch("/animations/gradient.json")
      .then((res) => res.json())
      .then((data) => setGradientAnimation(data))
      .catch((err) => console.error("Failed to load Gradient JSON", err));
  }, []);

  const getLeftPosition = () => {
    if (tab === "joined") return "4px";
    if (tab === "browse") return "calc(33.33% + 2px)";
    if (tab === "created") return "calc(66.66% + 0px)";
  };

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
      {gradientAnimation && (
        <Box
          sx={{
            position: "fixed",
            bottom: 75,
            left: 0,
            width: "100%",
            height: 80,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Lottie animationData={gradientAnimation} loop={true} />
        </Box>
      )}

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
            top: 4,
            left: getLeftPosition(),
            width: "calc(33.33% - 6px)",
            height: 37,
            backgroundColor: "#3a3a3a",
            borderRadius: 999,
            transition: "all 0.3s ease",
            zIndex: 0,
          }}
        />

        {/* دکمه‌ها */}
        {["joined", "browse", "created"].map((item) => (
          <Box
            key={item}
            onClick={() => setTab(item as "joined" | "browse" | "created")}
            sx={{
              flex: 1,
              textAlign: "center",
              zIndex: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-end",   // متن میاد پایین
              justifyContent: "center", // وسط افقی
              pb: "8.5px",                // فاصله از پایین
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: tab === item ? "#fff" : "#aaa",
                transition: "color 0.3s",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
