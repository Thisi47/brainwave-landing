export function Story() {
    return (
        // Remplacement de items-center par items-start
        <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">

            {/** Colonne de gauche : Titre + Homme */}
            <div className="lg:w-1/2 flex flex-col">
                <span className="text-red-500 font-bold text-xs tracking-widest uppercase mb-4 block">
                    Our story
                </span>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12 leading-tight">
                    We know how everything works and why your business is failing over and over again.
                </h2>

                {/** Image de l'homme (Remise dans le flux normal, avec une hauteur fixée à 600px) */}
                <div className="w-2/3 lg:w-5/6 h-[400] lg:h-[600] rounded-lg overflow-hidden shadow-2xl">
                    <img src="/1.png" alt="Team member" className="w-full h-full object-cover bg-gray-200" />
                </div>
            </div>

            {/** Colonne de droite : Collage + Texte */}
            <div className="lg:w-1/2 flex flex-col lg:pt-20">
                {/** pt-20 pour décaler légèrement le collage vers le bas par rapport au titre de gauche */}

                {/** 1. Le conteneur du collage (Il réserve un espace de 450px de haut) */}
                <div className="relative w-full h-[350] lg:h-[450] mb-12">
                    {/** Motif de fond (Mis un peu plus en haut à droite) */}
                    <div className="absolute right-35 bottom-55 text-blue-600 rounded-full text-6xl z-40">
                        <img src="Fill_1.png" alt="Cercle avec des points" />
                    </div>

                    {/** Image de la femme (Ajustée à gauche) */}
                    <div className="absolute left-0 top-40 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-xl z-20">
                        <img src="/2.png" alt="Strategy planning" className="w-full h-full object-cover bg-gray-300" />
                    </div>

                    {/** Image détail (Ajustée en bas à droite) */}
                    <div className="absolute left-130 bottom-0 w-2/5 h-1/2 rounded-2xl overflow-hidden z-30 mt-[-50] ">
                        <img src="/3.png" alt="Office detail" className="w-full h-full object-cover bg-gray-400 border-4 border-white" />
                    </div>
                </div>

                {/** 2. Le texte du bas (Maintenant repoussé proprement par le conteneur du collage) */}
                <div className="mt-30 w-full lg:w-11/12">
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We share common trends and strategies for improving your rental income and making sure you stay in high demand.
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div>
            </div>

        </section>
    );
}