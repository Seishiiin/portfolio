"use client";

import { useEffect, useState } from "react";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const [scroll, setScroll] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const opacity = Math.max(0, 1 - scroll / 700);

    return (
        <div className={"z-10 w-dvw h-[10dvh] flex justify-between items-center " + (scroll > 710 ? "" : "sticky top-0")} style={{opacity: opacity, transition: "opacity 0.5s ease"}}>
            <a href={"/"} className={"text-white text-3xl font-black ml-5"}>PORTFOLIO</a>
            <div className={"flex justify-between items-center"}>
                <a href={"/projects"} className={"z-10 text-white border-2  hover:border-dashed " + (pathname === "/projects" ? " border-dashed bg-white text-[#381026] border-[#381026]" : "border-dotted border-white") + " border-white rounded-full px-3 py-1 mr-5 duration-300"}>PROJETS</a>
                <a href={"/contact"} className={"z-10 text-white border-2 hover:border-dashed " + (pathname === "/contact" ? " border-dashed bg-white text-[#381026] border-[#381026]" : "border-dotted border-white") + " rounded-full px-3 py-1 mr-5 duration-300"}>CONTACT</a>
            </div>
        </div>
    )
}