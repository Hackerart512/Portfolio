import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close, ArrowBack,ArrowForward } from "@mui/icons-material"; 

const GalleryLightbox = ({ card }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    const closeLightbox = () => setSelectedIndex(null);
    const nextImage = () => setSelectedIndex((prev) => (prev + 1) % card.length);
    const prevImage = () =>
        setSelectedIndex((prev) => (prev - 1 + card.length) % card.length);

    return (
        <div className="p-4">
            
            {/* === Gallery Grid === */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {card?.map((img, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition cursor-pointer h-48"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img
                            src={img}
                            className="w-full h-full object-contain"
                            alt={`Gallery ${index + 1}`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* === Lightbox === */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeLightbox}
                        />

                        {/* Image Container */}
                        <motion.div
                            className="absolute inset-0 flex justify-center items-center z-50 p-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div className="relative flex justify-center items-center">
                                <motion.img
                                    src={card[selectedIndex]}
                                    alt="Lightbox"
                                    key={card[selectedIndex]}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
                                />

                                {/* === Close Button === */}
                                <Close
                                    onClick={closeLightbox}
                                    style={{
                                        position: "absolute",
                                        top: "-40px",
                                        right: "-40px",
                                        background: "rgba(0,0,0,0.6)",
                                        color: "#fff",
                                    }}
                                >
                                    <Close fontSize="medium" />
                                </Close>

                                {/* === Prev Button === */}
                                <ArrowBack
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    style={{
                                        position: "absolute",
                                        left: "20px",
                                        color: "#fff",
                                        background: "rgba(0,0,0,0.5)",
                                    }}
                                >
                                    <ArrowBack fontSize="medium" />
                                </ArrowBack>

                                {/* === Next Button === */}
                                <ArrowForward
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    style={{
                                        position: "absolute",
                                        right: "20px",
                                        color: "#fff",
                                        background: "rgba(0,0,0,0.5)",
                                    }}
                                >
                                    <ArrowForward fontSize="medium" />
                                </ArrowForward>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryLightbox;
