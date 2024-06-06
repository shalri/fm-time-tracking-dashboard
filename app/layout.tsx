import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time Tracking Dashboard | FScode",
  description:
    "Solution for Time Tracking Dashboard challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} grid min-h-dvh grid-cols-1 place-items-center bg-tt-very-dark-blue text-body`}
      >
        {children}
      </body>
    </html>
  );
}
