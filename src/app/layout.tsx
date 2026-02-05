import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { QuizProvider } from "@/contexts/QuizContext";
import UTMTracker from "@/components/UTMTracker";
import CleanupScript from "@/components/CleanupScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medicare Fit Quiz - Find Your Perfect Medicare Plan | Medigap vs Medicare Advantage",
  description: "Take our free 2-minute Medicare quiz to discover whether Medigap or Medicare Advantage is right for you. Get personalized recommendations based on your health needs, budget, and preferences.",
  icons: {
    icon: "https://uploads-ssl.webflow.com/660d27533c9c61d241f50da3/6613c20a957184c174de73c3_pocket_protector.png",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#FAF9F7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNR7578Q');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XWRC8436T9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XWRC8436T9', { anonymize_ip: true });
`}
        </Script>
        {/* End Google tag (gtag.js) */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNR7578Q"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
              position: 'absolute',
              left: '-9999px',
              top: '-9999px',
              width: '0',
              height: '0',
              border: 'none'
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Ringba call tracking script */}
        <Script
          src="https://b-js.ringba.com/CAec88b51adf8b437d8e159c668629b896"
          strategy="afterInteractive"
        />
        {/* Cleanup script to remove unwanted elements */}
        <CleanupScript />
        {/* UTM tracking - captures and persists UTM parameters */}
        <Suspense fallback={null}>
          <UTMTracker />
        </Suspense>
        <QuizProvider>
          <DevLinkProvider>
            {/* Add here any Navbar or Header you want to be present on all pages */}
            {children}
            {/* Add here any Footer you want to be present on all pages */}
          </DevLinkProvider>
        </QuizProvider>
      </body>
    </html>
  );
}
