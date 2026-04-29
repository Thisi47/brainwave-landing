export function TestimonialEndPage() {
    return (
        <section className="bg-blue-800 w-full py-10 px-6 max-w-full mx-auto flex flex-col items-center gap-10">
            <div>
                <h4 className="text-blue-200 uppercase text-sm">testimonial</h4>
            </div>

            <div className="w-2/5">
                <p className="text-white font-bold text-2xl text-justify">"Simply best. Better than all the rest.
                    I'd recommand this product to beginners and advanced users."
                </p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-lg">
                        <img
                            src={'avatar-franklin.png'}
                            alt="Franklin Hicks"
                            className="w-full h-full object-cover" />
                    </div>
                </div>

                <h3 className="text-white font-bold text-xl">Ian Klein</h3>

                <p className="text-gray-50 opacity-50">Digital Marketer</p>
            </div>
        </section>
    );
}