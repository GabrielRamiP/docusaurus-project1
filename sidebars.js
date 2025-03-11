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
    {
      type: 'category',
      label: 'FrontEnd', // Nuevo menú desplegable
      items: [
        'frontend/ButtonComponent', // Agregando el archivo ButtonComponent.md
      ],
    },
  ],
};

module.exports = sidebars;
