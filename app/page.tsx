// app/page.tsx
import Image from "next/image";

import heroPlayers from "@/public/Hero.png";
import logoFantasy from "@/public/Fantasylogo.svg";
import { Navbar, NavBody } from "@/components/ui/resizable-navbar";
import LandingNavBar from "@/components/LandingNavBar";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LandingNavBar />
      <section className="flex mt-20 gap-4 p-4 ">
        <Image
          src={heroPlayers}
          alt="Players Hero"
          className="object-cover flex-1 "
        />
        <div className=" flex flex-col items-center max-w-200 text-black px-4">
          <Image
            src={logoFantasy}
            alt="Fantasy Lab Logo"
            width={250}
            height={80}
            className="mb-6 flex-1"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smarter Fantasy Football Insights
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Compare players, view stats, and get AI-powered insights
          </p>
        </div>
      </section>

      {/* Placeholder for Trending Players */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Trending Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Player cards go here */}
        </div>
      </section>

      {/* Placeholder for Upcoming Fixtures */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Upcoming Fixtures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Fixture cards go here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto text-center">
        <p>© 2026 Fantasy Lab. Built with Next.js</p>
      </footer>
    </main>
  );
}
