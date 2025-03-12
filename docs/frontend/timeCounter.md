# ⏰ TimeCounter.js

El componente **TimeCounter** es un componente de React que utiliza el componente **TextField** de **Material-UI** para permitir a los usuarios introducir o modificar una cantidad de tiempo en horas y minutos.

```js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TimeCounter = ({ width }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

  if (name === 'time') {
    const [newHours, newMinutes] = value.split(':');
    setHours(parseInt(newHours, 10) || 0);
    setMinutes(parseInt(newMinutes, 10) || 0);
  }
  };

  return (
    <div>
    <TextField
    type="text"
    inputProps={{ min: '0', style: { textAlign: 'left' } }}
    name="time"
    value={`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`}
    onChange={handleInputChange}
    label="Tiempo"
    variant="outlined"
    style={{ width: width }}
    InputProps={{
    endAdornment: (
    <div
    style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    }}
    >
    <AccessTimeIcon style={{ color: '#818181' }} />
    </div>
    ),
    }}
    />
    </div>
  );
};

export default TimeCounter;
```

## 📊 Props

| **Propiedad** | **Descripción**                                       |
|---------------|------------------------------------------------------|
| **width**     | Ancho del campo de entrada, que se puede personalizar al usar el componente. |


## 🔄 Manejo de Cambios

La función handleInputChange se utiliza para manejar los cambios en el campo de entrada y actualizar los estados de horas y minutos.

## 📋 Renderizado del Componente

- **TextField**: Componente que permite a los usuarios introducir el tiempo en formato `HH:MM`.
- **inputProps**: Propiedades personalizadas para el campo de entrada.
- **AccessTimeIcon**: Icono que se muestra al final del campo de entrada, mejorando la usabilidad.
- **padStart**: Se utiliza para asegurar que las horas y los minutos siempre tengan dos dígitos.