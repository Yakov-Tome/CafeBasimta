import React from 'react'

function Footer() {
    return (
        <div className='snap-start bg-[url("/footer.png")] h-80 bg-no-repeat bg-cover flex flex-row justify-center items-center text-white pb-10 gap-2'>
            <div className="mt-14 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} קפה בסמטה · משתלת נווה צדק · תל אביב
            </div>
        </div>
    )
}

export default Footer