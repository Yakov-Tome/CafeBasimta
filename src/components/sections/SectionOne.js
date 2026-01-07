
"use client";

import React from "react";
import { FaLeaf, FaCoffee, FaWalking, FaMapMarkerAlt } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";

export default function CafeBasimtaPage() {
    const features = [
        {
            icon: <FaLeaf size={34} />,
            title: "חוויה ירוקה",
            text: "עגלת קפה בלב משתלת נווה צדק – מרחב פתוח, צמחים ואווירה של חופשה באמצע העיר.",
        },
        {
            icon: <FaCoffee size={34} />,
            title: "קפה איכותי",
            text: "קפה שמכינים באהבה – פולים נבחרים, הכנה מדויקת וטעם שמרגישים בכל לגימה.",
        },
        {
            icon: <GiCroissant size={34} />,
            title: "מאפים בעבודת יד",
            text: "מאפים טריים מכל מיני סוגים, בעבודת יד – מושלם לצד הקפה, בכל שעה ביום.",
        },
        {
            icon: <FaWalking size={34} />,
            title: "עצירה מושלמת",
            text: "מגיעים לשיטוט במשתלה, נשארים לקפה – או להפך. רגע קטן של שקט ונשימה.",
        },
    ];

    return (
        <main className="w-full snap-start h-screen">
            {/* HERO */}
            <section className='relative bg-[url("/foodtruck1.png")] bg-fixed bg-no-repeat bg-cover w-full min-h-screen'>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md border border-white/20 mb-6">
                        <FaMapMarkerAlt />
                        <span className="text-sm md:text-base text-white/90">
                            משתלת נווה צדק · תל אביב
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
                        קפה בסמטה
                    </h1>

                    {/* Marketing line */}
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90 leading-relaxed">
                        פוד־טראק שמוכר <span className="font-semibold">קפה</span> ו
                        <span className="font-semibold">מאפים בעבודת יד</span>, בתוך משתלה
                        ענקית וירוקה.
                        <br />
                        <span className="font-semibold">חוויה כפולה:</span> קפה מושלם + שיטוט
                        בין צמחים ואווירה של טבע באמצע העיר.
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#menu"
                            className="btn rounded-2xl px-8 border-0 bg-white text-black hover:bg-white/90"
                        >
                            לראות מה מחכה לך
                        </a>

                        <a
                            href="#contact"
                            className="btn rounded-2xl px-8 bg-transparent border border-white/50 text-white hover:bg-white/10"
                        >
                            איך מגיעים?
                        </a>
                    </div>

                    {/* Feature icons */}
                    <div className="mt-14 w-full max-w-5xl">
                        <div className="grid gap-8 md:grid-cols-4">
                            {features.map((f, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md p-6"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="text-white">{f.icon}</div>
                                        <h3 className="text-xl font-semibold">{f.title}</h3>
                                        <p className="text-sm text-white/85 leading-relaxed">
                                            {f.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-14 text-white/70 text-sm animate-pulse">
                        גלול למטה כדי להכיר אותנו יותר ↓
                    </div>
                </div>
            </section>
        </main>
    );
}