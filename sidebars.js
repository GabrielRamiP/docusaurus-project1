/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guía de Estudio',
      items: [
        'intro',
        'express',
        'controladores',
        'endpoints',
        'rutas',
        'apis',
        'mongoose',
      ],
    },
    {
      type: 'category',
      label: 'FrontEnd', // Nuevo apartado desplegable
      collapsible: true,
      collapsed: true, // Por defecto estará cerrado
      items: [
        'frontend/ButtonComponent', // Aquí se encuentra el archivo ButtonComponent.md
        // Puedes añadir más archivos aquí si es necesario
      ],
    },
  ],
};

module.exports = sidebars;
