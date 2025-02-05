import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50">
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

            <div className={"absolute bottom-0 w-full flex items-center justify-center gap-2 py-2"}>
                <i className={"bi bi-arrow-down text-md text-gray-800 animate-bounce"}></i>
                <p className={"text-md text-gray-800"}>Scroll down</p>
                <i className={"bi bi-arrow-down text-md text-gray-800 animate-bounce"}></i>
            </div>
        </div>
    );
}
