import "bootstrap-icons/font/bootstrap-icons.css";
import { Poppins } from "next/font/google";
import "./globals.css";

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Gabin Hallosserie | Portfolio",
    description: "Développeur web junior, je suis passionné par la création de sites web et d'applications web. Découvrez mes projets et mon parcours.",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
            <body className={`${globalNextFont.className} antialiased scroll-smooth`}>
                {children}
            </body>
        </html>
    );
}
