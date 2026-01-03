import SectionOne from '@/components/sections/SectionOne'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import React from 'react'

const sections = [
  { title: 'ראשי', content: <SectionOne />, id: 'home' },
  { title: 'אודות', content: 'Learn more About us here.', id: 'about' },
  { title: 'שירותים', content: 'Discover our Services.', id: 'services' },
  { title: 'צור קשר', content: 'Get in touch with us.', id: 'contact' },
]

function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Hero />
      {sections.map((section, index) => (
        <section key={index} id={section.id} className="h-screen snap-start flex items-center justify-center flex-col">
          {section.content}
        </section>
      ))}
      <Footer />
    </div>
  )
}

export default Home