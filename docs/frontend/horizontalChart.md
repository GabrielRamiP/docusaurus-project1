# 📊 HorizontalChart.js


El componente **`HorizontalChart`** muestra un gráfico de barras horizontal utilizando **react-chartjs-2** y **chart.js**. El gráfico es responsivo y tiene una leyenda a la derecha, así como un título **"Motivo de llamada"**. Los datos del gráfico representan diferentes motivos de llamada (**Aclaraciones**, **Pagos**, **Facturación**, **Promociones**, **Especiales**) con colores específicos para cada conjunto de datos. Los datos se generan de forma aleatoria utilizando **faker**.


```js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Motivo de llamada',
    },
  },
};

const labels = ['Aclaraciones', 'Pagos', 'Facturación', 'Promociones', 'Especiales'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Aclaraciones',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Pagos',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Facturación',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Promociones',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function HorizoltalChart() {
  return <Bar style={{ width: '100%', margin: 'auto' }} options={options} data={data} />;
}
```

## 📦 Imports 

| Librería                         | Descripción                                     |
|----------------------------------|-------------------------------------------------|
| **React**                        | Se importa la biblioteca React para usar componentes |
| **chart.js**                    | Biblioteca principal para gráficos.             |
| **CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend** | Elementos y escalas necesarios para construir un gráfico de barras. |
| **react-chartjs-2**             | Componente para renderizar gráficos usando chart.js. |
| **faker**                       | Biblioteca para generar datos de prueba. Se usa para generar números aleatorios. |

## ⚙️ Registro de elementos en chart.js

Esto registra los elementos necesarios (CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend) con chart.js.

## 📊 Configuración de opciones del gráfico

| Opción         | Descripción                                      |
|----------------|--------------------------------------------------|
| **indexAxis**  | Establece el eje de las categorías como horizontal ('y'). |
| **elements**   | Configura los elementos de las barras.           |
| **borderWidth**| Ancho del borde de las barras (2).               |
| **responsive** | Hace que el gráfico sea responsivo.              |
| **plugins**    | Configura los plugins de chart.js.               |
| **legend**     | Posiciona la leyenda a la derecha.               |
| **title**      | Muestra el título del gráfico con el texto "Motivo de llamada". |

### plugins:

**legend**: Posiciona la leyenda en la derecha.
**title**: Muestra el título del gráfico con el texto "Motivo de llamada".

## 📈 Configuración de los datos del gráfico

| Propiedad      | Descripción                                      |
|----------------|--------------------------------------------------|
| **labels**     | Etiquetas para cada barra del gráfico.          |
| **datasets**   | Conjunto de datos para el gráfico.               |
| **label**      | Etiqueta para el conjunto de datos (por ejemplo, 'Aclaraciones'). |
| **data**       | Datos para cada etiqueta, generados usando faker para producir números aleatorios entre 0 y 1000. |
| **borderColor**| Color del borde de las barras.                   |
| **backgroundColor**| Color de fondo de las barras con opacidad de 0.5. |

## 🚀 Definición del componente HorizontalChart

### Bar:

- style=width: '100%', margin: 'auto': Aplica estilos CSS en línea para ajustar el ancho al 100% y centrar el gráfico horizontalmente.
- options=options: Pasa las opciones configuradas (options) al gráfico.
- data=data: Pasa los datos configurados (data) al gráfico.