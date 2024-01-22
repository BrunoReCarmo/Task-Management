import { WalletCards, Speech, ArrowBigUpDash, ShieldCheck, Medal } from 'lucide-react'
import React from 'react'

const featureItems = [
    {
        title: "Acesso Gratuíto",
        description:
            "Oferecemos soluções e ferramentas gratuitas aos nossos usuários.",
        icon: <WalletCards />,
    },
    {
        title: "Voz aos usuários",
        description:
            "Damos voz aos nossos usuários para que nos digam o que mudariam no Flink.",
        icon: <Speech />,
    },
    {
        title: "Simplicidade",
        description:
            "Estruturado para melhorar a experiência dos nossos usuários.",
        icon: <ArrowBigUpDash />,
    },
    {
        title: "Responsabilidade",
        description:
            "Garantimos nossa responsabilidade como fornecedores, entregando uma ferramenta de qualidade.",
        icon: <ShieldCheck />,
    },
];


function Features() {
    return (
        <div className="container mt-12 mx-auto">
            <section className="mb-32">
                <div className="flex flex-wrap">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
                        <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400">
                            Nos conheça
                        </p>
                        <h2 className="mb-6 text-3xl font-bold">
                            Flink é o <u className="text-primary dark:text-primary-400">
                                melhor</u>?
                        </h2>

                        <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                            Separamos alguns dos motivos que tornam o Flink melhor para você e sua escolha.
                            A forma como impacta diretamente sua gestão,
                            e uma ferramenta feita por nós pensando em você.
                        </p>
                    </div>

                    <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                        <div className="flex flex-wrap">
                            {featureItems.map((item, index) => (
                                <div key={index} className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3 hover:bg-gray-200 p-2 pb-4 rounded-lg">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <div className={`mb-6 inline-block rounded-md bg-violet-100 hover:bg-violet-200 p-4 hover:text-violet-950 text-violet-800`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="ml-4 grow">
                                            <p className="mb-3 font-bold">{item.title}</p>
                                            <p className="text-neutral-500 dark:text-neutral-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features;
