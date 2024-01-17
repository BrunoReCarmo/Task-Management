import { FilePieChart } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { headlineFont, contentFont } from "@/lib/font";
import { Button } from "@/components/ui/button";

const AdvertisingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn
                ("flex items-center justify-center flex-col",
                    headlineFont.className)
            }>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-violet-100 text-violet-700 rounded-full uppercase">
                    <FilePieChart className="h-6 w-6 mr-2" />
                    Seu gerenciador de Tarefas
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">Flink auxilia na sua gestão</h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-violet-900 to-purple-600 text-white px-4 p-2 rounded-lg shadow-sm font-bold">
                    Seja diferente
                </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", contentFont.className)}>
                Alcance novos resultados e uma grande produtividade!
                Engaje você mesmo e o seu time a novos níveis de gestão e produção de ativos agora mesmo.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Acesse gratuitamente
                </Link>
            </Button>
        </div>
    );
};

export default AdvertisingPage;