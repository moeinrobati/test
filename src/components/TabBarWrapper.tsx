"use client";
import { usePathname } from "next/navigation";
import TabBar from "../components/tabbar/tabbar";

export default function TabBarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideOn = ["/login", "/auth"]; // لیست صفحات بدون تب‌بار
  const isHidden = hideOn.includes(pathname);

  return (
    <>
      {children}
      {!isHidden && <TabBar />}
    </>
  );
}
