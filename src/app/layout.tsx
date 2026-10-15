import type { Metadata, Viewport } from "next";
import "./globals.css";
import SupportBubble from "@/components/SupportBubble";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://autosubmitagent.vercel.app";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AutoSubmit — AI-Powered Career Application Automation",
    template: "%s | AutoSubmit",
  },
  description:
    "AutoSubmit matches your profile with job criteria and stages tailored applications with complete human oversight.",
  applicationName: "AutoSubmit",
  authors: [{ name: "AutoSubmit Team", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "AutoSubmit",
    "AI career agent",
    "job application automation",
    "career automation copilot",
    "resume matching",
    "ATS form filler",
    "applicant tracking system",
    "career profile staging",
    "bot friendly forms",
    "form managed",
    "MyFormConnect",
    "myformconnect.io",
    "serverless form intake",
  ],
  referrer: "origin-when-cross-origin",
  creator: "AutoSubmit",
  publisher: "AutoSubmit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AutoSubmit",
    title: "AutoSubmit — AI-Powered Career Application Automation",
    description:
      "AutoSubmit matches your profile with job criteria and stages tailored applications with complete human oversight.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoSubmit — AI-Powered Career Application Automation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSubmit — AI-Powered Career Application Automation",
    description:
      "AutoSubmit matches your profile with job criteria and stages tailored applications with complete human oversight.",
    creator: "@autosubmit",
    site: "@autosubmit",
    images: ["/og-image.png"],
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AutoSubmit",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      sameAs: ["https://twitter.com/autosubmit"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@autosubmit.work",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AutoSubmit",
      publisher: { "@id": `${SITE_URL}/#organization` },
      description: "AI-Powered Career Application Automation Copilot",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#application`,
      name: "AutoSubmit",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "AI agent that helps job seekers automate repetitive job application tasks by matching user profiles with job requirements and staging tailored application forms.",
      featureList: [
        "Resume and career profile parsing",
        "Target role qualification overlap scoring",
        "ATS multi-step field pre-filling",
        "1-click human oversight and review",
        "Serverless form intake powered by MyFormConnect",
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <SupportBubble />
      </body>
    </html>
  );
}
