import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { QuizProvider } from "@/contexts/QuizContext";
import UTMTracker from "@/components/UTMTracker";
import SessionIdTracker from "@/components/SessionIdTracker";
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
        {/* Meta */}
        <meta name="facebook-domain-verification" content="fmzjl2s36hjitpw6hlwqgas7tfty6t" />
        {/* End Meta */}

        {/* PostHog Analytics */}
        <Script id="posthog" strategy="afterInteractive">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Rr Mr fi Or Ar ci Tr Cr capture Mi calculateEventProperties Lr register register_once register_for_session unregister unregister_for_session Hr getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ur jr createPersonProfile zr kr Br opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Dr debug M Nr getPageViewId captureTraceFeedback captureTraceMetric $r".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_WHE7tFMwke7sCp5mjkoh6i9712awedPYWrvENR0fhEE', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-05-24',
        person_profiles: 'identified_only',
    })`}
        </Script>
        {/* End PostHog Analytics */}

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
        {/* Session ID tracking - generates unique session identifier */}
        <Suspense fallback={null}>
          <SessionIdTracker />
        </Suspense>
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
