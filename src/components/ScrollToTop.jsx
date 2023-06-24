import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className={`p-3 rounded-full bg-ascent text-white fixed bottom-5 right-5 z-50 ${visible ? "block" : "hidden"}`}
            style={{ display: visible ? "inline" : "none" }}
            onClick={scrollToTop}
            href
            id="scrollToTop"
        >
            <IoIosArrowUp className="text-2xl" />
        </button>
    );
};

export default ScrollButton;