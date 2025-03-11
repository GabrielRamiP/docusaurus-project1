/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guía de Express con Node.js',  // Asegúrate de que este nombre de categoría sea correcto
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
  ],
};

module.exports = sidebars;
