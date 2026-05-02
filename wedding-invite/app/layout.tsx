import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शुभ विवाह — बिनोद राणा ❀ ज्योति कुमारी",
  description: "बिनोद राणा एवं ज्योति कुमारी के शुभ विवाह में आपको सादर आमंत्रित किया जाता है। दिनांक 06-07-2026",
  openGraph: {
    title: "शुभ विवाह — बिनोद राणा ❀ ज्योति कुमारी",
    description: "06 जुलाई 2026 · ग्राम आराजोरी, देवघर (झारखण्ड)",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
