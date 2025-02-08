"use client";

import { useState } from "react";
import LockScreen from "@/components/LockScreen";
import Desktop from "@/components/Desktop";
import Image from "next/image";

export default function Home() {
    const [unlocked, setUnlocked] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleUnlock = () => {
        setFadeOut(true); // Lance l'animation de fondu
        setTimeout(() => setUnlocked(true), 500); // Bascule après l'animation
    };

    return (
        <div className="w-screen h-screen">
            <Image src="/wallpaper.JPEG" alt="Wallpaper" layout="fill" objectFit="cover" className="absolute blur-md brightness-75" />

            {!unlocked ? (
                <LockScreen onUnlock={handleUnlock} fadeOut={fadeOut} />
            ) : (
                <Desktop />
            )}
        </div>
    );
}
