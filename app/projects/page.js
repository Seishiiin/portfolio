"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Projects() {
    const projects = {
        "Bird API": {
            "title": "Bird API",
            "description": "API pour une application web de création de carte mentale",
            "technologies": ["PHP", "CodeIgniter", "Eloquent", "PHPStorm", "Notion"],
            "image": "/assets/bird.png",
        },
        "Nexus": {
            "title": "Nexus",
            "description": "Application mobile type réseau social pour gamers",
            "technologies": ["React Native", "TailWindCSS", "Expo Go", "WebStorm"],
            "image": "",
        },
        "Le Bofar": {
            "title": "Le Bofar",
            "description": "Site vitrine et de réservation pour un restaurant",
            "technologies": ["NextJS", "Prisma", "TailWindCSS", "WebStorm"],
            "image": "",
        },
        "French Clock": {
            "title": "French Clock",
            "description": "Site web dynamique d'horloge",
            "technologies": ["NextJS", "TailWindCSS", "WebStorm"],
            "image": "",
        },
    };

    const [selectedTech, setSelectedTech] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const allTechnologies = [...new Set(Object.values(projects).flatMap(project => project.technologies))].sort((a, b) => a.localeCompare(b));

    const filteredProjects = Object.keys(projects).filter((project) => {
        if (selectedTech === '') return true;
        return projects[project].technologies.includes(selectedTech);
    });

    const getIconPath = (tech) => `/assets/technos/${tech.toLowerCase().replace(/ /g, "_")}.svg`;

    return (
        <div className={"w-full h-auto min-h-screen bg-[#0a0901] text-[#fffbe4]"}>
            <Navbar />

            <div className="w-5/6 lg:px-0 lg:w-3/4 min-h-[calc(100dvh-12rem)] mx-auto py-16">
                <div className="w-full text-sm mb-8 flex justify-between items-center">
                    <div className={"flex justify-start items-center gap-2"}>
                        <p>Filtrer par technologie :</p>
                        <div className="relative inline-block">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 bg-[#1a1a1a] text-[#fffbe4] px-4 py-2 rounded-md outline-none">{selectedTech ? (
                                    <>
                                        <Image width={1920} height={1920} src={getIconPath(selectedTech)} alt={selectedTech} className="w-5 h-5" />
                                        {selectedTech}
                                    </>
                                ) : (
                                    <>
                                        <p>Toutes les technologies</p>
                                    </>
                                )}
                            </button>
                            {menuOpen && (
                                <ul className="absolute left-0 mt-2 bg-[#1a1a1a] border border-[#333] rounded-md shadow-lg z-10 w-56 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#888] scrollbar-thumb-rounded scrollbar-track-[#333]">
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-[#333] cursor-pointer border-b border-[#333]" onClick={() => {setSelectedTech('');setMenuOpen(false);}}>Toutes les technologies</li>
                                    {allTechnologies.map((tech) => (
                                        <li key={tech} className="flex items-center gap-2 px-4 py-2 hover:bg-[#333] cursor-pointer" onClick={() => {setSelectedTech(tech);setMenuOpen(false);}}>
                                            <Image width={1920} height={1920} src={getIconPath(tech)} alt={tech} className="w-5 h-5" />
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"}>
                    {filteredProjects.reverse().map((project) => (
                        <ProjectCard key={project} title={projects[project].title} description={projects[project].description} technologies={projects[project].technologies} image={projects[project].image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
