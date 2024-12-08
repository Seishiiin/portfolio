import Image from "next/image";

import { ImageIcon } from "@radix-ui/react-icons";

export default function ProjectCard({ title, description, technologies, image }) {
    return (
        <div className={"w-full h-auto flex flex-col justify-between items-start gap-4 bg-[#1f1f1f] text-[#fffbe4] rounded-lg p-5"}>
            <div className={"w-full flex flex-col justify-start items-start gap-4"}>
                {image === "" ? (
                    <div className={"min-w-full min-h-[calc(1920px/10)] flex justify-center items-center rounded-lg overflow-hidden bg-[#0a0901]"}>
                        <ImageIcon className={"w-10 h-10 text-[#fffbe4]"}/>
                    </div>
                ) : (
                    <div className={"min-h-[calc(1920px/10)]"}>
                        <div className={"flex justify-center items-center rounded-lg overflow-hidden bg-[#0a0901]"}>
                            <Image src={image} alt={title} width={3072} height={1920} className={"w-auto h-full"}/>
                        </div>
                    </div>
                )}
                <div className={"flex flex-col justify-start items-start gap-0"}>
                    <h1 className={"text-xl font-bold"}>{title}</h1>
                    <p className={"text-sm"}>{description}</p>
                </div>
            </div>

            <div className={"w-full h-auto flex flex-col justify-end items-start gap-2"}>
                <div className={"flex flex-wrap mt-1"}>
                    {technologies.map((tech) => (
                        <span key={tech} className={"bg-[#fffbe4] text-[#1f1f1f] rounded-full px-2 py-1 text-xs font-semibold mr-2 mt-2"}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}