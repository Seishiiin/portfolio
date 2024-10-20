import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={"w-dvw min-h-[100dvh] h-auto flex flex-col justify-center items-center bg-[#381026]"}>
            <Navbar/>

            <div className={"w-dvw h-[80dvh] flex flex-col justify-center items-center"}>
                <div className={"w-2/3 h-auto flex justify-between items-center text-9xl"}>
                    <h1 className={"w-2/3 h-auto text-left text-9xl text-[#f7f6f6] font-black"}>GABIN</h1>
                    <Image src={"/assets/pp.jpeg"} width={128} height={128} className={"rounded-full"}/>
                </div>
                <h1 className={"w-2/3 h-auto text-right text-9xl text-[#f7f6f6] font-black"}>HALLOSSERIE</h1>
            </div>

            <a href={"#about"} className={"w-dvw h-[10dvh] flex justify-center items-center gap-2"}>
                <i className={"bi bi-mouse text-white text-sm animate-bounce"}></i>
                <p className={"text-white text-sm animate-bounce"}>SCROLL DOWN</p>
            </a>

            <div className={"w-dvw h-[90dvh] flex flex-col justify-center items-center"} id={"about"}></div>
        </div>
    );
}