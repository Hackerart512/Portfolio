import React from 'react';
import { useSelector } from 'react-redux';

const Bio = () => {
    const { project, experience, client, fullName, firstName, lastName, contactNumber } = useSelector((state) => state.profile);

    const stats = [
        { value: project, label: 'Total Project', icon: 'fa-solid fa-folder' },
        { value: experience, label: 'Year Of Experience', icon: 'fa-solid fa-star' },
        { value: client, label: 'Client', icon: 'fa-solid fa-users' },
    ];

    return (
        <section className="relative overflow-hidden py-12 md:py-16">
            <span className="bio-dot-pattern absolute left-5 top-10 hidden lg:block" aria-hidden="true" />
            <span className="bio-ring bio-ring-left absolute hidden rounded-full lg:block" aria-hidden="true" />
            <span className="bio-ring bio-ring-right absolute hidden rounded-full lg:block" aria-hidden="true" />

            <div className="container relative z-[2] mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="relative mx-auto w-full max-w-[520px]">
                        <div className="bio-photo-shape absolute inset-x-[10%] bottom-[6%] top-[12%] rounded-[48%_48%_42%_42%] bg-[#ffe3c9]" aria-hidden="true" />
                        <div className="bio-ring-photo absolute inset-x-[17%] top-[18%] aspect-square rounded-full border border-[#ff9330]" aria-hidden="true" />

                        <div className="bio-float-card bio-float-code absolute left-0 top-[28%] z-[4] grid place-items-center rounded-[16px] bg-white text-[#263b91] shadow-[0_12px_30px_rgba(23,26,36,0.12)]">
                            <i className="fa-solid fa-code text-xl" aria-hidden="true" />
                        </div>
                        <div className="bio-float-card bio-float-chart absolute right-0 top-[45%] z-[4] grid place-items-center rounded-[16px] bg-white text-[#ff9330] shadow-[0_12px_30px_rgba(23,26,36,0.12)]">
                            <i className="fa-solid fa-chart-simple text-xl" aria-hidden="true" />
                        </div>
                        <div className="bio-float-card bio-float-rocket absolute right-[8%] top-[20%] z-[4] grid place-items-center rounded-full bg-white text-[#ff9330] shadow-[0_12px_30px_rgba(23,26,36,0.12)]">
                            <i className="fa-solid fa-rocket text-lg" aria-hidden="true" />
                        </div>

                        <img
                            src="/images/profile/officeboy.png"
                            className="relative z-[3] mx-auto aspect-square w-full object-contain drop-shadow-[0_18px_18px_rgba(23,26,36,0.12)]"
                            alt={`${fullName} profile illustration`}
                            title={fullName}
                            decoding="async"
                        />
                    </div>

                    <div>
                        <span className="inline-flex rounded-full bg-[#fff2e3] px-4 py-2 text-sm font-bold text-[#ff9330]">
                            Hello I'm <i className="fa-solid fa-hand ml-1.5" aria-hidden="true" />
                        </span>

                        <h3 className="font-Syne mb-3 mt-4 text-[42px] font-bold leading-[1.02] text-[#171a24] md:text-[48px]">
                            {firstName || fullName.split(' ')[0]}
                            <br />
                            <span className="text-[#ff9330]">{lastName || fullName.split(' ').slice(1).join(' ')}</span>
                        </h3>

                        <p className="mb-3 text-base font-bold text-[#171a24] md:text-lg">
                            Full Stack Developer | India-Based Professional
                        </p>
                        <p className="mb-6 max-w-[650px] leading-7 text-[#08080899]">
                            Hello, I'm {fullName}, a Full Stack Web Developer skilled in creating dynamic, user-friendly, and efficient web solutions. I specialize in responsive design, performance optimization, and scalable system integration to deliver exceptional user experiences.
                        </p>

                        <div className="mb-7 flex flex-wrap items-center gap-4 md:gap-5">
                            {stats.map((stat, index) => (
                                <React.Fragment key={stat.label}>
                                    <div className="flex min-w-[120px] items-center gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#fff6ec] text-[#ff9330]">
                                            <i className={`${stat.icon} text-sm`} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <span className="font-Syne block text-xl font-bold leading-none text-[#171a24]">{stat.value}</span>
                                            <p className="mb-0 mt-1 text-xs leading-tight text-[#777e8d]">{stat.label}</p>
                                        </div>
                                    </div>
                                    {index < stats.length - 1 && <span className="hidden h-9 w-px bg-[#dfe2e8] md:block" aria-hidden="true" />}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/resume/resume.pdf"
                                download="Pavan_Prajapat_Resume.pdf"
                                className="inline-flex items-center gap-3 rounded-full bg-[#171a24] px-6 py-3 font-bold text-white no-underline transition-all hover:-translate-y-1 hover:bg-[#ff9330] hover:text-[#171a24]"
                            >
                                Download My Resume
                                <i className="fa-solid fa-download text-sm" aria-hidden="true" />
                            </a>
                            <a
                                href={`tel:${contactNumber}`}
                                className="inline-flex items-center gap-3 rounded-full border border-[#171a24] bg-white px-6 py-3 font-bold text-[#171a24] no-underline transition-all hover:-translate-y-1 hover:border-[#ff9330] hover:text-[#ff9330]"
                            >
                                Let's Talk
                                <i className="fa-solid fa-arrow-up-right-from-square text-sm" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bio-photo-shape { box-shadow: inset 0 0 0 8px rgba(255,255,255,0.58); }
                .bio-ring-photo { border-radius: 50%; opacity: 0.75; }
                .bio-float-card { width: 58px; height: 58px; }
                .bio-float-code { animation: bioFloat 4s ease-in-out infinite; }
                .bio-float-chart { animation: bioFloat 4.5s ease-in-out 0.4s infinite; }
                .bio-float-rocket { animation: bioFloat 3.8s ease-in-out 0.8s infinite; }
                .bio-dot-pattern { width: 92px; height: 92px; background-image: radial-gradient(#ff9330 2px, transparent 2px); background-size: 18px 18px; opacity: 0.45; }
                .bio-ring { border: 1px solid rgba(255,147,48,0.4); }
                .bio-ring-left { width: 210px; height: 210px; left: -155px; bottom: 12px; }
                .bio-ring-right { width: 260px; height: 260px; right: -210px; bottom: -110px; }
                @keyframes bioFloat { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(2deg); } }
                @media (max-width: 639px) {
                    .bio-float-card { width: 46px; height: 46px; }
                    .bio-float-code { left: 2%; }
                    .bio-float-chart { right: 1%; }
                }
            `}</style>
        </section>
    );
};

export default Bio;
