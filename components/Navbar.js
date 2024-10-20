"use client";

import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={"w-dvw h-[10dvh] flex justify-between items-center bg-[#381026] sticky top-0 z-50 shadow-xl shadow-[#381026]"}>
            <a href={"/"} className={"text-white text-3xl font-black ml-5"}>PORTFOLIO</a>
            <div className={"flex justify-between items-center"}>
                <a href={"/projects"} className={"text-white border-2 hover:border-dashed " + (pathname === "/projects" ? " border-dashed" : "border-dotted") + " border-white rounded-full px-3 py-1 mr-5"}>PROJECTS</a>
                <a href={"/contact"} className={"text-white border-2 hover:border-dashed " + (pathname === "/contact" ? " border-dashed" : "border-dotted") + " border-white rounded-full px-3 py-1 mr-5"}>CONTACT</a>
            </div>
        </div>
    )
}