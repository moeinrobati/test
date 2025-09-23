"use client";

import React, { FormEvent } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

// تایپ props
interface StepGiftSelectionProps {
  gift: string;
  setGift: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function StepGiftSelection({
  gift,
  setGift,
  onSubmit,
}: StepGiftSelectionProps) {
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
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
