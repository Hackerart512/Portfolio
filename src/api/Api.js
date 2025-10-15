const cards = [
    {
        id: 1,
        title: "Monisa Freelancing Portal",
        image: "/images/Freelancer_monisa/photo.png",
        desc: "A luxury apartment in the city center.",
        gallery: ['/images/Freelancer_monisa/gallery/1.jpg', '/images/Freelancer_monisa/gallery/2.jpg', '/images/Freelancer_monisa/gallery/3.jpg', '/images/Freelancer_monisa/gallery/4.jpg', '/images/Freelancer_monisa/gallery/5.jpg', '/images/Freelancer_monisa/gallery/6.jpg', '/images/Freelancer_monisa/gallery/7.jpg', '/images/Freelancer_monisa/gallery/8.jpg', '/images/Freelancer_monisa/gallery/9.jpg', '/images/Freelancer_monisa/gallery/10.jpg', '/images/Freelancer_monisa/gallery/11.jpg', '/images/Freelancer_monisa/gallery/12.jpg', '/images/Freelancer_monisa/gallery/13.jpg', '/images/Freelancer_monisa/gallery/14.jpg', '/images/Freelancer_monisa/gallery/15.jpg', '/images/Freelancer_monisa/gallery/16.jpg', '/images/Freelancer_monisa/gallery/17.jpg', '/images/Freelancer_monisa/gallery/18.jpg', '/images/Freelancer_monisa/gallery/20.jpg', '/images/Freelancer_monisa/gallery/21.jpg', '/images/Freelancer_monisa/gallery/22.jpg', '/images/Freelancer_monisa/gallery/23.jpg', '/images/Freelancer_monisa/gallery/24.jpg', '/images/Freelancer_monisa/gallery/25.jpg', '/images/Freelancer_monisa/gallery/26.jpg', '/images/Freelancer_monisa/gallery/27.jpg', '/images/Freelancer_monisa/gallery/28.jpg'],
        tag: ['Node js', 'react js']
    },
    {
        id: 2,
        title: "KPI & LMS Portal",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 3,
        title: "Doctogon doctor patient App",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 4,
        title: "Agnoz Doctor apk",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 5,
        title: "Baby Land apk",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 6,
        title: "SwiftGo backend",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 7,
        title: "Proptalk hotel booking website",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 8,
        title: "Instadham yatra apk",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 9,
        title: "Wordpress Monisa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 10,
        title: "Wordpress Monisa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 11,
        title: "Naruto CRM",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
    },
    {
        id: 12,
        title: "Video Edit reel",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        desc: "A luxury apartment in the city center.",
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