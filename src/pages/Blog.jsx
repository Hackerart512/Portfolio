import React, { useState, useEffect } from "react";

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import PortfolioGridPage from "../components/portfolio/PortfolioGrid";
import { getBlogs } from "../api/Api";

const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <Helmet>
                <title>Blogs</title>
                <meta name="description" content="" />
            </Helmet>

            <Navbar bg_color="white" />

            <section className="bg-[#ffefd9] py-16 md:py-5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block text-sm font-bold uppercase tracking-[0.35em] text-[#ff9330]">
                            My Blogs
                        </span>
                        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            Insights & Articles
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            Thoughts, tutorials, and ideas on web development, modern technologies, and building better user experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16  ">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.map((card) => (
                                <Link
                                    key={card.id}
                                    to={`/blog/${card.slug}`}
                                    className="group "
                                >
                                    <img style={{ aspectRatio: "4/3" }} className="duration-[500ms] ease-in-out hover:brightness-75 rounded-2xl tranition" src={card.image} alt={card.title} />
                                    <h5 className="mx-1 mt-3 text-xl font-bold text-gray-900 hover:text-[#ff9330]">{card.title}</h5>
                                    <p className="mx-1  mt-2 text-gray-600">{card.desc}</p>

                                    <div className="mx-1  flex justify-between items-center">
                                        <span className="text-dark">{card.release}</span>
                                        <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#444] border-1  py-1 px-3 rounded-md">View details<span className="text-[#ff9330]">→</span></span>
                                    </div>

                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default BlogPage;

