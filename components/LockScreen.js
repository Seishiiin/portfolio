"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LockScreen({ onUnlock, fadeOut }) {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                onUnlock(); // Déclenche le fondu et le changement d'écran
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            clearInterval(interval);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onUnlock]);

    return (
        <div
            className={`w-screen h-screen flex items-center justify-center transition-opacity duration-500 ${
                fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            <Image src="/wallpaper.JPEG" alt="Wallpaper" layout="fill" objectFit="cover" className="absolute blur-md brightness-75" />

            <div className="absolute top-10 text-center text-white text-4xl font-light">{time}</div>

            <div className="z-10 flex flex-col items-center p-6 rounded-md">
                <Image src="/profile_picture.jpg" alt="Profile Picture" width={80} height={80} className="rounded-full mb-6" />

                <input type="password" placeholder="Password" className="bg-white bg-opacity-10 text-white text-center px-4 py-2 rounded-full border border-white/30 outline-none" disabled />

                <p className="text-white text-sm mt-2 opacity-80 animate-pulse">Press Enter to unlock</p>
            </div>
        </div>
    );
}

function getCurrentTime() {
    return new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
