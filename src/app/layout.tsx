import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import AnimatedTabBarPro from "../components/tabbar/tabbar"; // ✅ تب‌بار اضافه شد

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";

export const metadata: Metadata = {
  title: "Mini App",
  description: "Giveaway mini app",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
        <AnimatedTabBarPro /> {/* ✅ تب‌بار همیشه پایین */}
      </body>
    </html>
  );
}
