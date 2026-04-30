export function Cta() {
    return (
        <section className="bg-gray-900 py-20 px-6">
            {/** Contenu centré avec FlexBox */}
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-between gap-10">
                {/** Partie gauche : Les textes */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                        Ready to launch your next project?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div>

                {/** Partie droite : le bouton */}
                <div className="shrink-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 whitespace-nowrap">
                        Get started a project
                    </button>
                </div>
            </div>
        </section>
    );
}