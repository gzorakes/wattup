"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <header>
      <nav
        ref={navRef}
        className="bg-background absolute top-6 left-1/2 z-10 w-64 -translate-x-1/2 rounded-4xl px-6 py-3 shadow-[0px_0px_4px_#0b1c48] sm:w-md md:w-xl lg:w-3xl lg:px-12 xl:w-5xl"
      >
        <div className="flex items-center justify-between">
          <div className="relative h-8 w-32">
            <Image
              src="/logo.png"
              fill
              className="object-contain"
              alt="logo"
              sizes="128px"
            />
          </div>

          <ul className="text-foreground hidden space-x-8 font-semibold lg:flex">
            <li className="hover:text-foreground/90 hover:scale-105 hover:cursor-pointer">
              Αρχική
            </li>
            <li className="hover:text-foreground/90 hover:scale-105 hover:cursor-pointer">
              Εταιρία
            </li>
            <li className="hover:text-foreground/90 hover:scale-105 hover:cursor-pointer">
              Υπηρεσίες
            </li>
            <li className="hover:text-foreground/90 hover:scale-105 hover:cursor-pointer">
              Έργα
            </li>
          </ul>

          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <ul
          className={`text-foreground overflow-hidden text-center font-semibold transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <li className="hover:bg-foreground hover:text-background rounded-2xl py-2 hover:cursor-pointer">
            Αρχική
          </li>
          <li className="hover:bg-foreground hover:text-background rounded-2xl py-2 hover:cursor-pointer">
            Εταιρία
          </li>
          <li className="hover:bg-foreground hover:text-background rounded-2xl py-2 hover:cursor-pointer">
            Υπηρεσίες
          </li>
          <li className="hover:bg-foreground hover:text-background rounded-2xl py-2 hover:cursor-pointer">
            Έργα
          </li>
        </ul>
      </nav>
    </header>
  );
}
