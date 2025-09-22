'use client';

import React from "react";
import { Page } from "@/components/Page"; // اگه Page نداری div بذار

export default function CreatePage() {
  return (
    <Page back={false}>
      <h1>Create Giveaway 🎉</h1>
      <p>اینجا صفحه اصلی مینی اپ شماست.</p>
    </Page>
  );
}
