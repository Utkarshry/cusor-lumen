import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMEN — cursor glow reimagined",
  description:
    "LUMEN turns your cursor into a living light source. Beautiful, fluid, and endlessly customizable.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cusor.me"
  ),
  openGraph: {
    title: "LUMEN — cursor glow reimagined",
    description:
      "LUMEN turns your cursor into a living light source. Beautiful, fluid, and endlessly customizable.",
    url: "https://cusor.me",
    siteName: "LUMEN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMEN — cursor glow reimagined",
    description:
      "LUMEN turns your cursor into a living light source. Beautiful, fluid, and endlessly customizable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
