import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getCards } from "../api/Api";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioSlider = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const data = await getCards();
            setCards(data);
        };
        fetchCards();
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto py-10">
            <span className="font-Syne fw-bold text-[#ff9330] text-center d-block">Portfolios</span>
            <h3 className="font-Syne fw-bold position-relative mb-3 text-center">Our Work</h3>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12"
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="bg-[#0808080a] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-60 w-full object-cover"
                            />
                            <div className="p-4">
                                <h5 className="font-Syne fw-bold flex justify-between mt-3">{card.title}</h5>
                                {/* 🏷️ Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {card.tag?.map((t, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    to={`/work/${card.id}`}
                                    className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}

export default PortfolioSlider
