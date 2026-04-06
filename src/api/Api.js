const cards = [
    {
        id: 1,
        title: "Monisa Freelancing Portal",
        image: "/images/Freelancer_monisa/photo.png",
        desc: "A luxury apartment in the city center.",
        gallery: ['/images/Freelancer_monisa/gallery/1.jpg', '/images/Freelancer_monisa/gallery/2.jpg', '/images/Freelancer_monisa/gallery/3.jpg', '/images/Freelancer_monisa/gallery/4.jpg', '/images/Freelancer_monisa/gallery/5.jpg', '/images/Freelancer_monisa/gallery/6.jpg', '/images/Freelancer_monisa/gallery/7.jpg', '/images/Freelancer_monisa/gallery/8.jpg', '/images/Freelancer_monisa/gallery/9.jpg', '/images/Freelancer_monisa/gallery/10.jpg', '/images/Freelancer_monisa/gallery/11.jpg', '/images/Freelancer_monisa/gallery/12.jpg', '/images/Freelancer_monisa/gallery/13.jpg', '/images/Freelancer_monisa/gallery/14.jpg', '/images/Freelancer_monisa/gallery/15.jpg', '/images/Freelancer_monisa/gallery/16.jpg', '/images/Freelancer_monisa/gallery/17.jpg', '/images/Freelancer_monisa/gallery/18.jpg', '/images/Freelancer_monisa/gallery/20.jpg', '/images/Freelancer_monisa/gallery/21.jpg', '/images/Freelancer_monisa/gallery/22.jpg', '/images/Freelancer_monisa/gallery/23.jpg', '/images/Freelancer_monisa/gallery/24.jpg', '/images/Freelancer_monisa/gallery/25.jpg', '/images/Freelancer_monisa/gallery/26.jpg', '/images/Freelancer_monisa/gallery/27.jpg', '/images/Freelancer_monisa/gallery/28.jpg'],
        tag: ['Core PHP', 'MySql','Adobe Singature', 'SMTP Mail', 'Crons'],
        slug: 'monisa-freelancing-portal'
    },
    {
        id: 2,
        title: "KPI & LMS Portal",
        image: "/images/kpi_lms/kpi_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        gallery: ['/images/kpi_lms/gallery/kpi_thumbnail3.png', '/images/kpi_lms/gallery/kpi_thumbnail2.png', '/images/kpi_lms/gallery/1.jpg', '/images/kpi_lms/gallery/2.jpg', '/images/kpi_lms/gallery/3.jpg', '/images/kpi_lms/gallery/4.jpg', '/images/kpi_lms/gallery/5.jpg', '/images/kpi_lms/gallery/6.jpg', '/images/kpi_lms/gallery/7.jpg', '/images/kpi_lms/gallery/8.jpg', '/images/kpi_lms/gallery/9.jpg', '/images/kpi_lms/gallery/10.jpg', '/images/kpi_lms/gallery/11.jpg', '/images/kpi_lms/gallery/12.jpg', '/images/kpi_lms/gallery/13.jpg', '/images/kpi_lms/gallery/14.jpg', '/images/kpi_lms/gallery/15.jpg', '/images/kpi_lms/gallery/16.jpg', '/images/kpi_lms/gallery/17.jpg', '/images/kpi_lms/gallery/18.jpg', '/images/kpi_lms/gallery/20.jpg', '/images/kpi_lms/gallery/21.jpg', '/images/kpi_lms/gallery/22.jpg', '/images/kpi_lms/gallery/23.jpg', '/images/kpi_lms/gallery/24.jpg', '/images/kpi_lms/gallery/25.jpg', '/images/kpi_lms/gallery/26.jpg', '/images/kpi_lms/gallery/27.jpg', '/images/kpi_lms/gallery/28.jpg',],
        tag: ['Laravel', 'MySql',''],
        slug: 'kpi-lms-portal'
    },
    {
        id: 3,
        title: "Doctogon doctor patient App",
        image: "/images/Doctocon/thumbnail/doctocon_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Twilio', 'Agora','cloudinary','Razorpay Api', 'Push Notification', 'Firebase Cloud Authentication'],
        slug: 'doctogon-doctor-patient-app'
    },
    {
        id: 4,
        title: "Agnoz Doctor apk",
        image: "/images/Agnoz C-R/thumbnail/agnoz_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Twilio', 'Agora', 'cloudinary', 'Razorpay Api', 'Push Notification', 'Firebase Cloud Authentication','AI Prediction', 'QR report', 'WHO API','Astrology API', 'Google Map API'],
        slug: 'agnoz-doctor-apk'
    },
    {
        id: 5,
        title: "Baby Land apk",
        image: "/images/Baby Land/thumbnail/baby_land_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        slug: 'baby-land-apk',
        tag: ['Node.js', 'Express.js', 'MongoDB', 'Twilio', 'Agora', 'cloudinary', 'Razorpay Api', 'Push Notification', 'Firebase Cloud Authentication', 'AI Prediction','Ai Chat', 'Periods Tracker', 'Pragnacy Tracker', 'BabyGrowth Tracker'],
    },
    {
        id: 6,
        title: "SwiftGo backend",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'swiftgo-backend'
    },
    {
        id: 7,
        title: "Proptalk hotel booking website",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'proptalk-hotel-booking-website'
    },
    {
        id: 8,
        title: "Instadham yatra apk",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'instadham-yatra-apk'
    },
    {
        id: 9,
        title: "Wordpress Monisa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'wordpress-monisa'
    },
    {
        id: 11,
        title: "Naruto CRM",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'naruto-crm'
    },
    {
        id: 12,
        title: "Video Edit reel",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
        slug: 'video-edit-reel'
    },
    {
        id: 12,
        title: "Elmond LMS Portal",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "LMS Portal",
        slug: 'elmond-lms-portal'
    },

];

// Simulated API call (like fetching from a server)
export const getCards = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return cards;
    } catch (error) {
        console.error("Error fetching cards:", error);
        return [];
    }
};

export const getById = async (id) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const card = cards.find((item) => item.id === parseInt(id));
        return card || null;
    } catch (error) {
        console.error("Error fetching card by ID:", error);
        return null;
    }
};