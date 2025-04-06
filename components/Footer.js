import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div id={"contact"} className="w-full flex xs:flex-col justify-between items-start border-t-2 px-20 py-5 bg-gray-100">
            <p className="text-sm text-gray-600">&copy; 2025 - Gabin Hallosserie</p>

            <div className={"flex flex-col justify-end items-start"}>
                <Link href={"https://www.instagram.com/gabin.dev?igsh=eGptaGQ5endscmUz&utm_source=qr"} target={"_blank"} className={"flex justify-start items-center gap-1 text-sm hover:underline"}>
                    <Image src={"/assets/logos/instagram.svg"} alt={"Instagram"} width={14} height={14} className={""}/>Instagram
                </Link>

                <Link href={"https://www.linkedin.com/in/gabin-hallosserie/"} target={"_blank"} className={"flex justify-start items-center gap-1 text-sm hover:underline"}>
                    <Image src={"/assets/logos/linkedin.svg"} alt={"LinkedIn"} width={16} height={16} className={""}/>LinkedIn
                </Link>

                <Link href={"https://www.github.com/seishiiin"} target={"_blank"} className={"flex justify-start items-center gap-1 text-sm hover:underline"}>
                    <Image src={"/assets/logos/github.svg"} alt={"GitHub"} width={14} height={14} className={""}/>GitHub
                </Link>
            </div>
        </div>
    );
}