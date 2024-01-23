import { cn } from "@/lib/utils";
import { headlineFont } from "@/lib/font";

import { Logo } from "./_components/logo";
import { Illustration } from "./_components/illustration";

const ClerkLayout = (
    { children }:
        { children: React.ReactNode }
) => {
    return (
        <>
            <div className="z-10 absolute">
                <Logo />
            </div>
            <div className="flex h-screen">
                <Illustration />
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className={cn("max-w-md w-full p-6", headlineFont.className)}>
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Flink</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Junte-se à nossa comunidade com acesso permanente e gratuito.</h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClerkLayout;