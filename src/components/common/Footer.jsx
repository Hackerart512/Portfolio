import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
    const { fullName, address, contactNumber, email, instagram, linkedin, github, telegram, Facebook } =
        useSelector((state) => state.profile);

    const links = [
        { label: 'Home', to: '/' },
        { label: 'Portfolio', to: '/portfolios' },
        { label: 'Services', to: '/services' },
        { label: 'About', to: '/about-us' },
        { label: 'Contact', to: '/contact' },
    ];

    const socialLinks = [
        { label: 'LinkedIn', icon: 'fa-linkedin-in', href: linkedin },
        { label: 'GitHub', icon: 'fa-github', href: github },
        { label: 'Instagram', icon: 'fa-instagram', href: instagram },
        { label: 'Facebook', icon: 'fa-facebook-f', href: Facebook },
        { label: 'Telegram', icon: 'fa-telegram', href: telegram },
    ].filter((social) => social.href);

    return (
        <footer className="px-3 pb-4 pt-6 md:px-6 md:pb-6">
            <div className="  overflow-hidden rounded-[24px] bg-[#000000] shadow-[0_18px_50px_rgba(13,24,42,0.18)]">
                <div className="flex flex-col items-start justify-between gap-5 border-b border-white/10 px-5 py-6 sm:flex-row sm:items-center md:px-10">
                    <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff9330] text-[#0d182a]">
                            <i className="fa-solid fa-paper-plane text-lg" aria-hidden="true" />
                        </span>
                        <div>
                            <h3 className="font-Syne mb-1 text-lg font-bold text-white md:text-xl">Let's Work Together</h3>
                            <p className="mb-0 text-xs text-[#b8c1d0] md:text-md">Have an idea or project? Let's bring it to life!</p>
                        </div>
                    </div>
                    <Link
                        to="/contact"
                        className="group inline-flex min-w-[145px] items-center justify-center gap-2 rounded-full bg-[#ff9330] px-5 py-3 text-md font-bold text-[#101827] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                        Contact Me
                        <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid gap-8 px-5 py-8 md:grid-cols-[1.6fr_0.9fr_1.3fr] md:px-10 md:py-10">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3 text-white no-underline">
                            <img src="/images/asdflogo.png" alt="DevPavan logo" className="h-14 w-14 object-contain" />
                            <span className="font-Syne text-lg font-bold">DevPavan</span>
                        </Link>
                        <p className="mt-4 max-w-[280px] text-md leading-6 text-[#aeb8c7]">
                            Building modern, reliable digital products and memorable user experiences.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#b8c1d0] no-underline transition-all hover:border-[#ff9330] hover:bg-[#ff9330] hover:text-[#101827]"
                                >
                                    <i className={`fa-brands ${social.icon} text-md`} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-Syne mb-4 text-md font-bold uppercase tracking-[0.12em] text-white">Quick Links</h5>
                        <ul className="m-0 grid gap-2 p-0">
                            {links.map((link) => (
                                <li key={link.label} className="list-none">
                                    <Link to={link.to} className="text-md text-[#b8c1d0] no-underline transition-colors hover:text-[#ff9330]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-Syne mb-4 text-md font-bold uppercase tracking-[0.12em] text-white">Contact Info</h5>
                        <ul className="m-0 grid gap-3 p-0">
                            <li className="flex items-start gap-2.5 text-md text-[#b8c1d0]">
                                <i className="fa-solid fa-location-dot mt-1 text-[#ff9330]" aria-hidden="true" />
                                <span>{address}</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-md">
                                <i className="fa-solid fa-envelope text-[#ff9330]" aria-hidden="true" />
                                <a href={`mailto:${email}`} className="break-all text-[#b8c1d0] no-underline hover:text-[#ff9330]">{email}</a>
                            </li>
                            <li className="flex items-center gap-2.5 text-md">
                                <i className="fa-solid fa-phone text-[#ff9330]" aria-hidden="true" />
                                <a href={`tel:${contactNumber}`} className="text-[#b8c1d0] no-underline hover:text-[#ff9330]">{contactNumber}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 px-5 py-4 text-center text-xs text-[#9faabd] sm:flex-row md:px-10">
                    <p className="mb-0">© {new Date().getFullYear()} {fullName}, All Rights Reserved.</p>
                    <p className="mb-0">Built with <i className="fa-solid fa-heart text-[#ff9330]" aria-hidden="true" /> by {fullName.split(' ')[0] || 'DevPavan'}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
