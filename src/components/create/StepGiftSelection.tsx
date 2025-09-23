"use client";

import React, { FormEvent } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

// تایپ props
interface StepGiftSelectionProps {
  gift: string;
  setGift: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void; // حتما باید داشته باشه
  onNext?: () => void; // اختیاری اگر میخوای بعد submit به مرحله بعد بری
}

export default function StepGiftSelection({
  gift,
  setGift,
  onSubmit,
  onNext,
}: StepGiftSelectionProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // جلوگیری از reload صفحه
    onSubmit(e);        // فراخوانی تابع اصلی
    onNext?.();         // اگر onNext فرستاده شده بود اجرا کن
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Typography sx={{ mb: 2 }}>Enter the gift name:</Typography>
      <TextField
        variant="outlined"
        size="small"
        value={gift}
        onChange={(e) => setGift(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        inputProps={{ style: { color: "white" } }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Gift
      </Button>
    </Box>
  );
}
