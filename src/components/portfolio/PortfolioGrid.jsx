import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCards } from "../../api/Api";

const PortfolioGridPage = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const data = await getCards();
            setCards(data);
        };
        fetchCards();
    }, []);

    return (
        <section className="bg-white py-16 md:py-5">
            <div className="container mx-auto px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        cards.map((card) => (
                            <Link
                                key={card.id}
                                to={`/portfolio/${card.slug}`}
                                className="group rounded-[28px] border border-[#f1e4d8] bg-[#f9fafc] p-3 text-left transition hover:border-[#ff9330] hover:bg-[#fff8ec]"
                            >
                                <img style={{ aspectRatio: " 1 / 1" }} class="rounded-2xl border-1 border-[#c7c7c7]" src={card.image} alt={card.title} />
                                <span class="mt-4 d-block w-100 text-center gap-2 text-sm font-medium text-light bg-dark rounded-xl py-2">View details
                                    <span class="text-[#ff9330] ml-2">→</span>
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PortfolioGridPage;

