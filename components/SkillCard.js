"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SkillCard({ title, description, icon, middle }) {
    const [scrollPixels, setScrollPixels] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPixels(window.scrollY);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                setScrollPixels(0);
            });
        };
    }, []);

    return (
        <div className={`relative w-[25%] mx-auto ${scrollPixels < 650 ? "h-0 opacity-0" : middle ? "h-[60dvh]" : "h-[50dvh]"} flex flex-col justify-start items-center gap-5 bg-[#182449] rounded-md p-5 hover:scale-[1.01] transition-all duration-500`}>
            <div className={"absolute -top-8 w-20 h-20 bg-[#1D2E62] rounded-full flex justify-center items-center"}>
                {icon}
            </div>

            <h3 className={"mt-16 text-2xl font-black text-[#D6E1FF]"}>{title.toUpperCase()}</h3>

            <hr className={"w-2/3 border-[#304384]"} />

            <div className={"w-full h-full flex flex-col justify-around items-center"}>
                <p className={"text-center text-md text-[#9EB1FF]"}>{description}</p>

                <div className={"flex justify-center items-center gap-5 mt-5"}>
                    <button className={"bg-[#3E63DD] hover:bg-[#5472E4] text-[#D6E1FF] flex justify-center items-center gap-2 rounded-full px-3 py-1"}>
                        <Link href={`/skills/${title.toLowerCase()}`} className={"text-sm"}>EN SAVOIR PLUS</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
