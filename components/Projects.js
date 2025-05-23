import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            name: "Lucide",
            description: "Lucide est une application iOS développée pour aider les gens à ce concentrer. Elle est en cours de développement mais l'idée est d'y intégrer un pomodoro, une liste de tâche intelligente ainsi que d'autres features utiles.",
            link: "",
            logo: "/assets/logos/xcode.svg",
            date: "mai 2025 - en cours de développement"
        },
        {
            name: "CleanPy - Code Cleaner",
            description: "CleanPy est un outil de nettoyage de code Python qui analyse le code source et propose des améliorations pour le rendre plus lisible et maintenable. Il est utile pour les développeurs souhaitant améliorer la qualité de leur code.",
            link: "https://github.com/Seishiiin/clean-py",
            logo: "/assets/logos/pycharm.svg",
            date: "avril 2025"
        },
        {
            name: "Aetheris - Library Manager",
            description: "Aetheris est une application Java de gestion de bibliothèque permettant de gérer les livres, les emprunts et les retours. Elle est conçue pour être utilisée par les bibliothécaires et les utilisateurs.",
            link: "",
            logo: "/assets/logos/intellijidea.svg",
            date: "janvier 2025 - février 2025"
        },
        {
            name: "Bird - Mind Mapping",
            description: "Bird est une application web de création de cartes mentales spécialement conçue pour des collégiens pour organiser leurs projets d'orientation.",
            link: "",
            logo: "/assets/logos/phpstorm.svg",
            date: "janvier 2024 - février 2024"
        },
        {
            name: "Bofar - Restaurant savoyard",
            description: "Le Bofar est un site vitrine pour un restaurant fictif typique savoyard, permettant de découvrir le restaurant et de réserver une table.",
            link: "",
            logo: "/assets/logos/webstorm.svg",
            date: "juin 2024 - juillet 2024"
        },
        {
            name: "Nexus - Social Network",
            description: "Nexus est une application mobile de type reseau social permettant de mettre en lien les joueurs de jeux vidéos en fonction de leurs jeux préférés et de leur niveau de jeu.",
            link: "",
            logo: "/assets/logos/webstorm.svg",
            date: "juin 2024 - juillet 2024"
        },
    ]

    return (
        <div id={"projects"} className={"w-2/3 flex flex-col justify-start items-start gap-10 mx-auto mb-20"}>
            <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-10"}>
                {projects.map((project, index) => (
                    <div className={"flex flex-col items-start border rounded-md p-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"} key={index}>
                        <div className={"w-full flex justify-between items-center"}>
                            <div className={"flex flex-col justify-start items-start"}>
                                <p className={"font-bold text-md"}>{project.name}</p>
                                    {project.link.trim() !== "" ? (
                                        <Link href={project.link} target="_blank" className="font-light text-xs italic underline">{project.link}</Link>
                                    ) : (
                                        <span className="font-light text-xs italic">Projet privé ou indisponible</span>
                                    )}
                            </div>
                            <Image src={project.logo} alt="Projet logo" width={30} height={30} />
                        </div>

                        <p className={"text-sm font-medium mt-5 line-clamp-3"}>{project.description}</p>

                        <hr className={"w-full h-px bg-gray-300 mt-5"}/>

                        <div className={"w-full flex justify-between items-center mt-5"}>
                            <p className={"text-xs font-light text-gray-500"}>{project.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}