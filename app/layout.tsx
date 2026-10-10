import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garaadsystems.com"),
  title: "Garaad Systems",
  description:
    "Garaad Systems delivers e-government, digital engineering, and institutional modernization solutions that strengthen public and private sector institutions across Ethiopia and the Horn of Africa. Based in Jigjiga, Somali Region.",
  icons: {
    icon: [
      { url: "/logo/icon/garaad-icon-navy-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/icon/garaad-icon-navy-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/logo/icon/garaad-icon-navy-180.png", sizes: "180x180" },
  },
  openGraph: {
    siteName: "Garaad Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
