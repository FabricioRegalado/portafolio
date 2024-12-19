import { motion } from "framer-motion";

const projects = [
  {
    title: "Proyecto 1",
    description: "Un diseño innovador para una plataforma digital.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Una solución creativa para un cliente corporativo.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

const Work = () => {
  return (
    <section id="proyectos" className="py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Proyectos Destacados</h2>
        <p className="text-gray-600 mt-4">
          Aquí puedes ver algunos de mis proyectos recientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="block mt-4 text-blue-500 hover:underline"
              >
                Ver más
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
