"use client";

import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

import StepGift from "@/components/create/StepGiftSelection";
import StepTerms from "@/components/create/StepTerms";
import StepConfirm from "@/components/create/StepConfirmation";

export default function CreatePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [gift, setGift] = useState<string>("");

  const steps = ["Gift", "Terms", "Confirmation"];

  const handleNext = () => setActiveStep((prev) => prev + 1);

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", py: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && (
          <StepGift gift={gift} setGift={setGift} onNext={handleNext} />
        )}
        {activeStep === 1 && <StepTerms onNext={handleNext} />}
        {activeStep === 2 && <StepConfirm  />}
      </Box>
    </Box>
  );
}
