import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime Whisper | Explore Anime Quotes",
  description: "Discover and share anime quotes with Anime Whisper. Your favorite anime wisdom in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100 dark:bg-stone-900 font-sans bg-gradient-to-r from-stone-900 dark:from-stone-100 from-50% to-stone-100 dark:to-stone-900 to-50% `}
      >
        {children}
      </body>
    </html>
  );
}
