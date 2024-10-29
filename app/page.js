import Navbar from "@/components/Navbar";
import Image from "next/image";

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

            <div className={"relative w-full h-[90dvh] flex justify-between items-center"}>
                <div className={"h-full sm:px-10 px-5 flex flex-col justify-center items-start gap-6"}>
                    <h1 className={"relative ml-14 text-[#D6E1FF] text-4xl font-bold"}><span className={"absolute -left-14"}>👋</span>Hey, moi c&apos;est <span className={"text-[#3E63DD]"}>Gabin HALLOSSERIE</span></h1>

                    <div className={"flex sm:flex-row flex-col sm:justify-start justify-center sm:items-center items-start sm:gap-5 gap-2"}>
                        <div className={"ml-14 bg-[#182449] flex justify-start items-center gap-2 p-2 rounded-xl"}>
                            <div className={"bg-[#3E63DD] w-[10px] h-[10px] rounded-full animate-pulse"}></div>
                            <h2 className={"text-[#3E63DD] font-bold  text-sm"}>À la recherche d&apos;une alternance</h2>
                        </div>

                        <div className={"ml-14 sm:ml-0 bg-orange-100 flex justify-start items-center gap-2 p-2 rounded-xl"}>
                            <div className={"bg-orange-900 w-[10px] h-[10px] rounded-full animate-pulse"}></div>
                            <h2 className={"text-orange-900 font-bold  text-sm"}>Portfolio en cours de création</h2>
                        </div>
                    </div>

                    <p className={"w-3/5 ml-14 text-[#D6E1FF] text-sm"}>Je suis un étudiant en programmation web passionné par le développement d&apos;applications web modernes et performantes. J&apos;aime apprendre de nouvelles technologies et les appliquer dans des projets personnels. Je suis actuellement en bachelor CSI à l&apos;ESN 81 à Castres</p>
                </div>

                <div className={"hidden xl:flex h-full sm:px-10 px-5 flex-col justify-center items-end"}>
                    <Image src={"/assets/webstorm.png"} alt={"Photo de mon environnement de développement"} width={1500} height={844} />
                </div>

               {/*<a href={"#"} className={"absolute w-[300px] text-center bottom-10 left-[calc(50%-150px)] transform -translate-x-1/2 flex justify-center items-center gap-5 animate-bounce"}>
                    <DoubleArrowDownIcon className={"w-4 h-4 text-[#3E63DD]"} />
                    <p className={"text-[#D6E1FF] text-sm"}>En savoir plus sur moi</p>
                    <DoubleArrowDownIcon className={"w-4 h-4 text-[#3E63DD]"} />
                </a>*/}
            </div>
        </div>
    );
}
