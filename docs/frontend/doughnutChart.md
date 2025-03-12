# 🍩 DoughnutChart.js

El componente DoughnutChart visualiza un gráfico de dona utilizando las bibliotecas react-chartjs-2 y chart.js. Es un gráfico responsive que se adapta automáticamente al tamaño de la ventana, actualizando el estado chartKey para forzar su re-renderización cuando la ventana cambia de tamaño. Tanto los datos del gráfico como su título son configurables a través de las props data y titleBarChar.

## 🎯 Características:

- 🍩 Gráfico de dona: Visualiza los datos en un gráfico de dona.
- 📊 Datos configurables: Los datos y las opciones del gráfico son totalmente configurables.
- 🔄 Responsive: Se ajusta automáticamente cuando se redimensiona la ventana.
- 📝 Título personalizable: Puedes especificar un título para el gráfico.


```js
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ data = {}, titleBarChar = "" }) {
  const [chartKey, setChartKey] = useState(0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleBarChar,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setChartKey(prevKey => prevKey - 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {data && data.datasets ? (<Doughnut key={chartKey} style={{ width: '100%', height: '190px', margin: 'auto' }} options={options} data={data} />) : (<></>)}
    </>
  );
}

export default DoughnutChart;
```

## Imports

### React Hooks:

**useEffect**: Hook de React que permite realizar efectos secundarios en componentes funcionales.
**useState**: Hook de React que permite manejar el estado en componentes funcionales.

### react-chartjs-2:

**Doughnut**: Componente para renderizar un gráfico de dona (doughnut) usando chart.js.

### chart.js:

**ChartJS**: La clase principal de chart.js.
**ArcElement, Tooltip, Legend**: Elementos de chart.js que se utilizan para gráficos de dona, mostrar tooltips y leyendas respectivamente.
**ChartJS.register(...)**: Registra los elementos necesarios (ArcElement, Tooltip, Legend) con chart.js.

## Definición del componente DoughnutChart

### Props:

**data**: Los datos para el gráfico de dona, con un valor por defecto de un objeto vacío.
**titleBarChar**: El título del gráfico, con un valor por defecto de una cadena vacía.

### Estado (useState):

**chartKey**: Un estado para forzar la re-renderización del gráfico. Inicializado en 0.
**setChartKey**: Función para actualizar chartKey.

### Opciones del gráfico (options):

**responsive**: Hace que el gráfico sea responsivo.
**plugins**: Configura los plugins de chart.js.
**legend**: Posiciona la leyenda en la parte superior.
**title**: Muestra el título del gráfico usando el valor de titleBarChar.

## Efecto para el redimensionamiento de la ventana

**useEffect**: Configura un efecto que se ejecuta al montar el componente y se limpia al desmontar.
**handleResize**: Función que se ejecuta al redimensionar la ventana, actualizando chartKey para forzar un re-render del gráfico.
**window.addEventListener('resize', handleResize)**: Añade un listener para el evento de redimensionamiento de la ventana.
**return () window.removeEventListener('resize', handleResize)**: Limpia el listener de redimensionamiento cuando el componente se desmonta.

## Renderización del componente

### Condición para renderizar el gráfico

Si data tiene datasets (data && data.datasets), renderiza el gráfico de dona (Doughnut).
Si data no tiene datasets, no renderiza nada.

### Doughnut:

**key=chartKey**: Usa chartKey como clave para forzar la re-renderización cuando chartKey cambia.
**style**: Aplica estilos CSS en línea para ajustar el tamaño y el margen del gráfico.
**options**: Pasa las opciones configuradas (options) al gráfico.
**data**: Pasa los datos (data) al gráfico.

## 🧩 Props del componente

| Prop          | Tipo     | Descripción                                                               |
|---------------|----------|---------------------------------------------------------------------------|
| `data`        | `object` | 📊 Datos para el gráfico de dona (por defecto es un objeto vacío).         |
| `titleBarChar`| `string` | 📝 Título del gráfico que se muestra en la parte superior (por defecto vacío). |


## 📋 Descripción del componente

- DoughnutChart: El componente principal que renderiza el gráfico de dona utilizando las props data y titleBarChar.
- data: Objeto que contiene los datos para el gráfico de dona. Debe incluir datasets para que el gráfico se renderice.
- titleBarChar: El título que aparecerá en la parte superior del gráfico.
- chartKey: Estado que se utiliza como clave para forzar la re-renderización del gráfico cuando la ventana cambia de tamaño.
- options: Configuración del gráfico, incluyendo la leyenda, título, y si debe ser responsive.

## ⚙️ Funciones clave

- useEffect: Establece un efecto secundario que escucha los cambios en el tamaño de la ventana, forzando la re-renderización del gráfico al cambiar de tamaño.
- setChartKey(prevKey => prevKey - 1): Actualiza la clave chartKey restando 1, lo que forza una re-renderización del gráfico cuando el tamaño de la ventana cambia.
- window.addEventListener('resize', handleResize): Añade un listener que detecta cuando la ventana se redimensiona.

## 🖼️ Gráfico de dona

El gráfico de dona utiliza los siguientes elementos de chart.js:

- **ArcElement**: El elemento gráfico en forma de arco que forma la dona.
- **Tooltip**: Muestra información sobre los elementos al pasar el cursor sobre ellos.
- **Legend**: Muestra una leyenda que describe los elementos del gráfico.