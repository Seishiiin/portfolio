"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <Navbar />

            <div className={"w-2/3 h-[calc(100dvh-5rem)] flex justify-between items-center mx-auto"}>
                <div className={"w-1/2 flex flex-col items-start"}>
                    <h1 className={"text-4xl font-semibold"}>Gabin Hallosserie</h1>
                    <p className={"text-sm text-gray-600"}>Actuellement à la recherche d&apos;une alternance en développement web et logiciel pour une durée de 1 à 3 ans dans le cadre de mon bachelor CSI que je commencerai en septembre 2025.</p>

                    <div className={"px-3 py-2 bg-blue-100 mt-5 flex justify-start items-center gap-2 rounded-full"}>
                        <div className={"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}></div>
                        <p className={"text-xs text-blue-500"}>En recherche d&apos;alternance</p>
                    </div>
                </div>

                <div className={"w-1/2 flex justify-end items-center"}>
                    <Image src={"/assets/profile.JPEG"} width={1920} height={1080} alt={"Gabin Hallosserie"} className={"w-56 h-56 rounded-xl"}/>
                </div>
            </div>
        </div>
    );
}