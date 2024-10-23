import Navbar from "@/components/Navbar";
import Image from "next/image";

import { ArrowDownIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";

/*
Palette de couleurs de l'application :
1.  Arrière-plan de l'application - #11131F
2.  Arrière-plan subtil - #141726
3.  Arrière-plan des éléments de l'interface utilisateur - #182449
4.  Arrière-plan des éléments de l'interface utilisateur survolés - #1D2E62
5.  Arrière-plan des éléments de l'interface utilisateur actifs / sélectionnés - #253974
6.  Bordures et séparateurs subtils - #304384
7.  Bordures des éléments de l'interface utilisateur et anneaux de mise au point - #3A4F97
8.  Bordure des éléments de l'interface utilisateur survolés - #435DB1
9.  Arrière-plans solides - #3E63DD
10. Arrière-plans solides survolés - #5472E4
11. Texte à faible contraste - #9EB1FF
12. Texte à fort contraste - #D6E1FF
*/

export default function Home() {
    return (
        <div className={"bg-[#11131F] text-[#EEEEF0] w-dvw min-h-dvh h-auto flex flex-col justify-start items-center"}>
            <Navbar />

            <div className={"relative w-dvw h-[90dvh] flex justify-center items-center sm:px-10 px-5 pb-[10dvh]"}>
                <div className={"h-full flex flex-col justify-center items-start"}>
                    <h1 className={"text-5xl font-black"}>Gabin HALLOSSERIE</h1>
                    <h2 className={"text-2xl"}>Étudiant programmation web</h2>

                    <div className={"flex justify-start items-center gap-5"}>
                        <div className={"bg-[#3E63DD] hover:bg-[#5472E4] hover:cursor-alias text-[#D6E1FF] flex justify-start items-center gap-2 rounded-full px-3 py-1 my-5"}>
                            <BackpackIcon className={"animate-pulse"} />
                            <p className={"text-sm"}>En recherche d&apos;alternance</p>
                        </div>

                        <div className={"bg-red-500 hover:bg-red-600 hover:cursor-alias text-[#D6E1FF] flex justify-start items-center gap-2 rounded-full px-3 py-1 my-5"}>
                            <RocketIcon className={"animate-pulse"} />
                            <p className={"text-sm"}>Portfolio en cours de construction</p>
                        </div>
                    </div>

                    <p className={"w-5/6 text-base"}>Actuellement à l&apos;ESN 81 à Castres, je suis étudiant en programmation logiciel et web. Je suis à la recherche d&apos;un contrat d&apos;apprentissage pour une durée de 1 à 3 ans.</p>

                </div>

                <div className={"w-full h-full lg:flex hidden flex-col justify-center items-end"}>
                    <Image src={"/assets/webstorm.png"} alt={"Photo de profil"} width={3840} height={2160} className={"xl:w-[calc(1920px/3.5)] w-[calc(1920px/5)] xl:h-[calc(1080px/3.5)] h-[calc(1080px/5)] rounded-md"} />
                </div>

                <div className={"absolute bottom-4 w-dvw h-[5dvh] flex justify-center items-center"}>
                    <a href={"#about"} className={"flex justify-center items-center gap-2 animate-bounce"}>
                        <span className={"text-sm"}><ArrowDownIcon /></span>
                        <span className={"text-sm"}>En savoir plus</span>
                        <span className={"text-sm"}><ArrowDownIcon /></span>
                    </a>
                </div>
            </div>

        </div>
    );
}
