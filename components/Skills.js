import Image from "next/image";

export default function Skills() {
    const skills = [
        {icon: "https://www.vectorlogo.zone/logos/jetbrains/jetbrains-icon.svg", name: "JetBrains"},
        {icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", name: "Figma"},
        {icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", name: "MySQL"},
        {icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg", name: "Next.js"},
        {icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", name: "Git"},
    ];

    return (
        <div className={"flex flex-wrap justify-center items-center gap-16"}>
            {skills.map((skill, index) => (
                <div key={index}
                     className={"w-auto h-[20dvh] flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-110"}>
                    <Image src={skill.icon} width={80} height={80} alt={skill.name}/>
                </div>
            ))}
        </div>
    );
}
