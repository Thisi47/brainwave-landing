const statsData = [
    {
        value: "1M+",
        text: "Customers visit Omega every month to get their service done We shere."
    },
    {
        value: "92%",
        text: "Satisfaction rate comes from our awesome customers."
    },
    {
        value: "4.9/5",
        text: "Average customer ratinas we have got ail over sterer."
    }
]

export function Facts() {
    return (
        <section className="flex flex-row">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-5xl  font-extrabold text-gray-900">{stat.value}</h3>
                        <p className="max-w-xs text-gray-500 text-xl w-3/4 mx-auto">{stat.text}</p>
                    </div>
                ))}
            </div>


        </section>
    );
}