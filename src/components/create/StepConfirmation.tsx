"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Lottie, { LottieProps } from "lottie-react";
import confirmationAnim from "@public/animations/confirmation.json";
import successCheck from "@public/animations/successCheck.json";

export default function StepConfirmation(): JSX.Element {
  useEffect(() => {
    // غیرفعال کردن اسکرول صفحه هنگام mount شدن
    document.body.style.overflow = "hidden";

    // لرزش موبایل بعد 1.5 ثانیه
    const timer = setTimeout(() => {
      if (navigator.vibrate) {
        navigator.vibrate([60, 70, 80]);
      }
    }, 1500);

    // هنگام unmount، اسکرول را به حالت قبل برگردان
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#121212",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* انیمیشن اصلی */}
      <Lottie
        animationData={confirmationAnim as any}
        loop={false}
        style={{
          width: "100%",
          height: "100%",
          transform: "translateY(-80px)",
        }}
      />

      {/* انیمیشن تیک موفقیت در وسط بالا */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 150,
          height: 150,
          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={successCheck as any}
          loop={false}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* متن زیر انیمیشن تیک موفقیت */}
      <Box
        sx={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        The Giveaway was successful.
      </Box>
    </Box>
  );
}
