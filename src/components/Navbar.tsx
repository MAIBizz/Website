"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass border-b border-brand">
            <nav className="container flex items-center justify-between h-16">
                <Link href="/" className="font-extrabold tracking-tight text-lg">
                    MAI<span className="text-brand">Bizz</span>
                </Link>

                <button
                    className="md:hidden badge"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="nav-menu"
                >
                    Menu
                </button>

                <ul
                    id="nav-menu"
                    className={`${
                        open ? "block" : "hidden"
                    } md:flex items-center gap-6 text-sm`}
                >
                    <li><a href="#services" className="opacity-90 hover:opacity-100">Services</a></li>
                    <li><a href="#process" className="opacity-90 hover:opacity-100">How we work</a></li>
                    <li><a href="#cases" className="opacity-90 hover:opacity-100">Cases</a></li>
                    <li><a href="#faq" className="opacity-90 hover:opacity-100">FAQ</a></li>
                    <li>
                        <a href="#contact" className="btn btn-primary btn-glow ml-2">Book a free consult</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
