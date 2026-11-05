import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { getCards } from "../../api/Api";
import { useSelector } from "react-redux";

const skills = [
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "#77c82f" },
    { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
    { name: "Python", icon: "fa-brands fa-python", color: "#f5c542" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
    { name: "Database", icon: "fa-solid fa-database", color: "#b06cff" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "#ffffff" },
];

const ItServices = () => {
    const [cards, setCards] = useState([]);
    const { firstName, lastName } = useSelector((state) => state.profile);

    useEffect(() => {
        getCards().then(setCards);
    }, []);

    return (
        <>
            <Helmet>
                <title>IT Services | DevPavan</title>
                <meta name="description" content="Full-stack IT services, web applications, APIs, dashboards, and digital product development." />
            </Helmet>

            <Navbar bg_color="#111827" />

            <main className="overflow-hidden bg-[#111827] text-white">
                <section className="relative border-b border-white/10">
                    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="container relative z-[2] mx-auto px-6 py-12 md:py-16">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                            <div>
                                <span className="font-Syne text-xs font-bold uppercase tracking-[0.32em] text-[#ff9330]">My Portfolio</span>
                                <h1 className="font-Syne mt-4 mb-0 text-[42px] font-bold leading-[0.95] md:text-[58px]">
                                    {firstName}<br /><span className="text-[#ff9330]">{lastName}</span>
                                </h1>
                                <p className="mt-5 mb-0 max-w-xl text-sm leading-6 text-[#b9c0cd]">
                                    Turning ideas into powerful digital experiences.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link to="/contact" className="rounded-full bg-[#ff9330] px-5 py-3 text-sm font-bold text-[#111827] no-underline">
                                        Contact Me <i className="fa-solid fa-arrow-right ml-1 text-xs" />
                                    </Link>
                                    <Link to="/portfolios" className="rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white no-underline transition hover:border-[#ff9330] hover:text-[#ff9330]">
                                        My Works
                                    </Link>
                                </div>
                            </div>

                            <div className="relative min-h-[260px] md:min-h-[320px]">
                                <div className="absolute right-[2%] top-[8%] h-[230px] w-[360px] max-w-full rotate-[-4deg] rounded-[18px] border border-[#315080] bg-[#1a2539] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                    <div className="absolute left-[16%] top-[12%] h-[132px] w-[68%] rounded-lg border border-[#6c7e9e] bg-[#101827] p-3">
                                        <div className="mb-3 h-2 w-16 rounded-full bg-[#ff9330]" />
                                        <div className="grid grid-cols-3 gap-2">
                                            {["#ff9330", "#4a9cff", "#b06cff"].map((color, index) => (
                                                <div key={index} className="rounded-md border border-white/10 bg-[#172238] p-2">
                                                    <i className="fa-solid fa-code text-sm" style={{ color }} />
                                                    <div className="mt-3 h-1 rounded bg-white/20" />
                                                    <div className="mt-2 h-1 w-3/4 rounded bg-white/10" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-[15%] left-[12%] h-[10px] w-[76%] rounded-full bg-[#090e18]" />
                                </div>
                                <div className="absolute bottom-0 right-[8%] h-[118px] w-[78px] rounded-xl border border-[#7aa6ff]/40 bg-[#1d3152] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                                    <div className="m-auto mt-4 h-9 w-9 rounded-lg bg-[#ff9330]/20 text-center leading-[36px] text-[#ff9330]">
                                        <i className="fa-solid fa-mobile-screen-button" />
                                    </div>
                                    <div className="mx-auto mt-4 h-1 w-12 rounded bg-white/20" />
                                    <div className="mx-auto mt-2 h-1 w-8 rounded bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f7f8fb] py-12 text-[#171a24] md:py-16">
                    <div className="container mx-auto px-6">
                        <div className="mb-7">
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff9330]">Portfolio</span>
                            <h2 className="font-Syne mt-2 mb-2 text-2xl font-bold md:text-3xl">Featured Projects</h2>
                            <p className="mb-0 text-sm text-[#777f8d]">A selection of my modern and responsive digital products.</p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {cards.slice(0, 6).map((card, index) => (
                                <Link key={card.id} to={`/portfolio/${card.slug}`} className="group overflow-hidden rounded-[18px] border border-[#e8eaf0] bg-white text-[#171a24] no-underline shadow-[0_10px_35px_rgba(23,26,36,0.06)]">
                                    <div className="relative overflow-hidden p-2.5 pb-0">
                                        <img src={card.image} alt={card.title} className="h-[180px] w-full rounded-[12px] object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                                        {index === 0 && <span className="absolute left-5 top-5 rounded-full bg-[#ff9330] px-3 py-1 text-[10px] font-bold text-[#111827]">Featured</span>}
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-4">
                                        <h3 className="font-Syne mb-0 text-sm font-bold">{card.title}</h3>
                                        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#111827] text-white"><i className="fa-solid fa-arrow-right text-[10px]" /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#111827] py-12 md:py-16">
                    <div className="container mx-auto px-6">
                        <div className="mb-7">
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff9330]">Expertise</span>
                            <h2 className="font-Syne mt-2 mb-2 text-2xl font-bold md:text-3xl">Skills & Expertise</h2>
                            <p className="mb-0 text-sm text-[#9da6b4]">Technologies used to build scalable digital products.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="rounded-[14px] border border-white/10 bg-[#171f30] px-2 py-5 text-center transition hover:-translate-y-1 hover:border-[#ff9330]/50">
                                    <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }} />
                                    <p className="mt-3 mb-0 text-xs font-bold text-[#d7dce5]">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[18px] border border-[#ff9330]/25 bg-[#172033] px-5 py-5 sm:flex-row sm:items-center md:px-8">
                            <div>
                                <h3 className="font-Syne mb-1 text-lg font-bold">Let's Collaborate!</h3>
                                <p className="mb-0 text-sm text-[#aab3c1]">Ready to turn your next idea into a successful product?</p>
                            </div>
                            <Link to="/contact" className="rounded-full bg-[#ff9330] px-5 py-3 text-sm font-bold text-[#111827] no-underline">Contact Me <i className="fa-solid fa-arrow-right ml-1 text-xs" /></Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default ItServices;
