import React from 'react'
import { FaWalking, FaMapMarkerAlt } from "react-icons/fa";

function SectionThree() {
    return (
        <section id="contact" className="w-full bg-gray-950 snap-start h-screen lg:pt-30">
            <div className="max-w-6xl mx-auto px-6 py-16 text-white">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">איך מגיעים?</h2>
                        <p className="text-white/85 text-lg leading-relaxed">
                            אנחנו נמצאים בתוך <span className="font-semibold">משתלת נווה צדק</span>{" "}
                            בתל אביב – פשוט מגיעים, נכנסים למשתלה, ומחפשים את הפוד־טראק.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                <p className="text-white/90">
                                    כתובת: משתלת נווה צדק, תל אביב
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaWalking />
                                <p className="text-white/90">
                                    טיפ: הכי כיף להגיע לשיטוט קצר במשתלה ואז לעצור לקפה.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#about"
                                className="btn rounded-2xl px-8 bg-white text-black border-0 hover:bg-white/90"
                            >
                                לחזור למעלה
                            </a>

                            <a
                                href="#"
                                className="btn rounded-2xl px-8 bg-transparent border border-white/40 text-white hover:bg-white/10"
                            >
                                לפתוח מפה (להחלפה ללינק אמיתי)
                            </a>
                        </div>
                    </div>

                    {/* Optional card */}
                    <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md p-8">
                        <h3 className="text-2xl font-bold mb-4">למה אנשים אוהבים אותנו?</h3>
                        <p className="text-white/85 leading-relaxed">
                            כי זו לא רק עגלת קפה – זו נקודת עצירה בתוך עולם ירוק.
                            קפה + מאפה + טבע = רגע קטן של טוב באמצע היום.
                        </p>

                        <div className="mt-6 grid gap-4">
                            <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
                                <p className="text-white/90">
                                    ☕ אם בא לכם “בוסט” של אנרגיה…
                                    <br />
                                    🌿 ואם בא לכם גם לנשום קצת ירוק…
                                    <br />
                                    <span className="font-semibold">קפה בסמטה זה בדיוק זה.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree