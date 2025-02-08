"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Desktop() {
    const [fadeIn, setFadeIn] = useState(false);
    const [time, setTime] = useState(getCurrentTime());
    const [openWindow, setOpenWindow] = useState(false);

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100);
        const interval = setInterval(() => setTime(getCurrentTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`w-screen h-screen transition-opacity duration-500 flex flex-col ${fadeIn ? "opacity-100" : "opacity-0"}`}>
            <Image src="/wallpaper.JPEG" alt="Wallpaper" layout="fill" objectFit="cover" className="absolute brightness-75" />

            <div className="absolute top-0 w-full bg-black bg-opacity-30 backdrop-blur-lg h-10 flex items-center justify-between px-6 text-white">
                <span className="font-light flex items-baseline gap-3"><i className={"bi bi-apple"}></i> Gabin HALLOSSERIE</span>
                <span className="font-light">{time}</span>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur-lg h-14 rounded-xl flex items-center px-6 space-x-6 shadow-lg">
                <Image src="/folder.webp" alt="App1" width={40} height={40} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setOpenWindow(!openWindow)} />
                <Image src="/folder.webp" alt="App2" width={40} height={40} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setOpenWindow(!openWindow)} />
                <Image src="/folder.webp" alt="App3" width={40} height={40} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setOpenWindow(!openWindow)} />
            </div>

            {openWindow && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-20 left-1/4 w-1/2 h-2/3 bg-gray-800 rounded-lg shadow-lg p-4 text-white"
                >
                    <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                        <span>Projects</span>
                        <button onClick={() => setOpenWindow(false)} className="text-red-400">✖</button>
                    </div>
                    <div className="p-4">Contenu de la fenêtre...</div>
                </motion.div>
            )}
        </div>
    );
}

function getCurrentTime() {
    return new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
