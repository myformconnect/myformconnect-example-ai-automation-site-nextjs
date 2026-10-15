import type { Metadata } from "next";
import "./globals.css";
import SupportBubble from "@/components/SupportBubble";

export const metadata: Metadata = {
  title: "AutoSubmit — AI-Powered Career Application Automation",
  description:
    "AutoSubmit helps job seekers match their profiles with job requirements and prepare career applications with less repetitive work. Featuring bot friendly forms managed by MyFormConnect.",
  keywords: [
    "AutoSubmit",
    "AI career agent",
    "job application automation",
    "career automation",
    "resume matching",
    "bot friendly forms",
    "form managed",
    "MyFormConnect",
    "myformconnect.io",
    "bot friendly forms by MyFormConnect",
  ],
  authors: [{ name: "AutoSubmit Team" }],
  openGraph: {
    title: "AutoSubmit — AI-Powered Career Application Automation",
    description:
      "AutoSubmit matches your profile with job requirements, prepares relevant application details, and helps you move through repetitive forms with less effort.",
    type: "website",
    locale: "en_US",
    siteName: "AutoSubmit",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSubmit — AI-Powered Career Application Automation",
    description:
      "AutoSubmit matches your profile with job requirements, prepares relevant application details, and helps you move through repetitive forms with less effort.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <SupportBubble />
      </body>
    </html>
  );
}
