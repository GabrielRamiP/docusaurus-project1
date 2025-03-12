# 📅 DayCounter.js

El componente DayCounter permite al usuario ingresar y modificar el número de días mediante un campo de entrada de números con un ícono de calendario que facilita la adición de días rápidamente. El ancho del campo de entrada es personalizable a través de la propiedad width.

## 🎯 Características:

- 🔢 **Campo de Entrada Numérico**: Permite al usuario ingresar un número que representa los días.
- 📅 **Icono de Calendario**: Incluye un ícono de calendario para incrementar rápidamente el valor de los días.
- ⚙️ **Ancho Personalizable**: Se puede ajustar el ancho del campo de entrada a través de la propiedad width.


```js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DayCounter = ({width}) => {
  const [days, setDays] = useState(1);

  const handleIncrement = () => {
    setDays(prevDays => prevDays + 1);
  };

  return (
    <div>
      <TextField
      type="number"
      value={days}
      onChange={(e) => setDays(e.target.value)}
      label="Días"
      variant="outlined"
      style={{width: width}}
      InputProps={{
      endAdornment: (
      <div
      style={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer', 
      }}
      onClick={handleIncrement}
      >
      <CalendarMonthIcon style={{ color: '#818181' }} />
      </div>
      ),
      }}
      />
    </div>
  );
};

export default DayCounter;
```

## 🧩 Props del componente

| Prop     | Tipo     | Descripción                                                                 |
|----------|----------|-----------------------------------------------------------------------------|
| `width`  | `string` | 📏 Define el ancho del campo de entrada (por ejemplo, "200px", "100%").      |


## 📋 Descripción del componente

- TextField: Componente de Material-UI que se utiliza como un campo de entrada de texto, en este caso, configurado para números.
- type="number": Define el campo de entrada como numérico.
- value=days: El valor del campo es el número de días almacenado en el estado days.
- onChange=(e) => setDays(e.target.value): Actualiza el estado days al cambiar el valor del campo.
- label="Días": Etiqueta que indica el propósito del campo (número de días).
- InputProps: Se utiliza para agregar adornos personalizados al campo de texto.
- endAdornment: Adorno al final del campo de entrada, que contiene el ícono de calendario.
- CalendarMonthIcon: Ícono de calendario que, al hacer clic, incrementa el número de días en 1.

## ⚙️ Funciones clave

handleIncrement(): Incrementa el valor de days en uno cada vez que se hace clic en el ícono del calendario.