# ⏳ SkeletonDashboard.js

El componente **SkeletonDashboard** utiliza **ContentLoader** de `react-content-loader` para mostrar un esqueleto de carga animado. Este componente es útil cuando se desea mostrar una representación visual del contenido que se está cargando, mejorando la experiencia del usuario al dar una indicación de la estructura del contenido que aparecerá.

El esqueleto en este caso consta de un círculo (que puede representar un avatar o ícono) y un rectángulo (que puede representar una línea de texto o un título). La animación tiene una velocidad de **2 segundos** y utiliza colores de fondo y primer plano para simular la carga.

```js
import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonDashboard = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={180}
    viewBox="0 0 300 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="25" cy="25" r="25" />
    <rect x="70" y="10" rx="4" ry="4" width="200" height="12" />
  </ContentLoader>
);

export default SkeletonDashboard;
```

## 📚 Imports

- React: Se importa la biblioteca React para usar la funcionalidad de componentes.
- ContentLoader: Se importa el componente ContentLoader de la biblioteca react-content-loader, que se utiliza para crear animaciones de carga esqueleto.


## ⚙️ Props de ContentLoader

| Propiedad          | Descripción                                               |
|--------------------|-----------------------------------------------------------|
| `speed`            | Define la velocidad de la animación en segundos. En este caso, es **2** segundos. |
| `width`            | Define el ancho total del área del contenido cargador. Aquí es **300** píxeles.  |
| `height`           | Define la altura total del área del contenido cargador. Aquí es **180** píxeles.  |
| `viewBox`          | Define el sistema de coordenadas para el contenido cargador. Aquí es **"0 0 300 180"**. |
| `backgroundColor`  | Define el color de fondo del cargador mientras se anima. Aquí es **"#f3f3f3"**.  |
| `foregroundColor`  | Define el color en primer plano del cargador mientras se anima. Aquí es **"#ecebeb"**.  |


## 🔍 Elementos dentro de ContentLoader

**circle cx=25 cy=25 r=25**: Dibuja un círculo con el centro en (25, 25) y un radio de 25.

**rect x=70 y=10 rx=4 ry=4 width=200 height=12**: Dibuja un rectángulo con la esquina superior izquierda en (70, 10), con un radio de esquina de 4, un ancho de 200, y una altura de 12.