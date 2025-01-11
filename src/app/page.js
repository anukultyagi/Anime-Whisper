"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuoteSection from "@/components/QuoteSection";
import Range from "@/components/Range";
import { useState } from "react";

export default function Home() {


  const [gradientCount, setGradientCount] = useState(50)

  return (
    <>
      <main
        className={`min-h-screen bg-gradient-to-r transition-all duration-300 ${gradientCount > 50
            ? "from-stone-900 to-stone-100 dark:from-stone-100 dark:to-stone-900"
            : "from-stone-100 to-stone-900 dark:from-stone-900 dark:to-stone-100"
          }`}
        style={{
          background: `linear-gradient(to right, ${gradientCount > 50 ? "var(--tw-gradient-from)" : "var(--tw-gradient-to)"
            } ${gradientCount}%, ${gradientCount > 50 ? "var(--tw-gradient-to)" : "var(--tw-gradient-from)"
            } ${gradientCount}%)`,
        }}
      >
        <Header />
        <QuoteSection />
        <Range setGradientCount={setGradientCount} gradientCount={gradientCount} />
        <Footer />
      </main>
    </>
  );
}
