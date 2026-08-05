import { SeoSchema } from "@/components/common/SeoSchema";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import { site } from "@/lib/site";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ToastProvider } from "@/components/ui/toast";

import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { MovingBackground } from "@/components/common/MovingBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: "%s | Meveryx",
  },

  description: site.description,

  keywords: [...site.keywords],

  authors: [
    {
      name: "Meveryx",
      url: site.url,
    },
  ],

  creator: "Meveryx",

  publisher: "Meveryx",

  applicationName: "Meveryx",

  category: "Technology",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: site.url,
  },

  openGraph: {
  type: "website",
  locale: "en_PK",
  url: site.url,

  title: site.title,

  description: site.description,

  siteName: site.name,

  images: [
    {
      url: site.ogImage,
      width: 1200,
      height: 630,
      alt: "Meveryx Logo",
    },
  ],
},

  twitter: {
    card: "summary_large_image",

    title: site.title,

    description: site.description,

    images: [site.ogImage],

    creator: "@meveryx",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: site.name,
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    
  },
  verification: {
  google: "GOOGLE_VERIFICATION_CODE",
  other: {
    "msvalidate.01": "BING_VERIFICATION_CODE",
  },
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased bg-white text-slate-900">
        <MovingBackground />
            <SeoSchema />
        <ToastProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <WhatsAppButton />
        </ToastProvider>
      </body>
    </html>
  );
}