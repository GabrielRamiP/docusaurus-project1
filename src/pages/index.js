import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology,office)' }}>
        <div className="bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center px-5">
          
          {/* Botón Modo Claro/Oscuro */}
          <button
            className="absolute top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600"
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          >
            {colorMode === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
          </button>
          
          {/* Hero Section */}
          <motion.h1
            className="text-5xl font-extrabold text-white mb-5 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Soluciones Tecnológicas con Docusaurus 🚀
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 mb-8 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Una plataforma profesional para documentar proyectos, APIs y más con una experiencia visual moderna y funcional.
          </motion.p>
          
          {/* Video de presentación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video de Presentación"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
          
          {/* Botón de llamada a la acción */}
          <motion.a
            href="/docs/intro"
            className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            📖 Explora la Documentación
          </motion.a>
        </div>
      </div>
    </div>
  );
}
