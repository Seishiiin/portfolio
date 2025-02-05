import Image from "next/image";

export default function Navbar() {
    return (
        <div className={"w-full h-20 px-10 flex items-center justify-between"}>
            <div className={"flex justify-start items-center"}>
                <Image src={"/logo.jpg"} alt={""} width={1920} height={1080} className={"w-14 h-14 rounded-full"} />
                <div className={"flex flex-col ml-2"}>
                    <span className={"text-2xl font-bold -mb-2"}>Gabin HALLOSSERIE</span>
                    <span className={"text-sm"}>Développeur Web junior</span>
                </div>
            </div>
        </div>
    )
}