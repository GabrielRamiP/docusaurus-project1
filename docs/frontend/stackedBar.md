# 📊 StackedBar.js

El componente **StackedBar** crea una gráfica de barras apiladas utilizando `react-chartjs-2` y `chart.js`. Los datos de la gráfica se generan aleatoriamente usando **faker**. Además, el componente se actualiza dinámicamente al cambiar el tamaño de la ventana gracias al uso de `useState` y `useEffect` de React. El componente muestra tres categorías (**Facturación, Pagos, Corte**) con datos apilados en el eje Y, lo que permite comparar visualmente los resultados semanales.

```js
import React, { useState, useEffect } from 'react';
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
  plugins: {
    title: {
      display: true,
      text: 'Resultados semanales',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Facturación', 'Pagos', 'Corte'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Facturación',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Pagos',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Corte',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export function StackedBar() {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setChartKey(prevKey => prevKey + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Bar key={chartKey} style={{ width: '100%', margin: 'auto' }} options={options} data={data} />;
}

```
---

## 📚 Importaciones

| Módulo                     | Descripción                                                                             |
|----------------------------|-----------------------------------------------------------------------------------------|
| `React`, `useState`, `useEffect` | Se importan para crear componentes de React y manejar el estado y los efectos secundarios. |
| `chart.js`                 | Se importan módulos específicos para configurar y registrar los componentes de la gráfica. |
| `react-chartjs-2`          | Se importa el componente **Bar** para renderizar una gráfica de barras.                 |
| `faker`                    | Se importa para generar datos aleatorios.                                               |

## 🔧 Registro de Componentes de ChartJS

Se registran los componentes necesarios de chart.js para crear una gráfica de barras.

## ⚙️ Opciones de Configuración de la Gráfica

| Opción              | Descripción                                                         |
|---------------------|---------------------------------------------------------------------|
| `plugins.title`     | Configura el título de la gráfica.                                   |
| `responsive`        | Hace que la gráfica sea responsiva.                                  |
| `scales`            | Configura las escalas X e Y para que las barras se apilen (stacked: true). |

## 📊 Datos de la Gráfica

| Elemento  | Descripción                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------|
| `labels`  | Etiquetas para el eje X.                                                                          |
| `datasets`| Conjunto de datos que contiene la información para cada barra de la gráfica, incluyendo los datos generados aleatoriamente y los colores de fondo de las barras. |

