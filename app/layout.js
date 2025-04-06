import 'bootstrap-icons/font/bootstrap-icons.css';
import { Poppins } from 'next/font/google';
import "./globals.css";

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Gabin Hallosserie | Développeur web junior",
    description: "Développeur web junior, je suis passionné par le développement web et l'apprentissage de nouvelles technologies. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour améliorer mes compétences.",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={"scroll-smooth"}>
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
