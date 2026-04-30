// 1. La directive magique qui active l'interactivité côté client
"use client";

import { useState } from "react";

export function Navbar() {
    // 2. On crée une variable d'état. 
    // isOpen vaut "false" par défaut. setIsOpen est la fonction pour la modifier.
    const [isOpen, setIsOpen] = useState(false);

    return (
        // On ajoute 'relative' pour que le menu mobile puisse se positionner par rapport à la nav
        <nav className="flex items-center justify-between py-6 px-10 bg-white relative">

            {/* --- Logo --- */}
            {/* z-20 le garde au-dessus du menu mobile ouvert */}
            <div className="text-xl font-bold z-20">
                Brainwave<span className="text-blue-600">.io</span>
            </div>

            {/* --- Liens Desktop (Cachés sur mobile avec hidden md:flex) --- */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-blue-600 transition-colors">Demos</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Pages</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* --- Bouton Desktop --- */}
            <div className="hidden md:block">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors">
                    Get started a project
                </button>
            </div>

            {/* --- Bouton Mobile (Le "Burger") --- */}
            {/* Visible uniquement sur mobile (md:hidden). Au clic, on inverse la valeur de isOpen */}
            <button
                className="md:hidden z-20 text-gray-900 font-bold focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Fermer" : "Menu"}
            </button>

            {/* --- Le Menu Mobile Déroulant --- */}
            {/* Si isOpen est vrai, on affiche cette grande div qui prend tout l'écran */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 z-10 md:hidden shadow-2xl">
                    <a href="#" className="text-2xl font-medium text-gray-900" onClick={() => setIsOpen(false)}>Demos</a>
                    <a href="#" className="text-2xl font-medium text-gray-900" onClick={() => setIsOpen(false)}>Pages</a>
                    <a href="#" className="text-2xl font-medium text-gray-900" onClick={() => setIsOpen(false)}>Support</a>
                    <a href="#" className="text-2xl font-medium text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg mt-4">
                        Get started
                    </button>
                </div>
            )}

        </nav>
    );
}