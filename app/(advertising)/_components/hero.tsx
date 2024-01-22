import { Trophy } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { headlineFont, contentFont } from "@/lib/font";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn
                ("flex flex-col",
                    headlineFont.className)
            }>
                <div className="flex items-center align-center mb-4">
                    <h1 className="text-3xl md:text-6xl text-center text-neutral-800">
                        Flink
                    </h1>
                    <div className=" flex text-sm ml-2 items-center border shadow-sm p-2 bg-violet-200 text-violet-700 rounded-full uppercase">
                        <Trophy className="5-6 w-5 mr-2" />
                        Referência em gestão
                    </div>
                </div>
                <div className="text-3xl w-fit text-center md:text-6xl bg-gradient-to-r from-violet-900 to-purple-600 text-white px-4 p-2 rounded-lg shadow-sm font-bold">
                    Seja diferente
                </div>
            </div>
            <div className={cn("text-sm md:text-lg text-neutral-400 mt-4 max-w-xs md:max-w-md text-left mx-auto", contentFont.className)}>
                Atinga novos patamares de resultados e aumente sua produtividade! Eleve sua gestão e produção a níveis superiores de engajamento.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Acesse gratuitamente
                </Link>
            </Button>
        </div>
    );
};

export default Hero;