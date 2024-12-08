import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"w-full h-auto min-h-screen bg-[#0a0901] text-[#fffbe4]"}>
            <Navbar/>

            <div className={"w-5/6 lg:px-0 lg:w-3/4 min-h-[calc(100dvh-12rem)] flex flex-col justify-around items-center mx-auto mt-16"}>
                <div className={"w-full flex justify-between items-center"}>
                    <div className={"w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-5"}>
                        <div className={"flex flex-col justify-start items-start"}>
                            <h1 className={"text-3xl sm:text-5xl font-bold"}>Gabin Hallosserie</h1>
                            <p className={"text-sm sm:text-md font-light"}>Actuellement étudiant en programmation logiciel et web à l&apos;ESN 81 de Castres. Je suis à la recherche d&apos;une alternance dans ce domaine. Je suis passionné par le développement web.</p>
                        </div>
                        <div className={"flex justify-start items-center gap-5"}>
                            <div className={"flex justify-start items-center gap-2 py-2 px-2 bg-purple-200 text-[#0a0901] rounded-full"}>
                                <div className={"w-3 h-3 bg-purple-600 animate-pulse rounded-full"}></div>
                                <p className={"text-sm font-light"}>À la recherche d&apos;alternance</p>
                            </div>
                        </div>
                    </div>

                    <div className={"w-1/2 h-full hidden lg:flex justify-end items-center"}>
                        <Image src={"/assets/pp_pro.jpeg"} alt={"Gabin Hallosserie"} width={240} height={240} className={"rounded-xl"}/>
                    </div>
                </div>

                <div className={"w-full grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5"}>
                    <div className={"group flex flex-col justify-center items-start gap-2 px-2 md:px-5 py-3 bg-[#1a151e] rounded-xl"}>
                        <h2 className={"text-md font-bold"}>Mon dernier diplôme 🎓</h2>
                        <div className={"flex flex-col"}>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>BTS SIO option SLAM</p>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>Emile Peytavin - Mende</p>
                        </div>
                    </div>

                    <div className={"group flex flex-col justify-center items-start gap-2 px-2 md:px-5 py-3 bg-[#1a151e] rounded-xl"}>
                        <h2 className={"text-md font-bold"}>Mon dernier stage 🛠️</h2>
                        <div className={"flex flex-col"}>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>Développement d&apos;une API</p>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>PHP - CodeIgniter - Eloquent</p>
                        </div>
                    </div>

                    <div className={"group flex flex-col justify-center items-start gap-2 px-2 md:px-5 py-3 bg-[#1a151e] rounded-xl"}>
                        <h2 className={"text-md font-bold"}>Mon dernier projet 🚀</h2>
                        <div className={"flex flex-col"}>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>Horloge numérique améliorée</p>
                            <p className={"text-sm text-[#97959f] group-hover:text-[#fffbe4] duration-300 font-light"}>JavaScript - Next.js - TailWindCSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
