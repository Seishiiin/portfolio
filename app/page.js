import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const schools = [
        {
            name: "Lycée Emile Peytavin",
            degree: "Baccalauréat Général",
            years: "2019 - 2022",
            description: "Spécialité Mathématiques - Numérique et Sciences Informatiques"
        },
        {
            name: "Lycée Emile Peytavin",
            degree: "BTS SIO",
            years: "2022 - 2024",
            description: "Option Solutions Logicielles et Applications Métiers"
        },
        {
            name: "ESN 81",
            degree: "Bachelor CSI",
            years: "Début en septembre 2025",
            description: "Développeur Web et Logiciel"
        }
    ];
    const projects = [
        {
            title: "Bird",
            description: "Application web de création de carte mentale",
            link: ""
        },
        {
            title: "Nexus",
            description: "Réseau social pour les joueurs de jeux vidéo",
            link: ""
        },
        {
            title: "Le Bofar",
            description: "Application de gestion d'un restaurant fictif",
            link: ""
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50">
            <div className={"absolute top-0 right-0 flex items-center justify-between gap-5 p-5"}>
                <Link href={"https://www.instagram.com/gabin.dev"} target={"_blank"}><i className={"bi bi-instagram text-gray-800"}></i></Link>
                <Link href={"https://www.linkedin.com/in/gabin-hallosserie/"} target={"_blank"}><i className={"bi bi-linkedin text-gray-800"}></i></Link>
                <Link href={"https://github.com/Seishiiin"} target={"_blank"}><i className={"bi bi-github text-gray-800"}></i></Link>
            </div>

            <div className={"w-full h-screen flex items-center justify-between"}>
                <div className={"w-1/2 h-full px-32 flex flex-col items-start justify-center"}>
                    <h1 className={"text-4xl font-bold text-center text-gray-800"}>Gabin HALLOSSERIE</h1>
                    <p className={"text-lg text-center text-gray-600"}>Développeur web junior</p>

                    <div className={"bg-gray-800 flex items-center justify-center gap-2 rounded-md px-2 py-1 my-5"}>
                        <div className={"w-3 h-3 bg-yellow-300 rounded-full animate-pulse duration-300"}></div>
                        <p className={"text-sm text-yellow-300"}>En recherche d&apos;alternance</p>
                    </div>

                    <p className={"text-md text-gray-800"}>Je suis actuellement en recherche d&apos;une alternance pour un bachelor développeur web et logiciel. Découvrez mon parcours, mes compétences et mes projets.</p>
                </div>

                <div className={"w-1/2 h-full flex items-center justify-center"}>
                    <Image src="/logo.jpg" alt="Gabin HALLOSSERIE" width={1920} height={1080} className={"w-1/2 rounded-xl"} />
                </div>
            </div>

            <Link href={"#school"} className={"absolute bottom-0 w-full flex items-center justify-center gap-2 py-2"}>
                <i className={"bi bi-arrow-down text-md text-gray-800 animate-bounce"}></i>
                <p className={"text-md text-gray-800"}>Scroll down</p>
                <i className={"bi bi-arrow-down text-md text-gray-800 animate-bounce"}></i>
            </Link>

            <div id="school" className="w-full bg-yellow-50 flex flex-col items-center py-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Mon Parcours Scolaire</h2>
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
                    {schools.map((school, index) => (
                        <div key={index} className={`bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition duration-300 ${index === 2 ? "opacity-50" : ""}`}>
                            <h3 className="text-xl font-semibold text-gray-800">{school.name}</h3>
                            <p className="text-sm text-gray-600">{school.degree}</p>
                            <p className="text-xs text-gray-500 italic">{school.years}</p>
                            <p className="text-center text-gray-700 mt-4">{school.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="projects" className="w-full bg-yellow-50 flex flex-col items-center pt-32 pb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Mes Projets</h2>
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-center text-gray-700 mt-4">{project.description}</p>
                            <Link href={project.link} className="w-full bg-blue-500 text-center text-white px-4 py-2 rounded-md mt-4">
                                {project.link ? "Voir le projet" : "Projet privé"}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
