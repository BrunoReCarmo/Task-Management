import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { headlineFont } from "@/lib/font";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-1 hidden md:flex">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                <p className={cn
                    ("text-xl text-neutral-700",
                        headlineFont.className)}>
                    Flink
                </p>
            </div>
        </Link>
    )
}