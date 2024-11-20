import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    const projects = {
        "Bird API": {
            "title": "Bird API",
            "description": "API pour une application web de création de carte mentale",
            "technologies": ["PHP", "CodeIgniter", "Eloquent"],
            "image": "/assets/bird.png",
        },
        "Nexus": {
            "title": "Nexus",
            "description": "Application mobile type réseau social pour gamers",
            "technologies": ["React Native", "Tailwind CSS", "Firebase"],
            "image": "",
        },
        "Le Bofar": {
            "title": "Le Bofar",
            "description": "Site vitrine et de réservation pour un restaurant",
            "technologies": ["Next.js", "Tailwind CSS", "Prisma"],
            "image": "",
        },
/*        "REA Dreams": {
            "title": "REA Dreams",
            "description": "Site de gestions de rêves boostés à l'IA",
            "technologies": ["NextJS", "Supabase", "OpenAI"],
            "image": "/assets/rea-dreams.png",
        }*/
    }

    return (
        <div className={"w-full h-auto min-h-screen bg-[#0a0901] text-[#fffbe4]"}>
            <Navbar/>

            <div className={"w-5/6 lg:px-0 lg:w-3/4 min-h-[calc(100dvh-12rem)] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto py-16"}>
                {Object.keys(projects).map((key) => {
                    return (
                        <ProjectCard key={key} title={projects[key].title} description={projects[key].description} technologies={projects[key].technologies} image={projects[key].image}/>
                    );
                })}
            </div>
        </div>
    );
}