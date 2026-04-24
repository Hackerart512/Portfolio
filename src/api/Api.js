const cards = [
    {
        id: 1,
        title: "Monisa Freelancing Portal",
        image: "/images/Freelancer_monisa/photo3.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Core PHP', 'MySql', 'Adobe Singature', 'SMTP Mail', 'Crons'],
        slug: 'monisa-freelancing-portal'
    },
    {
        id: 2,
        title: "KPI & LMS Portal",
        image: "/images/kpi_lms/kpi_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Laravel', 'MySql', 'SMTP Mail', 'Chart.js', 'Crons'],
        slug: 'kpi-lms-portal'
    },
    {
        id: 3,
        title: "Doctogon Doctor Patient App",
        image: "/images/DoctoCon/thumbnail/photo.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Node.js', 'MongoDB', 'Socket.io', 'Agora video calling', 'Razorpay'],
        slug: 'doctogon-doctor-patient-app'
    },
    {
        id: 4,
        title: "Agnoz Doctor Patient Application",
        image: "/images/Agnoz C-R/thumbnail/agnoz_thumbnail.png",
        desc: "A luxury apartment in the city center.",
        tag: ['Node.js',  'MongoDB', 'Socket.io', 'Twilio', 'Agora', 'AI Prediction',  'WHO API', 'Astrology API'],
        slug: 'agnoz-doctor-apk'
    },
    {
        id: 5,
        title: "Baby Land AI Prediction Applicatoin",
        image: "/images/Babyland-AI Health app/thumbnail/photo.png",
        desc: "A luxury apartment in the city center.",
        slug: 'baby-land-apk',
        tag: ['Node.js',   'MongoDB', 'Twilio', 'Agora',  'Razorpay Api', 'Ai Chat',   'Ai Tracker'],
    },
    {
        id: 6,
        title: "SwiftGo backend",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'swiftgo-backend'
    },
    {
        id: 7,
        title: "Proptalk hotel booking website",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'proptalk-hotel-booking-website'
    },
    {
        id: 8,
        title: "Instadham yatra apk",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'instadham-yatra-apk'
    },
    {
        id: 9,
        title: "Wordpress Monisa",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'wordpress-monisa'
    },
    {
        id: 11,
        title: "Naruto CRM",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'naruto-crm'
    },
    {
        id: 12,
        title: "Video Edit reel",
        image: "/images/thumnail_miss.webp",
        desc: "A luxury apartment in the city center.",
        slug: 'video-edit-reel'
    },
    {
        id: 12,
        title: "Elmond LMS Portal",
        image: "/images/thumnail_miss.webp",
        desc: "LMS Portal",
        slug: 'elmond-lms-portal'
    },

];

const blogs = [
    {
        id: 1,
        title: "Right-lo-left behind development in mobile web design",
        image: "/images/car.jpg",
        desc: "A luxury apartment in the city center.",
        slug: 'right-lo-left-behind-development-in-mobile-web-design',
        release: '19 January 2024'
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

export const getBlogs = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
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