const featuresData = [
    {
        title: "Dedicated project manager",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        iconBg: "bg-purple-100",
        iconColor: "bg-purple-500",
    },
    {
        title: "Organized tasks",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        iconBg: "bg-red-100",
        iconColor: "bg-red-400",
    },
    {
        title: "Easy feedback sharing",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        iconBg: "bg-green-100",
        iconColor: "bg-green-400",
    },
    {
        title: "Never miss deadline",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        iconBg: "bg-gray-200",
        iconColor: "bg-gray-600",
    },

]

export function WhyChooseUs() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold text-xs tracking-widest uppercase mb-4 block">
                    Why Choose Us
                </span>

                <h2 className="text-4xl font-extrabold text-gray-900 max-w-xl mx-auto leading-tight">
                    People choose us because we serve the best for everyone
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-24">
                {featuresData.map((feature, index) => (
                    <div className="flex items-start gap-6" key={index}>
                        <div className={`w-14 h-14 rounded-xl shrink-0 flex items-center justify-center ${feature.iconBg}`}>
                            <div className={`w-6 h-6 rounded-md ${feature.iconColor}`}></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col md:flex-row items-center justify-between border-gray-200 pt-16 gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Ready to launch your next project?
                        </h3>

                        <p className="text-gray-500">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div>
                    <button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-4 rounded-lg transition duration-300 whitespace-nowrap">
                        Get started a project
                    </button>
                </div>
            </div>
        </section>
    );
}