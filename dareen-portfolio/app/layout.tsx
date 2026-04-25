import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import './globals.css';

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dareen Alsulami — Software Engineer",
  description:
    "Full-stack engineer specialising in Django, Next.js, and scalable backend systems. Based in Jeddah, Saudi Arabia.",
  openGraph: {
    title: "Dareen Alsulami — Software Engineer",
    description: "Portfolio of Dareen Alsulami, software engineer at NCM.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
