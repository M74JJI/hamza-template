import type { Metadata } from "next";
import "./globals.css";
import fonts from "./_fonts/fonts";
import Provider from "@/providers";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Hamza sennouni",
  description:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
      ${fonts.hvFont.className} 
      bg-gray-100 dark:bg-background`}
      >
        <Provider>
          <Toaster />
          <div className="absolute  top-0 right-0 px-4 ">
            <ThemeSwitch />
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
