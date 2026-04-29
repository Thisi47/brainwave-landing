const projectsData = [
  {
    category: "Graphic Design",
    title: "Aura Branding Design",
    image: "/case1.png",
  },
  {
    category: "Graphic Design",
    title: "AB.S Snack Packaging",
    image: "/case2.png",
  },
  {
    category: "Web Development",
    title: "Gradient Website Development",
    image: "/case3.png",
  },
  {
    category: "Content Writing",
    title: "Magazine Content Writing",
    image: "/case4.png",
  },
];


export function CaseStudies() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/** En-tete de la section */}
      <div className="text-center mb-16">
        <span className="text-red-500 font-bold text-xs tracking-widest uppercase mb-4 block">
          case studies
        </span>

        <h2 className="text-4xl font-extrabold text-gray-900 max-w-xl mx-auto">
          Our works describe why we are the best in the business
        </h2>
      </div>

      {/** la Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {projectsData.map((project, index) => (
          <div className="group cursor-pointer" key={index}>
            <div className="w-full rounded-2xl overflow-hidden mb-6 bg-gray-100 aspect-4/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            {/** Les textes sous l'image */}
            <div>
              <span className="text-gray-500 text-sm mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/** Le lien de bas de section */}
      <div className="text-center">
        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">See all works <span className="ml-2">&rarr;</span></a>
      </div>
    </section>
  );
}