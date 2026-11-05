import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        { title: 'Website Design', description: 'Responsive, modern and user-friendly websites.', icon: 'fa-solid fa-code', to: '/services/web-development' },
        { title: 'Landing Page for Meta Ads Campaign', description: 'High-converting landing pages that boost your business.', icon: 'fa-solid fa-bullhorn', to: '/services/lead-generation', popular: true },
        { title: 'Website Technical SEO', description: 'Improve your rankings with advanced SEO strategies.', icon: 'fa-solid fa-magnifying-glass-chart', to: '/services/website-seo' },
        { title: 'App Development', description: 'Build powerful and scalable mobile applications.', icon: 'fa-solid fa-mobile-screen-button', to: '/services/it-services' },
        { title: 'Custom Tool (CRM, LMS, ERP, Business Tool)', description: 'Tailored software solutions for your business needs.', icon: 'fa-solid fa-gears', to: '/services/it-services' },
    ];

    const ServiceCard = ({ item }) => (
        <Link
            to={item.to}
            className={`group relative flex min-h-[112px] items-center gap-3 rounded-[15px] border bg-white px-4 py-4 text-[#171a24] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9330] hover:shadow-[0_10px_28px_rgba(255,147,48,0.12)] md:px-5 ${item.popular ? 'border-[#ff9330] shadow-[0_8px_24px_rgba(255,147,48,0.12)]' : 'border-[#e8e9ed]'}`}
        >
            {item.popular && <span className="absolute -right-[1px] -top-[13px] flex items-center gap-1 rounded-full bg-[#ff9330] px-3 py-1 text-[10px] font-bold text-white"><i className="fa-solid fa-star text-[8px]" />Popular</span>}
            <span className="grid h-[52px] w-[52px] flex-none place-items-center rounded-[16px] bg-[#fff3e5] text-[#171a24] transition-colors group-hover:bg-[#ff9330] group-hover:text-white"><i className={`${item.icon} text-xl`} /></span>
            <span className="min-w-0 pr-3">
                <span className="font-Syne mb-1 block text-[13px] font-bold leading-[1.25] md:text-sm">{item.title}</span>
                <span className="block text-[11px] leading-[1.45] text-[#777e8d] md:text-xs">{item.description}</span>
            </span>
            <span className="ml-auto grid h-9 w-9 flex-none place-items-center rounded-full bg-[#f4f5f7] text-[#171a24] transition-all group-hover:translate-x-1 group-hover:bg-[#171a24] group-hover:text-white"><i className="fa-solid fa-arrow-right text-xs" /></span>
        </Link>
    );

    return (
        <section className="relative overflow-hidden bg-white py-12 md:py-16">
            <div className="service-corner service-corner-left absolute hidden md:block" aria-hidden="true" />
            <div className="service-corner service-corner-right absolute hidden md:block" aria-hidden="true" />
            <div className="container relative z-[2] mx-auto px-4">
                <div className="mb-7 text-center">
                    <span className="font-Syne text-xs font-bold text-[#ff9330]">Service</span>
                    <h3 className="font-Syne mb-0 mt-1 text-3xl font-bold text-[#171a24]">My specialties</h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.slice(0, 3).map((item) => <ServiceCard key={item.title} item={item} />)}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center">
                    <ServiceCard item={services[3]} />
                    <div className="service-laptop relative mx-auto hidden min-h-[112px] w-full place-items-center lg:grid" aria-hidden="true">
                        <div className="absolute top-[-8px] w-[210px]">
                            <div className="relative mx-auto h-[82px] w-[150px] rounded-t-[10px] border-[4px] border-[#171a24] bg-[#eef3fb]">
                                <div className="absolute left-4 top-3 grid grid-cols-2 gap-2">
                                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ff9330] text-white"><i className="fa-solid fa-code text-sm" /></span>
                                    <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-[#51627a]"><i className="fa-solid fa-cloud text-sm" /></span>
                                </div>
                                <span className="absolute bottom-2 left-4 h-1 w-16 rounded bg-[#ff9330]" />
                            </div>
                            <div className="mx-auto h-[10px] w-[180px] rounded-b-[10px] rounded-t-[3px] bg-[#171a24]" />
                            <div className="mx-auto h-[4px] w-[210px] rounded-full bg-[#ff9330]/70" />
                        </div>
                    </div>
                    <ServiceCard item={services[4]} />
                </div>

                <div className="mt-8 text-center">
                    <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-[#ff9330] bg-[#171a24] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(255,147,48,0.22)] transition-all hover:-translate-y-1 hover:bg-[#ff9330] hover:text-[#171a24]">
                        Let's Talk <i className="fa-solid fa-paper-plane text-xs" />
                    </Link>
                </div>
            </div>

            <style>{`
                .service-corner { width: 240px; height: 240px; pointer-events: none; border-radius: 50%; border: 1px solid rgba(255,147,48,0.45); }
                .service-corner-left { left: -175px; bottom: -155px; box-shadow: 0 0 0 45px rgba(255,147,48,0.08); }
                .service-corner-right { right: -175px; bottom: -145px; border-color: rgba(23,26,36,0.18); box-shadow: 0 0 0 45px rgba(23,26,36,0.03); }
            `}</style>
        </section>
    );
};

export default Service;
