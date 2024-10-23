import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const globalNextFont = Rethink_Sans ({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
    title: "Gabin Hallosserie",
    description: "Actuellement à l&apos;ESN 81 à Castres, je suis étudiant en programmation logiciel et web. Je suis à la recherche d&apos;un contrat d&apos;apprentissage pour une durée de 1 à 3 ans.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" style={{scrollBehavior: "smooth"}}>
            <body className={`${globalNextFont.className} antialiased bg-[#11131F]`}>
                <Analytics />
                {children}
            </body>
        </html>
    );
}
