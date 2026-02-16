"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar"; // your file path

export default function LandingNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Players", link: "/players" },
    { name: "Teams", link: "/teams" },
    { name: "Fixtures", link: "/fixtures" },
    { name: "Compare", link: "/compare" },
  ];

  return (
    <Navbar className="sticky top-0 z-50">
      {/* Desktop / Main Navbar */}
      <NavBody>
        {/* Logo */}
        <NavbarLogo />

        {/* Nav Links */}
        <NavItems items={navLinks} />

        {/* Optional button on desktop */}
        <NavbarButton href="/signup" variant="gradient">
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav visible={true}>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navLinks.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="w-full px-4 py-2 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile button */}
          <NavbarButton
            href="/signup"
            variant="gradient"
            className="mt-4 w-full text-center"
          >
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
