import Image from "next/image";
import Link from "next/link";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {


    return (
        <div className={"bg-[#11131F] text-[#D6E1FF] w-dvw h-[10dvh] sm:px-10 px-5 flex justify-between items-center"}>
            <div className={"flex justify-start items-center"}>
                <Image src={"/assets/pp.jpeg"} alt={"Photo de profil"} width={1920} height={1080} className={"w-[55px] h-[55px] hidden sm:block rounded-xl"} />
                <div className={"flex flex-col justify-center items-start ml-5"}>
                    <h1 className={"text-2xl font-black"}>Gabin HALLOSSERIE</h1>
                    <h2 className={"text-sm"}>Étudiant programmation web</h2>
                </div>
            </div>

            <div className={"flex justify-end items-center gap-5 text-sm"}>
                <Link href={"https://github.com/Seishiiin"} target={"_blank"} className={"flex justify-center items-center gap-5"}>
                    <span className={"hidden md:block hover:text-[#9EB1FF]"}>GitHub</span>
                    <span className={"block md:hidden hover:text-[#9EB1FF]"}><GitHubLogoIcon /></span>
                </Link>

                <span className={"hidden md:block"}>|</span>

                <Link href={"https://www.linkedin.com/in/gabin-hallosserie/"} target={"_blank"} className={"flex justify-center items-center gap-5"}>
                    <span className={"hidden md:block hover:text-[#9EB1FF]"}>LinkedIn</span>
                    <span className={"block md:hidden hover:text-[#9EB1FF]"}><LinkedInLogoIcon /></span>
                </Link>
            </div>
        </div>
    )
}