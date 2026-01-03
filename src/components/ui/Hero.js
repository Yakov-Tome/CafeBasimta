"use client";

import React, { useEffect, useState } from "react";

const HERO_IMAGES = ["/Hero1.jpg", "/Hero2.jpg", "/Hero3.jpg"];
const Text = [
  { title: "קפה בסמטה", description: "קפה טוב, מאפים טריים ושקט ירוק – בתוך משתלה קסומה בנווה צדק" },
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
    <div
      className="hero min-h-[80vh] transition-[background-image] duration-700 snap-start"
      style={{
        backgroundImage: `url(${HERO_IMAGES[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          {Text.map((item, i) => (
            <div key={i}><h1 className="mb-5 text-5xl font-bold">{item.title}</h1>
              <p className="mb-5">
                {item.description}
              </p>
            </div>))}
          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
