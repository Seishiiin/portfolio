import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outfit } from "next/font/google";

const globalNextFont = Outfit ({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Gabin Hallosserie",
    description: "I'm a student in development and this is my personal website.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" style={{scrollBehavior: "smooth"}}>
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
