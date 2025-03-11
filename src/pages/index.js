import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <Layout>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Video de Pixabay incrustado */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/204083?autoplay=1&muted=1&controls=0&loop=1"
            className="w-[140%] h-[140%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          ></iframe>
        </div>

        {/* Capa de superposición para oscurecer y mejorar la visibilidad del texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenido principal */}
        <motion.div 
          className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Docusaurus Pro 🚀
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Documentación moderna y profesional para tu empresa.
          </p>

          {/* Botón de navegación */}
          <a
            href="/docs/intro"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-2xl shadow-lg hover:scale-105 transition-transform"
          >
            📜 Explorar Documentación
          </a>
        </motion.div>
      </main>
    </Layout>
  );
}
