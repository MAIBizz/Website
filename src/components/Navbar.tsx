"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-brand-border">
            <nav className="container flex items-center justify-between h-14">
                <Link href="/" className="font-bold text-lg">MAIBizz</Link>
                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
                <ul className={`md:flex gap-6 items-center ${open ? "block mt-3" : "hidden md:flex"}`}>
                    <li><a href="#services" className="opacity-90 hover:opacity-100">Services</a></li>
                    <li><a href="#cases" className="opacity-90 hover:opacity-100">Cases</a></li>
                    <li><a href="#contact" className="opacity-90 hover:opacity-100">Contact</a></li>
                    <li>
                        <a href="#contact"
                           className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 bg-brand.primary text-black font-semibold hover:opacity-90">
                            Free consult
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
