const features = [
  {
    title: "Project management",
    desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Time tracking",
    desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Beautiful mobile app",
    desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  }
];

export function SaasFeatures() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="p-3 bg-green-50 w-fit rounded-lg">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}