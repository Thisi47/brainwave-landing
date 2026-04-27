export function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 px-10 bg-white">
            {/** Logo de Brainwave */}
            <div className="text-xl font-bold">
                Brainwave<span className="text-blue-600">.io</span>
            </div>
            {/** Les liens */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-blue-600">Demos</a>
                <a href="#" className="hover:text-blue-600">Pages</a>
                <a href="#" className="hover:text-blue-600">Support</a>
                <a href="#" className="hover:text-blue-600">Contact</a>
            </div>

            {/** Le button commencé */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-sm">
                Get started a project
            </button>
        </nav>
    );
}