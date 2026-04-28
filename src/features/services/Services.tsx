type ServiceCardProps = {
    title: String;
    description: String;
    bgColor: String;
};

const servicesData: ServiceCardProps[] = [
    {
        title: "Graphic Design",
        description: "with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
        bgColor: "bg-green-400"
    },
    {
        title: "Web Development",
        description: "with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
        bgColor: "bg-blue-600"
    },
    {
        title: "Content Writing",
        description: "with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
        bgColor: "bg-red-500"
    },
];

// Mini composant qui reprensete une seule carte
function ServiceCard({ title, description, bgColor }: ServiceCardProps) {
    return (
        <div className={`${bgColor} text-white p-8 rounded-xl flex flex-col items-center text-center transition-transorm hover:translate-y-2`}>
            {/** Espace pour l'icon */}
            <div className="w-16 h-16 bg-white/20 rounded-lg mb-6 mb-4"></div>

            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-sm opacity-90 mb-6">{description}</p>
            <a href="#" className="font-semibold text-sm flex items-center group">
                Learn more<span className="ml-2 group-hover:translate-x-1 transition-transform">...</span>
            </a>

        </div>
    );
}

export function Services() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/** En-tête de la section */}
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold text-xs tracking-widest uppercase mb-4 block">
                    Our services
                </span>

                <h2 className="text-4xl font-extrabold text-gray-900 max-w-xl mx-auto">
                    We provide great services to our customers based on their needs.
                </h2>
            </div>
            {/** La grille et la boucle */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        bgColor={service.bgColor}
                    />
                ))}
            </div>
        </section>
    );
}
