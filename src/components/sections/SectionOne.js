
import Image from 'next/image'
import React from 'react'


function SectionOne() {
    const info = [

        {
            image: '/croissant1.gif',
            title: 'אוכל טרי ומקומי',
            description: 'תפריט מגוון עם דגש על מרכיבים טריים ומקומיים המותאמים לעונות השנה.'
        }, {
            image: '/mood.gif',
            title: 'אווירה נעימה',
            description: 'מוזיקה חיה ואווירה חמימה שמזמינה אתכם להירגע וליהנות מהרגע.'
        },
        {
            image: '/coffee1.gif',
            title: 'קפה איכותי',
            description: 'מבחר קפה מיוחד המגיע מזרעים מובחרים, קלוי במקום להבטחת טריות וטעם מעולה.'
        },

    ]
    return (
        <div className='bg-[url("/1.png")] bg-fixed bg-no-repeat bg-cover w-full h-full'>
            <div>
                <div className='flex flex-col items-center justify-center h-screen bg-black/50 p-4'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 text-center'>ברוכים הבאים לבית הקפה בסימטה</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white mb-8 text-center max-w-2xl'>היכן שהטעם פוגש את המסורת - חוויה קולינרית ייחודית בלב העיר.</p>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {info.map((item, index) => (
                                <div key={index} className='bg-white rounded-lg p-6 shadow-lg text-center'>
                                    <div className='text-5xl mb-4'>
                                        <Image src={item.image} alt={item.title} className="mx-auto" width={232} height={232} />
                                    </div>
                                    <h2 className='text-2xl font-semibold mb-2 text-secondary'>{item.title}</h2>
                                    <p className='text-gray-700'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne