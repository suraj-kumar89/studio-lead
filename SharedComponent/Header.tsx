"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function ContactusHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-[90rem] items-center px-4 sm:px-8 lg:px-[6rem] py-5 md:py-6">

                {/* LEFT - Logo */}
                <div className="flex-1">
                    <Link href="/">
                        <div className="relative w-[90px] h-[55px] sm:w-[100px] sm:h-[60px] lg:w-[110px] lg:h-[70px] cursor-pointer">
                            <Image
                                src="/logo1.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>

                {/* DESKTOP / TABLET NAV */}
                <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-base lg:text-lg font-medium justify-center flex-1">
                    <a
                        href="#how-we-think"
                        className="text-[#aeaeb8] hover:text-white transition"
                    >
                        How we think
                    </a>

                    <a
                        href="#work"
                        className="text-[#aeaeb8] hover:text-white transition"
                    >
                        Work
                    </a>

                    <a
                        href="#process"
                        className="text-[#aeaeb8] hover:text-white transition"
                    >
                        Process
                    </a>

                    <a
                        href="#faq"
                        className="text-[#aeaeb8] hover:text-white transition"
                    >
                        FAQ
                    </a>
                </nav>

                {/* RIGHT - BUTTON */}
               <Link href="/book-a-call" className="btn-bullseye">
  <span className="btn-default">Let’s Talk</span>
  <span className="btn-hover">Book a call</span>
</Link>

                {/* MOBILE MENU BUTTON */}
                <div className="flex md:hidden flex-1 justify-end">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-6 pb-6 flex flex-col gap-5 backdrop-blur-md">

                    <a
                        href="#how-we-think"
                        className="text-[#aeaeb8] hover:text-white transition text-base"
                    >
                        How we think
                    </a>

                    <a
                        href="#work"
                        className="text-[#aeaeb8] hover:text-white transition text-base"
                    >
                        Work
                    </a>

                    <a
                        href="#process"
                        className="text-[#aeaeb8] hover:text-white transition text-base"
                    >
                        Process
                    </a>

                    <a
                        href="#faq"
                        className="text-[#aeaeb8] hover:text-white transition text-base"
                    >
                        FAQ
                    </a>

                    <Link href="/contact_us">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-[#08080a] text-sm font-medium hover:bg-gray-100 transition w-full">
                            Talk to us
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}