import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <Layout>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Contenedor del video mucho más grande y centrado */}
        <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] h-[60vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.youtube.com/embed/5l-NxZB9zFo?autoplay=1&loop=1&playlist=5l-NxZB9zFo&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0" 
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              className="w-full h-full object-cover"
              title="Fondo YouTube Video"
            ></iframe>
          </div>
        </div>

        {/* Capa de superposición para oscurecer un poco el fondo */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenido principal */}
        <motion.div 
          className="relative z-10 bg-white bg-opacity-30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Docusaurus Pro 🚀
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Documentación moderna y profesional para tu empresa.
          </p>

          {/* Botón de navegación más atractivo */}
          <a
            href="/docs/intro"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-lg text-2xl shadow-lg hover:scale-105 transition-transform"
          >
            📜 Explorar Documentación
          </a>
        </motion.div>
      </main>
    </Layout>
  );
}
