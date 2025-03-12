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
        'frontend/buttonFile',
        'frontend/buttonHomeAgents',
        'frontend/calendario',
        'frontend/cardComponent',
        'frontend/chartBar',
        'frontend/comentBox',
        'frontend/counter',
        'frontend/create-a-blog-post',
        'frontend/create-a-document',
        'frontend/create-a-page',
        'frontend/customTab',
        'frontend/datePickerComponent',
        'frontend/dateTimePicker',
        'frontend/dayCounter',
        'frontend/deploy-your-site',
        'frontend/doughnutChart',
        'frontend/doughnutExample',
        'frontend/downloader',
        'frontend/drawer',
        'frontend/globalTable',
        'frontend/horizontalChart',
        'frontend/iconText',
        'frontend/iconWithTitle',
        'frontend/imageModal',
        'frontend/input',
        'frontend/inputCampaings',
        'frontend/inputComponents',
        'frontend/inputLabel',
        'frontend/listAgents',
        'frontend/map',
        'frontend/mapDisplay',
        'frontend/markdown-features',
        'frontend/modalComponent',
        'frontend/radioButton',
        'frontend/select',
        'frontend/selectDashboard',
        'frontend/skeletonDashboard',
        'frontend/stackedBar',
        'frontend/subMenu',
        'frontend/switchController',
        'frontend/tableLine',
        'frontend/tabs',
        'frontend/timeCounter',
        'frontend/timePicker',
        'frontend/toolTip',
        'frontend/waiting',
        'frontend/waitingAgents',
        'frontend/warning',
        
      ],
    },
  ],
};

module.exports = sidebars;
