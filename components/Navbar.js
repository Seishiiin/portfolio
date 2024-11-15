"use client";

import Link from "next/link";
import Image from "next/image";

import {usePathname} from "next/navigation";

import { GitHubLogoIcon, LinkedInLogoIcon, HomeIcon, ArchiveIcon } from "@radix-ui/react-icons";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={"w-full h-16 bg-[#0a0901] text-[#fffbe4] flex justify-between items-center px-2 sm:px-20"}>
            <div className={"h-full flex justify-start items-center gap-2 md:gap-4"}>
                <Image src="/assets/pp_pro.jpeg" alt="Gabin Hallosserie" width={50} height={50} className={"rounded-xl"} />
                <div className={"flex flex-col items-start"}>
                    <h1 className={"text-md md:text-xl font-bold md:mt-px mb-px md:-mb-px"}>Gabin Hallosserie</h1>
                    <p className={"hidden md:block text-sm font-light -mt-px mb-px"}>Étudiant en programmation logiciel et web</p>
                </div>
            </div>

            <div className={"h-full flex justify-end items-center gap-4"}>
                <Link href={"/"} className={`hidden md:block text-sm ${pathname === "/" ? "text-[#b978ed]" : ""} mr-4`}>Accueil</Link>
                <Link href={"/"} className={`block md:hidden text-sm ${pathname === "/" ? "text-[#b978ed]" : ""}`}><HomeIcon /></Link>

                <Link href={"/projects"} className={`hidden md:block text-sm ${pathname === "/projects" ? "text-[#b978ed]" : ""}`}>Projets</Link>
                <Link href={"/projects"} className={`block md:hidden text-sm ${pathname === "/projects" ? "text-[#b978ed]" : ""}`}><ArchiveIcon /></Link>
                <p>|</p>
                <Link target={"_blank"} href={"https://github.com/seishiiin"}><GitHubLogoIcon /></Link>
                <Link target={"_blank"} href={"https://www.linkedin.com/in/gabin-hallosserie/"}><LinkedInLogoIcon /></Link>
            </div>
        </div>
    )
}