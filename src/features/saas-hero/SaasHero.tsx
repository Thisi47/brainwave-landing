export function SaasHero() {
    return (
        <section className="pt-24 pb-12 max-w-7xl mx-auto flex flex-col items-center text-center">
            {/** Le bloc de texte centré */}
            <div className="max-w-3xl mx-auto mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Get things done by awasome remote team
                </h1>
                <p className="text-gray-500 text-lg mb-10 px-4">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-lg transition-colors">
                        Get started for free &rarr;
                    </button>
                    <button className="w-full sm:w-auto bg-transparent text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                        Learn more
                    </button>
                </div>
            </div>

            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img src="browser_01.png" alt="Interface de l'application Albino" className="w-full h-auto object-cover" />
            </div>
        </section>
    );
}