"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY == 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        })
    }, [])

    return (
        <>
            <FaArrowUp onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`text-white bg-[#0abab5] hover:bg-white hover:border-[#0abab5] hover:text-[#0abab5] duration-300 transition fixed bottom-10 right-10 cursor-pointer border-2 border-white w-10 h-10 p-[5px] rounded-[50%] ${isAtTop ? "opacity-0 pointer-events-none" : "opacity-100"}`} size={25}></FaArrowUp>
        </>
    );
};

export default ScrollTop;