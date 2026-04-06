import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Close, ArrowBack, ArrowForward } from "@mui/icons-material";

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

    useEffect(() => {
        document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

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
            {selectedIndex !== null &&
                createPortal(
                    <AnimatePresence>
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
                                className="fixed inset-0 flex justify-center items-center z-50 p-4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="relative w-full max-w-[95vw] max-h-[95vh] overflow-hidden rounded-3xl bg-black/10 shadow-2xl">
                                    <motion.img
                                        src={card[selectedIndex]}
                                        alt="Lightbox"
                                        key={card[selectedIndex]}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-full max-h-[85vh] max-h-full mx-auto block rounded-3xl object-contain"
                                        style={{ width: "auto", height: "auto", maxWidth: "95vw", maxHeight: "85vh" }}
                                    />

                                    {/* === Close Button === */}
                                    <button
                                        type="button"
                                        onClick={closeLightbox}
                                        className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white hover:bg-black"
                                    >
                                        <Close fontSize="medium" />
                                    </button>

                                    {/* === Prev Button === */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black"
                                    >
                                        <ArrowBack fontSize="medium" />
                                    </button>

                                    {/* === Next Button === */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black"
                                    >
                                        <ArrowForward fontSize="medium" />
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    </AnimatePresence>,
                    document.body
                )}
        </div>
    );
};

export default GalleryLightbox;
