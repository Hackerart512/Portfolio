import React from "react";

const CallToAction = () => {
    return (
        <section className="bg-[#ffe9d9] py-5 md:py-5">
            <div className="container mx-auto px-6">
                <div className="rounded-[32px] bg-white p-10 md:p-14 shadow-[0_28px_80px_rgba(255,147,48,0.12)]">
                    <div className="grid gap-8 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Ready to launch your next project?
                            </h2>
                            <p className="mt-5 text-gray-700 leading-relaxed">
                                Let’s build a product that looks great, performs well, and grows your business with a clean, modern web presence.
                            </p>
                        </div>
                        <div>
                            <a href="tel:8302088852" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#333333] float-right">
                                Book a call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
