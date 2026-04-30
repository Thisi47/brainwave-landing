export default function ContactPage() {
    return (
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">
                Contact Us
            </span>

            <h1 className="text-gray-500 text-lg mb-12">
                This is our new contact page. Notice how the Navbar and Footer are already here without us having to import them!
            </h1>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm text-left">
                <div className="mb-4">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:bg-blue-500" placeholder="hello@example.com" />
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
            </div>
        </section>
    );
}