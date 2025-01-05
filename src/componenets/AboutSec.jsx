import React from 'react'

const AboutSec = () => {
    return (
        <>
            <section className="bg-[#ffe9d9] py-10">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img style={{ "aspect-ratio": "1/1", objectFit: "contain" }} src="/images/profile/officeboy.png" className="h-100 w-100" alt="" title="" decoding="async" />
                        </div>
                        <div className="col-lg-6 items-center">

                         
                                <span className="font-Syne fw-bold text-[#ff9330]">About me</span>
                                <h3 className="hero-title font-Syne fw-bold position-relative mb-4 ">
                                    Pavan Prajapat
                                </h3>

                                <h4 class="font-Syne fw-bold flex justify-between mb-4">
                                    Full Stack Web Developer
                                </h4>

                                <b class="font-Syne text-[20px] " style={{lineHeight: "normal;"}}>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</b>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.</p>
 

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSec
