import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contacto" className="py-16 bg-gray-50 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800">Contáctame</h2>
        <p className="text-gray-600 mt-4">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
