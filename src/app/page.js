import React from "react";

function Home() {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "menu", title: "Menu" },
    { id: "contact", title: "Contact" },
  ];
  return (
    <div className="h-screen">
      {sections.map((section) => (
        <section
          id={section.id}
          key={section.id}
          className="h-screen flex items-center justify-center scroll-mt-20"
        >
          <h1 className="text-4xl font-bold">{section.title} Section</h1>
        </section>
      ))}
    </div>
  );
}

export default Home;
