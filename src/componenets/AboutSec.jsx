import React from 'react'

const AboutSec = () => {
    return (
        <>
            <section className="bg-[#ffe9d9] py-md-5 py-3">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img style={{ "aspect-ratio": "1/1", objectFit: "contain" }} src="/images/profile/officeboy.png" className="h-100 w-100" alt="" title="" decoding="async" />
                        </div>
                        <div className="col-lg-6 items-center">

                         
                                <span className="font-Syne fw-bold text-[#ff9330]">About me</span>
                                <h3 className="font-Syne fw-bold position-relative mb-3 md:mb-4 ">
                                    Pavan Prajapat
                                </h3>

                                <h4 class="font-Syne fw-bold flex justify-between mb-3 md:mb-4 ">
                                    Full Stack Web Developer
                                </h4>

                                <b class="font-Syne text-[16px] md:text-[20px] " style={{lineHeight: "normal;"}}>A Product Full stack Developer and I am in the game for over 1+ years. I am proud of my works and ready to face the next challenge</b>

                                <p className="text-[18px] mt-4 font-Syne text-[#08080899]">Hello, I'm Pavan Prajapat, a Full Stack Web Developer skilled in creating dynamic, user-friendly, and efficient web solutions. I specialize in responsive design, performance optimization, and scalable system integration to deliver exceptional user experiences.</p>
 

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSec
