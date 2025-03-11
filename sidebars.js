/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guía de Express con Node.js',  
      items: [
        'express',
        'nodejs',
        'controladores',
        'endpoints',
        'rutas',
        'apis',
        'mongoose',
      ],
    },
    {
      type: 'category',
      label: 'Frontend',   // Ahora aparecerá "Frontend"
      items: [
        'frontend/buttoncomponent',  // Corregí la ruta del archivo .md
      ],
    },
  ],
};

module.exports = sidebars;
