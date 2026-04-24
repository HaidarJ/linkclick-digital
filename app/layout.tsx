import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Linkclick Digital — Data-Driven Digital Marketing & Web Design",
  description:
    "A smarter approach to digital growth. Linkclick Digital is a data-driven digital media agency helping small and medium businesses grow through marketing, web design, branding, and SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0e0e0e] text-[#f5f3ef]">
        {children}
      </body>
    </html>
  );
}
