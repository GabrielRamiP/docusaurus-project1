# 🔄 Downloader.js

Este componente **`CircularProgressBar`** muestra un indicador de progreso circular. Puedes ajustar el tamaño cambiando el valor de la propiedad **`size`** según tus necesidades. Este componente es útil para indicar visualmente que se está realizando una operación en segundo plano o que se está cargando algún contenido.

```js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressBar = () => {
  return (
  <div>
  <CircularProgress size={100} />
  </div>
  );
};

export default CircularProgressBar;
```

## 📦 Imports

| Librería                       | Descripción                                      |
|--------------------------------|--------------------------------------------------|
| **React**                      | Se importa la biblioteca React para usar componentes |
| **CircularProgress**           | Componente de Material-UI para mostrar un indicador de progreso circular |


## ⚙️ Configuración del componente

| Propiedad             | Descripción                                      |
|-----------------------|--------------------------------------------------|
| **`size`**           | 🎚️ Propiedad que determina el tamaño del indicador de progreso. Puedes ajustarlo según sea necesario. |


## ⚙️ Configuración del componente

- size: 🎚️ Propiedad que determina el tamaño del indicador de progreso. Puedes ajustarlo según sea necesario.


## 🚀 Definición del componente CircularProgressBar

-  CircularProgress size=100: Renderiza el componente CircularProgress con un tamaño de 100 unidades.


## 🎨 Estilos y visualización

Este componente proporciona un indicador visual que es útil para mejorar la experiencia del usuario al cargar contenido o realizar operaciones en segundo plano.