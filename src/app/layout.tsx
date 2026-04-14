import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Wild Hebridean Swimming | Immersive Coldwater Retreats',
  description: 'Transformative coldwater retreats in the Inner Hebrides. Experience community, island culture, and wild swimming odysseys designed for adventure and wellness.',
  openGraph: {
    "title": "Wild Hebridean Swimming",
    "description": "Transformative coldwater retreats.",
    "siteName": "Wild Hebridean Swimming",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
