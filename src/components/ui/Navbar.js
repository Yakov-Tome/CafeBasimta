"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const LINKS = [
    { id: "home", label: "ראשי", side: "start" },
    { id: "about", label: "אודות", side: "start" },
    { id: "services", label: "שירותים", side: "end" },
    { id: "contact", label: "צור קשר", side: "end" },
];

export default function Navbar() {
    const ids = LINKS.map((l) => l.id);
    const activeId = useScrollSpy(ids, { defaultId: "home", threshold: 0.6 });

    const linkClass = (id) =>
        `relative mx-3 text-2xl font-medium text-white
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white/35
     after:w-0 after:transition-all after:duration-300 hover:after:w-full px-10 hover:scale-120 transition-transform duration-300
     ${activeId === id ? "after:w-full" : ""}`;

    const start = LINKS.filter((l) => l.side === "start");
    const end = LINKS.filter((l) => l.side === "end");

    return (
        <div className="navbar bg-white/25 backdrop-blur-xl fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-sm mt-16 rounded-4xl max-w-5xl w-full">
            <div className="navbar-start flex justify-end">
                {start.map((l) => (
                    <Link key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                        {l.label}
                    </Link>
                ))}
            </div>

            <div className="navbar-center z-50">
                <Link href="/" className="btn btn-ghost hover:bg-transparent border-0 shadow-none">
                    <Image src="/logo.png" alt="Logo" width={200} height={40} />
                </Link>
            </div>

            <div className="navbar-end flex justify-start">
                {end.map((l) => (
                    <Link key={l.id} href={`#${l.id}`} className={linkClass(l.id)}>
                        {l.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
