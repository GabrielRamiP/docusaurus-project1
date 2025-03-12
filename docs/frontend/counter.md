# ⏱️ Counter.js

Este componente Counter proporciona un temporizador que cuenta el tiempo en horas, minutos y segundos, actualizándose cada segundo. El color del texto se puede personalizar mediante la propiedad color.

## 🎯 Características:

- ⏲️ Temporizador que muestra horas, minutos y segundos.
- 🔄 Actualización automática cada segundo.
- 🎨 Color personalizable para el texto del contador.

---

```js
import React, { useEffect, useState } from "react";

const Counter = ({ color }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <span style={{ color }}>
    {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
    </span>
  );
};

export default Counter;
```

## 🧩 Props del componente

| Prop   | Tipo     | Descripción                                   |
|--------|----------|-----------------------------------------------|
| `color`| `string` | 🎨 Color del texto del temporizador.           |

---


## ⚙️ Funciones

| Función         | Descripción                                                                               |
|-----------------|-------------------------------------------------------------------------------------------|
| `useEffect`     | 🔄 Inicia el temporizador y lo actualiza cada segundo.                                      |
| `setTotalSeconds`| ⏲️ Actualiza el estado del total de segundos transcurridos.                                |
| `formatTime`    | 📝 Formatea el tiempo para que siempre se muestren 2 dígitos para horas, minutos y segundos.|