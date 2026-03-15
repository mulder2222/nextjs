import type { Metadata } from "next";
import { AppShell } from "../components/layout/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Ops UI",
  description:
    "Frontend-only Next.js showcase for a structured operations dashboard interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
