import Image from "next/image";

export default function Skills() {
    return (
        <div className={"w-2/3 flex flex-col justify-start items-start gap-10 mx-auto mb-20"}>
            <div className={"w-full hidden md:grid grid-cols-3"}>
                <p className={"text-md font-bold mb-5 text-gray-600"}>Langages</p>
                <p className={"text-md font-bold mb-5 text-gray-600"}>Frameworks</p>
                <p className={"text-md font-bold mb-5 text-gray-600"}>Outils</p>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/javascript.svg"} alt={"JavaScript"} width={20} height={20} className={"w-5 h-5"}/>JavaScript</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/python.svg"} alt={"Python"} width={20} height={20} className={"w-5 h-5"}/>Python</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/php.svg"} alt={"PHP"} width={20} height={20} className={"w-5 h-5"}/>PHP</p>
                </div>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/nextdotjs.svg"} alt={"NextJS"} width={20} height={20} className={"w-5 h-5"}/>NextJS</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/codeigniter.svg"} alt={"CodeIgniter"} width={20} height={20} className={"w-5 h-5"}/>CodeIgniter</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/react.svg"} alt={"React Native"} width={20} height={20} className={"w-5 h-5"}/>React Native</p>
                </div>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/git.svg"} alt={"Git"} width={20} height={20} className={"w-5 h-5"}/>Git</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/jetbrains.svg"} alt={"JetBrains"} width={20} height={20} className={"w-5 h-5"}/>JetBrains IDEs</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/vercel.svg"} alt={"Vercel"} width={20} height={20} className={"w-5 h-5"}/>Vercel</p>
                </div>
            </div>

            <div className={"w-full md:hidden grid grid-cols-2 gap-y-3"}>
                <div className={"flex justify-start items-center"}>
                    <p className={"text-md font-bold mb-5 text-gray-600"}>Langages</p>
                </div>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/javascript.svg"} alt={"JavaScript"} width={20} height={20} className={"w-5 h-5"}/>JavaScript</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/python.svg"} alt={"Python"} width={20} height={20} className={"w-5 h-5"}/>Python</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/php.svg"} alt={"PHP"} width={20} height={20} className={"w-5 h-5"}/>PHP</p>
                </div>

                <div className={"flex justify-start items-center"}>
                    <p className={"text-md font-bold mb-5 text-gray-600"}>Frameworks</p>
                </div>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/nextdotjs.svg"} alt={"NextJS"} width={20} height={20} className={"w-5 h-5"}/>NextJS</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/codeigniter.svg"} alt={"CodeIgniter"} width={20} height={20} className={"w-5 h-5"}/>CodeIgniter</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/react.svg"} alt={"React Native"} width={20} height={20} className={"w-5 h-5"}/>React Native</p>
                </div>

                <div className={"flex justify-start items-center"}>
                    <p className={"text-md font-bold mb-5 text-gray-600"}>Outils</p>
                </div>
                <div className={"flex flex-col items-start gap-2"}>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/git.svg"} alt={"Git"} width={20} height={20} className={"w-5 h-5"}/>Git</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/jetbrains.svg"} alt={"JetBrains"} width={20} height={20} className={"w-5 h-5"}/>JetBrains IDEs</p>
                    <p className={"flex justify-start items-start gap-2 text-md font-light text-gray-600"}><Image src={"/assets/logos/vercel.svg"} alt={"Vercel"} width={20} height={20} className={"w-5 h-5"}/>Vercel</p>
                </div>
            </div>
        </div>
    )
}