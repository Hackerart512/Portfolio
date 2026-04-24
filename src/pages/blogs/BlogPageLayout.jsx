import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'


import { Helmet } from 'react-helmet-async'

const BlogPageLayout = ({
    title,
    description,
    image,
    authorImage,
    authorName,
    catalog,
    releaseDate,
    children,
}) => {
    return (
        <>
            <Helmet>
                <title>{title || "About us - Personal Portfolio"}</title>
                <meta name="description" content={  description || ""} />
            </Helmet>
            <Navbar />
            <section style={{ background: "linear-gradient(181deg, #ffe9d9 50%, white 50%)" }} className="py-lg-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="font-Syne fw-bold flex justify-between mt-3">{title || "Right-lo-left   behind development in mobile web design"}</h1>
                        </div>

                        <div className="col-lg-12">
                            <img style={{ aspectRatio: "19/9" }} className="rounded-lg my-3 object-cover" src={image} alt="blog images" />
                        </div>
                        <div className="blog-info flex gap-4 items-center">
                            <div className="flex items-center justify-center">
                                <div className="mr-2">
                                    <img width="50" src={authorImage || "/images/profile/4.png"} alt="" />
                                </div>
                                <div className="">
                                    <small className='block text-[#a7a6a6] font-[500]'>Written by</small>
                                    <b>{authorName || "Pavan Prajapat"}</b>
                                </div>
                            </div>
                            <div className="catalog">
                                <div className="">
                                    <small className="text-[#a7a6a6] font-[500] block">Catalog</small>
                                    <b>{catalog || "Car"}</b>
                                </div>
                            </div>
                            <div className="catalog">
                                <div >
                                    <small className=" text-[#a7a6a6] font-[500] block">Release</small>
                                    <b>{releaseDate || "19 January 2024"}</b>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {children}

            <Footer />
        </>
    )
}

export default BlogPageLayout

