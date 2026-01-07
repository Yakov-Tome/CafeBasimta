import React from 'react'
import { FaLeaf, FaCoffee, FaWalking, FaMapMarkerAlt } from "react-icons/fa";
import { GiCroissant } from "react-icons/gi";
function SectionTwo() {
    return (
        <section id="about" className="w-full snap-start h-screen bg-[url('/cupcake-mug.jpg')] bg-fixed bg-no-repeat bg-cover pt-24 lg:pt-40">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            מה זה קפה בסמטה?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            קפה בסמטה הוא פוד־טראק קטן עם לב גדול, שממוקם בתוך משתלת נווה צדק
                            בתל אביב. אנשים מגיעים כדי ליהנות מקפה איכותי ומאפים בעבודת יד,
                            ובאותה נשימה לשוטט בין הצמחים, לקחת אוויר ולחוות רגע ירוק ושקט
                            בתוך העיר.
                        </p>

                        <div className="mt-8 grid gap-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-gray-900">
                                    <FaLeaf />
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">מרחב פתוח וטבעי:</span>{" "}
                                    יושבים/עומדים ליד הקפה ומסביב – משתלה ענקית ומלאת חיים.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-gray-900">
                                    <FaCoffee />
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">טעם שמרגישים:</span> דגש על
                                    איכות, טריות ושירות נעים – כדי שכל עצירה תהיה שווה.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-gray-900">
                                    <GiCroissant />
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">מאפים בעבודת יד:</span> מבחר
                                    מפנק שמתאים לבוקר, לצהריים ולאחה״צ.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Simple “info card” */}
                    <div className="rounded-3xl bg-gray-50/40 backdrop-blur-sm border border-gray-200 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3" id="menu">
                            מה מחכה לכם אצלנו?
                        </h3>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            <li>• קפה חם / קר (אספרסו, אמריקנו, קפוצ׳ינו ועוד)</li>
                            <li>• מאפים מתוקים ומלוחים בעבודת יד</li>
                            <li>• אווירה ירוקה ומרגיעה בתוך המשתלה</li>
                            <li>• נקודת עצירה מושלמת לפני/אחרי שיטוט וקניות</li>
                        </ul>

                        <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-5">
                            <p className="text-gray-700">
                                <span className="font-semibold">הטיפ שלנו:</span> קחו קפה,
                                תפסו רגע בין הצמחים, ותנו לעיר להאט.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo