"use client";

import React, { useState, FormEvent } from "react";
import { Box } from "@mui/material";
import StepGiftSelection from "@/components/create/StepGiftSelection";
import StepTerms from "@/components/create/StepTerms";
import StepConfirmation from "@/components/create/StepConfirmation";

export default function CreatePage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [gift, setGift] = useState<string>("");

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // این تابع برای StepGiftSelection
  const handleGiftSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // میتونی اینجا validation هم اضافه کنی
    console.log("Gift submitted:", gift);
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      {activeStep === 0 && (
        <StepGiftSelection
          gift={gift}
          setGift={setGift}
          onSubmit={handleGiftSubmit}
          onNext={handleNext} // بعد از submit میره مرحله بعد
        />
      )}

      {activeStep === 1 && (
        <StepTerms
          onNext={handleNext}
          // onBack={handleBack} // اگه نمیخوای دکمه back باشه میتونی کامنت کنی
        />
      )}

      {activeStep === 2 && <StepConfirmation />}
    </Box>
  );
}
