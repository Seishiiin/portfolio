import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import { Poppins } from "next/font/google";
import "./globals.css";

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
            <SpeedInsights />
            <Analytics />
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
