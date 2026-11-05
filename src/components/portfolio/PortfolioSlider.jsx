import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { getCards } from "../../api/Api";

import "swiper/css";
import "swiper/css/pagination";

const PortfolioSlider = () => {
    const [cards, setCards] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchCards = async () => {
            setCards(await getCards());
        };
        fetchCards();
    }, []);

    return (
        <section className="relative w-full overflow-hidden py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1180px] px-4">
                <div className="mb-8 text-center md:mb-10">
                    <span className="font-Syne mb-2 block text-sm font-bold uppercase tracking-[0.22em] text-[#ff9330]">
                        Selected work
                    </span>
                    <h3 className="font-Syne mb-0 text-3xl font-bold text-[#171a24] md:text-[42px]">
                        Featured Portfolios
                    </h3>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        aria-label="Previous portfolio"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="portfolio-nav portfolio-nav-prev"
                    >
                        <i className="fa-solid fa-arrow-left text-sm" aria-hidden="true" />
                    </button>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        centeredSlides
                        loop={cards.length > 2}
                        spaceBetween={18}
                        slidesPerView={1}
                        autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        pagination={{ clickable: true, dynamicBullets: false }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="portfolio-swiper pb-14"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <article className="group mx-auto h-full overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_12px_38px_rgba(30,41,59,0.12)] transition-all duration-500">
                                    <div className="relative p-2.5 pb-0">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="h-[190px] w-full rounded-[16px] object-cover object-top md:h-[210px]"
                                        />
                                        <span className="absolute left-5 top-5 rounded-full bg-[#171a24]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                                            Featured project
                                        </span>
                                    </div>

                                    <div className="px-4  pt-4 md:px-6 md:pb-6">
                                        <Link
                                            to={`/portfolio/${card.slug}`}
                                            className="font-Syne mb-2 block text-lg font-bold leading-tight text-[#171a24] no-underline transition-colors hover:text-[#ff9330] md:text-xl"
                                        >
                                            {card.title}
                                        </Link>
                                        <p className="mb-3 line-clamp-2 text-sm leading-6 text-[#6b7280]">
                                            {card.desc || "A polished digital product designed for a better user experience."}
                                        </p>

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex min-w-0 flex-wrap gap-1.5">
                                                {(card.tag || ["UI/UX", "Development", "Responsive"]).slice(0, 3).map((tag, index) => (
                                                    <span key={`${tag}-${index}`} className="rounded-full bg-[#f2f4f8] px-2.5 py-1 text-[10px] font-semibold text-[#596173]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                to={`/portfolio/${card.slug}`}
                                                aria-label={`View ${card.title}`}
                                                className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[#171a24] text-white shadow-lg no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff9330]"
                                            >
                                                <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        aria-label="Next portfolio"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="portfolio-nav portfolio-nav-next"
                    >
                        <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
                    </button>
                </div>

                <div className="mt-1 flex justify-center">
                    <Link
                        to="/portfolios"
                        className="group inline-flex items-center gap-3 rounded-full border border-[#171a24] bg-[#171a24] px-7 py-3 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(23,26,36,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9330] hover:bg-[#ff9330]"
                    >
                        View all projects
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSlider;
