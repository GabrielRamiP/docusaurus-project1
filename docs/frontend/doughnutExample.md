# 🍩 DoughnutExample.js

El componente **`DoughnutExample`** muestra un gráfico de dona utilizando **`react-chartjs-2`** y **`chart.js`**. El gráfico es **responsivo** y tiene una leyenda en la parte superior, así como un título "Canales". Los datos del gráfico representan votos para diferentes canales (Web, Email, ChatBot, Call - Center) con colores específicos para cada porción.

```js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
      legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Canales",
    },
  },
};
export const data = {
  labels: ['Web', 'Email', 'ChatBot', 'Call - Center'],
  
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutExample() {
  return <Doughnut style={{ width: '100%', margin: 'auto' }} options={options} data={data} />;
}
```

## 📦 Imports

| Librería           | Descripción                                          |
|--------------------|------------------------------------------------------|
| **React**          | Se importa la biblioteca React para usar componentes |
| **ChartJS**        | Clase principal de `chart.js`                        |
| **ArcElement**     | Elemento para gráficos de dona en `chart.js`         |
| **Tooltip**        | Para mostrar tooltips sobre las porciones del gráfico|
| **Legend**         | Para mostrar leyendas en el gráfico                  |
| **Doughnut**       | Componente de `react-chartjs-2` para gráficos de dona|

## ⚙️ Configuración del gráfico

| Propiedad             | Descripción                                                  |
|-----------------------|--------------------------------------------------------------|
| **`responsive`**      | ✔️ Hace que el gráfico sea ajustable en tamaño.              |
| **`legend`**         | 📍 Posiciona la leyenda en la parte superior del gráfico.   |
| **`title`**          | 🏷️ Muestra el título del gráfico con el texto **"Canales"**. |

## 🗂️ Configuración de los datos

| Propiedad             | Descripción                                                  |
|-----------------------|--------------------------------------------------------------|
| **`labels`**          | Etiquetas para las porciones del gráfico ['Web', 'Email', 'ChatBot', 'Call - Center'] |
| **`datasets`**        | Conjunto de datos para el gráfico.                            |
| **`label`**           | Etiqueta para el conjunto de datos: **# of Votes**            |
| **`data`**            | Valores numéricos para cada canal: `[12, 19, 3, 5, 2]`       |
| **`backgroundColor`** | Colores de fondo de las porciones con opacidad 0.2            |
| **`borderColor`**     | Colores del borde de las porciones con opacidad 1             |
| **`borderWidth`**     | Ancho del borde de cada porción: `1`                          |


## 🎨 Definición del componente DoughnutExample

- style= width: '100%', margin: 'auto': Aplica estilo en línea para ajustar el ancho al 100% y centrar el gráfico.
- options=options: Pasa las opciones configuradas (responsive, título, leyenda).
- data=data: Pasa los datos para el gráfico (etiquetas, valores, colores).


### 🚀 Exportación del componente

El componente DoughnutExample se exporta para ser utilizado en otros archivos del proyecto.