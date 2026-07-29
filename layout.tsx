import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMA Spot",
  description: "The best MMA platform in Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
