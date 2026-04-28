export function Testimonial() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            {/* Conteneur principal en Flexbox (Ligne sur grand écran, Colonne sur mobile) */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/** Partie de gauche, 'avatar */}
                <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden shadow-lg border-4 border-white">
                        <img
                            src={'avatar-franklin.png'}
                            alt="Franklin Hicks"
                            className="w-full h-full object-cover" />
                    </div>
                </div>

                <div>
                    <div className="text-yellow-400 text-xl tracking-widest mb-4">
                        &#9733; &#9733; &#9733; &#9733; &#9733;
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                        "I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish."
                    </h3>

                    <p className="text-gray-500 font-medium"><span className="text-gray-900 font-bold mr-2">Franklin Hicks</span> Web Developer</p>

                </div>
            </div>


        </section>
    );
}