import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'


import { Helmet } from 'react-helmet-async'

const ShowWork = () => {
    return (
        <>
            <Helmet>
                <title>About us - Personal Portfolio</title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar />

            <section style={{ background: "linear-gradient(181deg, #ffe9d9 50%, white 50%)" }} className="py-lg-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 class="font-Syne fw-bold flex justify-between mt-3">Right-lo-left   behind development in mobile web design</h4>
                                </div>
                                <div className="col-lg-6">
                                    <div className="work-info flex gap-4 items-center">
                                        <div className="flex items-center justify-center">
                                            <div className="mr-2">
                                                <img width="50" src="images/profile/4.png" alt="" />
                                            </div>
                                            <div className="">
                                                <small className='block text-[#a7a6a6] font-[500]'>Written by</small>
                                                <b>Pavan Prajapat</b>
                                            </div>
                                        </div>
                                        <div className="catalog">
                                            <div className="">
                                                <small className="text-[#a7a6a6] font-[500] block">Catalog</small>
                                                <b>Car</b>
                                            </div>
                                        </div>
                                        <div className="catalog">
                                            <div >
                                                <small className=" text-[#a7a6a6] font-[500] block">Release</small>
                                                <b>19 January 2024</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-12">
                            <img style={{ aspectRatio: "19/9" }} class="rounded-lg my-3 object-cover" src="/images/car.jpg" decording="async" loading="lazy" alt="blog images" />
                        </div>





                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">


                            {/* description */}
                            <div className="mt-3">
                                <h5 class="font-Syne fw-bold flex justify-between mt-3">Overview</h5>



                                <p class="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt repellat quisquam tempore ea quis impedit aliquid odio corrupti, placeat inventore facilis non quos!</p>

                                <p class="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus. Sequi error minima, autem magnam quidem distinctio mollitia laborum nostrum libero. Sequi eius, praesentium, adipisci sed, porro cum at et quaerat cupiditate quia totam.</p>

                                <p class="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis esse nesciunt et exercitationem illum earum ducimus. Voluptatem excepturi rerum expedita explicabo saepe quo, quaerat aliquid adipisci? Accusamus itaque soluta facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias maxime deserunt quidem aut enim suscipit fuga itaque quo laborum fugiat unde commodi id, qui corporis impedit tempora tenetur velit? Labore laborum sequi atque blanditiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, odit iure magnam voluptatibus cumque quos voluptas aut praesentium nihil, enim unde, reprehenderit reiciendis.</p>

                                <div className="row my-4">
                                    <div className="col-lg-6">
                                        <img className='rounded-lg' src="images/car_with_man.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <img className='rounded-lg' src="images/car-staring.jpg" alt="" />
                                    </div>
                                </div>

                                <h5 class="font-Syne fw-bold flex justify-between mt-3">Overview</h5>
                                <p class="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, iure ipsa velit dicta, nobis, obcaecati beatae officia at magni dolorem assumenda animi!</p>

                                <p class="text-[18px] mt-4 font-Syne text-[#08080899]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error culpa tempore non, inventore quis sed vitae reiciendis. Debitis beatae excepturi consequatur commodi deleniti neque deserunt expedita alias omnis explicabo officia, fugit optio magni, voluptate eum mollitia consectetur voluptatum fuga totam quod. Adipisci, fugit aliquid!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ShowWork
