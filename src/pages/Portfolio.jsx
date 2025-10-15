import React, { useState, useEffect } from "react";

import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

import { Helmet } from 'react-helmet-async'
import { getById } from "../api/Api";
import { useParams } from "react-router-dom";

const PortfolioDetailPage = () => {

   
    const { id } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        getById(id).then(setCard);
    }, [id]);


    if (!card) return <div className="text-center p-10">Loading...</div>;

    return (
        <>
            <Helmet>
                <title>{card.title}</title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar />
            <section className="relative w-full h-[900px] overflow-hidden">
                <img
                    src={card.image}
                    alt="Project Feature"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                        {card.title}
                    </h1>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-10">

                <div className="flex flex-wrap gap-3 mb-5">
                    {card.tags?.map((t, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold">About This Project</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Monisa Freelancing Portal is a modern platform connecting freelancers and clients with
                        powerful tools for collaboration, project management, and secure payments.
                        Built using the MERN stack, it ensures performance, scalability, and a clean user experience.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The portal includes real-time chat, wallet-based transactions, job bidding, and user profile systems.
                        It is designed to simplify freelance hiring and project tracking.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {card.gallery?.map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                                <img
                                    src={img}
                                    className="w-full  object-cover"
                                    alt={`Gallery ${index + 1}`}
                                />
                            </div>
                        ))}



                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PortfolioDetailPage;
