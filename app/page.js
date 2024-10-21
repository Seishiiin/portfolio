"use client";

import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const [scroll, setScroll] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            setMousePosition({ x: mouseX, y: mouseY });
            setFollowerPosition({ x: mouseX, y: mouseY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const followMouse = () => {
            setFollowerPosition((prev) => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.1, // Lissage
                y: prev.y + (mousePosition.y - prev.y) * 0.1,
            }));
            requestAnimationFrame(followMouse); // Continue l'animation
        };

        followMouse(); // Démarrer le suivi de la souris
    }, [mousePosition]);

    return (
        <div className="relative w-screen min-h-screen flex flex-col justify-center items-center bg-[#381026]">
            <div
                className={`w-10 h-10 absolute pointer-events-none bg-[#f7c04a] rounded-full`}
                style={{
                    top: followerPosition.y + scroll - 5, // Centrer le cercle
                    left: followerPosition.x - 5,
                }}
            ></div>
            <Navbar />

            <div className="w-screen h-[80vh] flex flex-col justify-center items-center hover:cursor-alias">
                <div className="w-2/3 h-auto flex justify-between items-center text-9xl">
                    <h1 className="w-2/3 h-auto text-left text-9xl text-[#f7f6f6] font-black transition-colors duration-300 hover:text-[#f7c04a]">GABIN</h1>
                    <Image src="/assets/pp.jpeg" width={1920} height={1080} className="w-28 h-28 rounded-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl" alt="Profile Picture" />
                </div>
                <h1 className="w-2/3 h-auto text-right text-9xl text-[#f7f6f6] font-black transition-colors duration-300 hover:text-[#f7c04a]">HALLOSSERIE</h1>
            </div>

            <a href={"#about"} className="w-screen h-[10vh] flex justify-center items-center gap-2 transition-transform duration-300">
                <i className="bi bi-mouse text-white text-sm animate-bounce"></i>
                <p className="text-white text-sm animate-bounce">CLIQUEZ POUR DÉFILER</p>
            </a>

            <div id="about" className={`w-screen h-screen relative flex flex-col justify-center items-center transition-opacity duration-700 ${scroll > 710 ? "opacity-100 animate-slide-up" : "opacity-0"}`}>
                <div className="w-screen h-[20vh] flex justify-center items-center">
                    <h1 className="text-8xl text-[#f7f6f6] font-black transition duration-500">À PROPOS</h1>
                </div>

                <div className="w-screen h-[80vh] px-10 flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-xl text-[#f7f6f6] max-w-3xl">
                            Salut, je suis Gabin Hallosserie, un développeur web et mobile passionné par les nouvelles technologies et les problèmes complexes. J&apos;aime apprendre de nouvelles choses et résoudre des problèmes.
                        </p>
                    </div>
                    <Skills />
                </div>
            </div>
        </div>
    );
}
