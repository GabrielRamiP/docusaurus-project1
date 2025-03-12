# 📊 ChartBar.js

Este componente CharBarComponent utiliza react-chartjs-2 para renderizar un gráfico de barras con opciones de configuración. Puedes personalizar las opciones y agregar lógica adicional en el bloque useEffect.

## ✨ Características:

- 📈 Visualización dinámica de datos en un gráfico de barras.
- ⚙️ Configuración flexible a través de las opciones de Chart.js.
- 🎨 Personalizable para el título del gráfico y los datos de entrada.

```js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CharBarComponent(props) {
  const { dataBarChar = {}, titleBarChar = "" } = props;
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

  }, [dataBarChar]);

  return (
  <>
  {dataBarChar.datasets ? (
  <Bar options={options} data={dataBarChar} />
  ) : (
  <></>
  )}
  </>
  );
}

export default CharBarComponent;
```

---
## 🧩 Props del componente

| Prop           | Tipo     | Descripción                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| `dataBarChar`  | `object` | 📊 Datos del gráfico, sigue el formato de Chart.js con datasets y etiquetas. |
| `titleBarChar` | `string` | 📝 El título que se mostrará en la parte superior del gráfico.                |



---

## ⚙️ Opciones del gráfico

| Opción                    | Valor predeterminado | Descripción                                                                                      |
|---------------------------|----------------------|--------------------------------------------------------------------------------------------------|
| `responsive`              | `true`               | 📐 El gráfico se ajusta automáticamente al tamaño del contenedor.                                 |
| `plugins.legend.position` | `"top"`              | 🔍 Posición de la leyenda, puede ser `"top"`, `"left"`, `"right"` o `"bottom"`.                   |
| `plugins.title.display`   | `true`               | 🎨 Muestra el título del gráfico si está en `true`.                                               |
| `plugins.title.text`      | `titleBarChar`       | 📝 Texto que aparece como título del gráfico, que puede ser personalizado.             