"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id={"container"} className={`sticky top-0 ${isScrolled ? "w-full h-20 border-b-2" : "w-2/3 h-16 border-2"} px-6 bg-white/60 backdrop-blur-md text-black mt-4 flex justify-between items-center ${isScrolled ? "" : "rounded-full"} transition-all duration-300 ease-in-out z-20`}>
            <div className={"flex items-center space-x-3"}>
                <Link href={"/"} className={"flex justify-start items-center gap-3"}>
                    {isScrolled && (
                        <Image src={"/assets/profile.JPEG"} width={1920} height={1920} alt={"Gabin Hallosserie"} className={"w-12 h-12 rounded-full transition-transform duration-300"}/>
                    )}
                    <div className={"flex flex-col items-start"}>
                        <Image src={"/assets/profile.JPEG"} width={1920} height={1920} alt={"Gabin Hallosserie"} className={`block md:hidden w-12 h-12 rounded-xl ${isScrolled ? "hidden" : "block"} transition-transform duration-300`}/>
                        <h1 className={`hidden md:block text-lg font-semibold transition-all duration-300 ${isScrolled ? "-mt-1" : ""}`}>Gabin Hallosserie</h1>
                        <p className={"hidden md:block text-xs text-gray-600"}>Développeur web junior</p>
                    </div>
                </Link>
            </div>

            <div className={"flex items-center gap-8"}>
                <Link href={"#about"} className={"relative text-sm font-semibold transition-all duration-300 ease-in-out group"}>
                    À propos
                    <span className={"absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"}></span>
                </Link>
                <Link href={"#projects"} className={"relative text-sm font-semibold transition-all duration-300 ease-in-out group"}>
                    Projets
                    <span className={"absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"}></span>
                </Link>
                <Link href={"#contact"} className={"relative text-sm font-semibold transition-all duration-300 ease-in-out group"}>
                    Contact
                    <span className={"absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"}></span>
                </Link>
            </div>
        </div>
    );
}
