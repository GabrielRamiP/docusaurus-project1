# 🖱️ CustomTab.js

El componente CustomTab es una pestaña personalizable que cambia su estilo según si está seleccionada o no. Los estilos son configurables a través de props, permitiendo reutilizar el componente en diferentes contextos.

## 🎯 Características:

- 🔘 Pestaña seleccionable con estado visual dinámico.
- 🎨 Personalizable en cuanto a color de fondo y texto.
- 🖱️ Interactividad: Ejecuta una acción al hacer clic.

```js
import React from 'react';
import { Box } from '@mui/material';

const CustomTab = ({ label, selected, onClick, backgroundColor, color }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        backgroundColor: selected ? (backgroundColor || '#007BFF') : 'transparent',
        color: color || 'white',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        textTransform: 'none',
        transition: 'none',  
      }}
    >
      {label}
    </Box>
  );
};

export default CustomTab;
```

## Imports

React: Se importa la biblioteca React para usar la funcionalidad de componentes.
Box: Se importa el componente Box de @mui/material (Material-UI). Box es un componente contenedor versátil que se puede estilizar con las propiedades de estilo de Material-UI.

## Definición del componente CustomTab

Este es un componente funcional de React llamado CustomTab. Recibe los siguientes props:

label: El texto que se mostrará dentro de la pestaña.
selected: Un booleano que indica si esta pestaña está seleccionada.
onClick: Una función que se ejecutará cuando la pestaña sea clickeada.
backgroundColor: El color de fondo para la pestaña seleccionada (opcional).
color: El color del texto de la pestaña (opcional).

## Estructura del componente

### Componente Box:

**onClick=onClick**: Asigna la función onClick proporcionada como prop para que se ejecute cuando el Box sea clickeado.
**sx=...**: Usa el sistema de estilos de Material-UI (sx) para aplicar estilos CSS personalizados al Box.


## 🧩 Props del componente

| Prop            | Tipo       | Descripción                                                            |
|-----------------|------------|------------------------------------------------------------------------|
| `label`         | `string`   | 🏷️ El texto que se mostrará dentro de la pestaña.                       |
| `selected`      | `boolean`  | 🔘 Indica si la pestaña está seleccionada.                               |
| `onClick`       | `function` | 🖱️ Función que se ejecuta al hacer clic en la pestaña.                   |
| `backgroundColor`| `string`  | 🎨 Color de fondo cuando la pestaña está seleccionada (opcional).        |
| `color`         | `string`   | 📝 Color del texto de la pestaña (opcional).                             |


## ⚙️ Estilos aplicados

| Estilo                       | Descripción                                                                            |
|------------------------------|----------------------------------------------------------------------------------------|
| `padding: '10px 20px'`        | 📏 Añade padding (relleno) dentro del Box.                                              |
| `borderRadius: '10px'`        | 🔵 Redondea las esquinas del Box.                                                      |
| `cursor: 'pointer'`           | 🖱️ Cambia el cursor a una mano indicando que es clickeable.                             |
| `backgroundColor: selected ? ...` | 🎨 Establece el color de fondo dependiendo si la pestaña está seleccionada o no.     |
| `color: color || 'white'`     | 📝 Establece el color del texto. Usa el color proporcionado o blanco por defecto.       |
| `fontFamily: 'Raleway, sans-serif'`| 🔤 Aplica la fuente Raleway (o sans-serif como reserva).                          |
| `fontSize: '16px'`            | 🔠 Establece el tamaño de la fuente.                                                    |
| `textTransform: 'none'`       | 🚫 No aplica ninguna transformación de texto (como mayúsculas).                         |
| `transition: 'none'`          | 🚫 No aplica ninguna transición CSS.                                                    |