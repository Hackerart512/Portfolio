import React from "react";
import PortfolioPageLayout from "./PortfolioPageLayout";


const ThaviraLpPage = () => {

    const galleries = ['/images/thavira/gallery/1.jpg', '/images/thavira/gallery/2.jpg', '/images/thavira/gallery/3.jpg', '/images/thavira/gallery/4.jpg', '/images/thavira/gallery/5.jpg', '/images/thavira/gallery/6.jpg', '/images/thavira/gallery/7.jpg'];

    return (
        <>
            <PortfolioPageLayout
                title="Thavira Healthcare Landing Page"
                subtitle=" "
                description="Designed and developed a high-converting landing page for Thavira, a healthcare brand, as part of a Meta Ads marketing campaign. The goal was to create a fast, responsive, and conversion-focused page that effectively communicates the brand's services and encourages users to book a consultation."
                heroImage="/images/thavira/thavira_thumb.png"
                tags={["HTML5", "CSS3", "JavaScript", "Responsive Web Design"]}
                gallery={galleries}
                bgColor="#e8f7ff"
                link="https://hackerart512.github.io/Thavira/"
            >
                <section className="space-y-10">


                    <h2>Thavira Healthcare Landing Page</h2>

                    <p>
                        Designed and developed a high-converting landing page for
                        <strong>Thavira</strong>, a healthcare brand, as part of a
                        <strong>Meta Ads marketing campaign</strong>. The goal was to create
                        a fast, responsive, and conversion-focused page that effectively
                        communicates the brand's services and encourages users to book a
                        consultation.
                    </p>

                    <h3>Project Highlights</h3>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Developed a fully responsive landing page using HTML5, CSS3, and JavaScript.</li>
                        <li>Built a clean and modern UI optimized for Meta (Facebook & Instagram) ad campaigns.</li>
                        <li>Designed a conversion-focused user experience with strategically placed call-to-action sections.</li>
                        <li>Created a compelling hero banner with a strong call-to-action.</li>
                        <li>Developed sections highlighting problems, solutions, and treatment processes.</li>
                        <li>Showcased doctor profiles to build trust and credibility.</li>
                        <li>Integrated patient testimonials and social proof to improve user confidence.</li>
                        <li>Built an interactive FAQ section for common user queries.</li>
                        <li>Added multiple appointment booking CTAs throughout the landing page.</li>
                        <li>Implemented responsive layouts for desktop, tablet, and mobile devices.</li>
                        <li>Optimized page performance with clean, semantic HTML and efficient CSS.</li>
                        <li>Used Flexbox and CSS Grid for modern responsive layouts.</li>
                        <li>Added JavaScript interactions to improve user engagement and navigation.</li>
                    </ul>

                    <h3>Key Features</h3>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Responsive Design</li>
                        <li>Conversion-Oriented Layout</li>
                        <li>Optimized Call-to-Action Sections</li>
                        <li>Testimonial Showcase</li>
                        <li>Interactive FAQ Accordion</li>
                        <li>Trust Indicators & Doctor Profiles</li>
                        <li>Fast Loading Performance</li>
                        <li>Clean Semantic HTML Structure</li>
                    </ul>

                    <h3>Outcome</h3>

                    <p>
                        The landing page was developed to support Meta Ads campaigns by
                        providing visitors with a seamless browsing experience and guiding
                        them toward booking a gut health consultation. The design focuses on
                        credibility, clear messaging, responsive performance, and multiple
                        conversion opportunities to maximize lead generation.
                    </p>

                </section>
            </PortfolioPageLayout>
        </>
    );
};

export default ThaviraLpPage;

