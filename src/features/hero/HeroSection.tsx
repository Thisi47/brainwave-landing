import Image from "next/image";

export const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6">
            {/** Colonne de gauche (Texte) */}
            <div className="md:w-1/2">
                <span className="text-red-500 font-bold text-xs tracking-widest uppercase md-4 block">
                    Let's shift your business
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">Shift your business fast with Shade Pro.</h1>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                    with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
                </p>
                <button className="bg-blue-600 text-white font-semibold py-6 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                    Get started a project.
                </button>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                <div className="w-100 h-100  rounded-full flex items-center justify-center text-gray-500 shadow-xl relative">
                    <span>
                        <img src="/hero-image.png" alt="Femme souriante" className="w-full max-w-md" />
                    </span>
                </div>
            </div>
        </section>
    );
}