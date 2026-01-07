"use client";

import React, { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/hero/1.jpg",
  "/hero/5.jpg",
  "/hero/2.jpg",
  "/hero/6.jpg",
];

const TEXT = [
  {
    title: "קפה בסמטה",
    subtitle: "קפה ומאפים בעבודת יד בלב משתלה ירוקה",
    description:
      "פוד־טראק קטן עם לב גדול, שמחבר בין קפה איכותי, מאפים טריים ואווירה ירוקה ופתוחה. מקום לעצור, לנשום, ולהרגיש רגע של שקט בתוך העיר.",
    highlight: "עוצרים לקפה – ונשארים לאווירה 🌿☕",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero min-h-screen transition-[background-image] duration-700 snap-start"
      style={{
        backgroundImage: `url(${HERO_IMAGES[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-black/50" />

      {/* Content */}
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl px-4">
          {TEXT.map((item, i) => (
            <div key={i}>
              {/* Title */}
              <h1 className="mb-4 text-5xl md:text-6xl font-bold tracking-tight">
                {item.title}
              </h1>

              {/* Subtitle */}
              <h2 className="mb-6 text-xl md:text-2xl font-medium text-white/90">
                {item.subtitle}
              </h2>

              {/* Description */}
              <p className="mb-6 text-base md:text-lg leading-relaxed text-white/80">
                {item.description}
              </p>

              {/* Highlight */}
              <p className="inline-block rounded-full bg-white/15 px-6 py-2 text-sm md:text-base font-medium backdrop-blur-md border border-white/20">
                {item.highlight}
              </p>
            </div>
          ))}

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
