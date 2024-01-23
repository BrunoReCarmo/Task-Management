import Image from "next/image";
import { cn } from "@/lib/utils";
import { headlineFont } from "@/lib/font";

export const Logo = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 flex items-center backdrop-blur-sm">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div className="hover:opacity-75 transition items-center gap-x-1 flex">
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
            </div>
        </div>
    )
}