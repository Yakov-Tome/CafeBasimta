"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const LINKS = [
    { id: "home", label: "ראשי" },
    { id: "about", label: "אודות" },
    { id: "services", label: "שירותים" },
    { id: "contact", label: "צור קשר" },
];

export default function Navbar() {
    const ids = LINKS.map((l) => l.id);
    const activeId = useScrollSpy(ids, { defaultId: "home", threshold: 0.6 });

    const linkClass = (id) =>
        `relative block px-6 py-3 text-3xl font-medium text-white hover:text-text
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-text
        after:w-0 after:transition-all after:duration-300 hover:after:w-full
        ${activeId === id ? "after:w-full" : ""}`;

    return (
        <div className="navbar bg-white/25 backdrop-blur-xl fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-sm mt-8 lg:mt-14 rounded-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl w-full">

            {/* 🟢 מובייל – לוגו + המבורגר */}
            <div className="navbar-start lg:hidden">
                <Link href="/" className="btn btn-ghost p-0 absolute -right-22 -translate-x-1/2 border-0 shadow-none">
                    <Image src="/logo.png" alt="Logo" width={140} height={32} />
                </Link>
            </div>

            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost text-white">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 p-4 shadow bg-black/70 backdrop-blur-xl rounded-box w-52"
                    >
                        {LINKS.map((l) => (
                            <li key={l.id}>
                                <Link href={`#${l.id}`} className="text-white text-lg">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 🟣 דסקטופ – לשוניות + לוגו במרכז */}
            <div className="navbar-start hidden lg:flex justify-end">
                {LINKS.slice(0, 2).map((l) => (
                    <Link key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                        {l.label}
                    </Link>
                ))}
            </div>

            <div className="navbar-center hidden lg:flex">
                <Link href="/" className="btn btn-ghost hover:bg-transparent border-0 shadow-none">
                    <Image src="/logo.png" alt="Logo" width={200} height={40} />
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex justify-start">
                {LINKS.slice(2).map((l) => (
                    <Link key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                        {l.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
