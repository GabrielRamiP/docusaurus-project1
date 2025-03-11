import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <Layout>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Video de fondo en autoplay */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.videvo.net/videvo_files/converted/2021_01/preview/210108_06_TechBackground_1080p.mp4" type="video/mp4" />
        </video>

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
