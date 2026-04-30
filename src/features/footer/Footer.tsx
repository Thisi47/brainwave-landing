export function Footer() {
    return (
        <footer className="bg-gray-900 pt-16 px-20 md:px-40">
            <div className="max-w-7xl mx-auto">

                <div className="border-t border-gray-200 pb-8"></div>

                {/* Grille principale des liens */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
                    {/* Colonne 1 : Entreprise */}
                    <div>
                        <h4 className="font-bold text-gray-100 mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-blue-600">About us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Press</a></li>
                        </ul>
                    </div>

                    {/* Colonne 2 : Produit */}
                    <div>
                        <h4 className="font-bold text-gray-100 mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">News</a></li>
                            <li><a href="#" className="hover:text-blue-600">Help desk</a></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Légal */}
                    <div>
                        <h4 className="font-bold text-gray-100 mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms & conditions</a></li>
                            <li><a href="#" className="hover:text-blue-600">Return policy</a></li>
                        </ul>
                    </div>

                    {/* Colonne 4 : Branding */}
                    <div>
                        <div className="text-xl font-bold mb-4 text-white">
                            Brainwave<span className="text-blue-600">.io</span>
                        </div>
                        <p className="text-gray-300">
                            Build your next consultancy website within few minutes.
                        </p>
                    </div>
                </div>

                {/* Ligne de copyright tout en bas */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 Brainwave.io. All rights reserved.</p>
                    {/* Réseaux sociaux (espaces réservés) */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Twitter</a>
                        <a href="#" className="hover:text-gray-300">LinkedIn</a>
                        <a href="#" className="hover:text-gray-300">Facebook</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}