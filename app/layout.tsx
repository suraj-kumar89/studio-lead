import type { Metadata } from "next";
import Script from "next/script";
import ContactusHeader from "@/SharedComponent/Header";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Bluvo Studio | Website Development Company",
  description:
    "Bluvo Studio builds conversion-focused websites for brands that run ads.",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* =====================================================
            META PIXEL
            ===================================================== */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '1525460748740556');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${interTight.className} text-white relative overflow-x-hidden bg-[#08080a]`}
      >
        {/* =====================================================
            GOOGLE TAG MANAGER
            ===================================================== */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(
              window,
              document,
              'script',
              'dataLayer',
              'GTM-WWGL9VGP'
            );
          `}
        </Script>

        {/* =====================================================
            NOSCRIPT FALLBACKS
            ===================================================== */}
        <noscript>
          {/* Google Tag Manager */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWGL9VGP"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />

          {/* Meta Pixel */}
          <img
            height="1"
            width="1"
            style={{
              display: "none",
            }}
            src="https://www.facebook.com/tr?id=1525460748740556&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* =====================================================
            BACKGROUND BLOBS
            ===================================================== */}
        <div className="bg-blobs-layer">
          <div className="bg-blob bg-blob--1" />
          <div className="bg-blob bg-blob--2" />
        </div>

        {/* =====================================================
            WEBSITE CONTENT
            ===================================================== */}
        <div className="relative z-20">
          <ContactusHeader />
          {children}
        </div>
      </body>
    </html>
  );
}