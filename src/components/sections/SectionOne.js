
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
        <div className='bg-[url("/foodtruck1.png")] bg-fixed bg-no-repeat bg-cover w-full h-full'>
            <div>
                <div className='flex flex-col items-center justify-center h-screen bg-black/50 p-4'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 text-center'>ברוכים הבאים לבית הקפה בסימטה</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white mb-8 text-center max-w-2xl'>היכן שהטעם פוגש את המסורת - חוויה קולינרית ייחודית בלב העיר.</p>
                    <div>
                        {/* Content */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne