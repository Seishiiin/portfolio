import { Poppins } from "next/font/google";
import "./globals.css";

// Color palette
// white  : #fffbe4
// black  : #0a0901
// purple : #b978ed

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Gabin Hallosserie | Portfolio",
    description: "Étudiant en programmation logiciel et web à l'ESN 81",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
