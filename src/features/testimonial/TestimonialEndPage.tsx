export function TestimonialEndPage() {
    return (
        // L'arrière-plan bleu infini
        <section className="bg-blue-600 w-full py-24 px-6 flex flex-col items-center gap-10 text-center">

            {/* Le Surtitre */}
            <div>
                {/* On ajoute tracking-widest pour espacer les lettres comme sur la maquette */}
                <span className="text-blue-200 uppercase text-xs font-bold tracking-widest">
                    Testimonial
                </span>
            </div>

            {/* La Citation */}
            {/* w-full pour le mobile, max-w-4xl empêche le texte d'être trop large sur grand écran */}
            <div className="w-full max-w-4xl">
                <p className="text-white font-bold text-3xl md:text-4xl leading-tight">
                    "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users."
                </p>
            </div>

            {/* L'Auteur */}
            <div className="flex flex-col items-center mt-4">
                <div className="shrink-0 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-lg border-2 border-blue-400">
                        <img
                            src="/avatar-franklin.png"
                            alt="Ian Klein"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h3 className="text-white font-bold text-xl">Ian Klein</h3>
                {/* Un bleu très clair passe souvent mieux qu'une opacité sur un fond bleu foncé */}
                <p className="text-blue-200 text-sm mt-1">Digital Marketer</p>
            </div>

        </section>
    );
}