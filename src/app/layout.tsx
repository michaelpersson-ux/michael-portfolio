import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteContent } from "@/components/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Persson | UX",
  description: "UX portfolio of Michael Persson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="overflow-y-scroll">
        <Providers>
          <SiteHeader />
          <SiteContent>{children}</SiteContent>
        </Providers>
      </body>
    </html>
  );
}
