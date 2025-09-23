"use client";

import { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import StepGift from "@/components/create/StepGiftSelection";
import StepTerms from "@/components/create/StepTerms";
import StepConfirm from "@/components/create/StepConfirmation";


const steps = ["Gift", "Terms", "Confirm"];

export default function CreatePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#121212",
        color: "#fff",
        p: 3,
      }}
    >
      {/* استپر بالای صفحه */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ color: "#fff !important" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* محتوای هر مرحله */}
      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && <StepGift onNext={handleNext} />}
        {activeStep === 1 && <StepTerms onNext={handleNext} onBack={handleBack} />}
        {activeStep === 2 && <StepConfirm onBack={handleBack} />}
      </Box>
    </Box>
  );
}
