import React, { useState } from "react";
import  ArrowUpIcon  from "../Icons/ArrowUpIcon";
import "../../styles/main.scss"

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
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll-top"  onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none" }}>
            <ArrowUpIcon/>
        </div>
    );
};

export default ScrollButton;