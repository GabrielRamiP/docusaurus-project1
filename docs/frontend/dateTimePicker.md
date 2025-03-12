# ⏰ DateTimePicker.js

El componente CustomDateTimePicker integra un selector de fecha y hora de MUI X en tu aplicación React. Permite personalizar la fecha y hora inicial, así como definir si el selector representa una fecha de inicio o de fin.

## 🎯 Características:

- 📅 **Selector de Fecha y Hora**: Basado en el MobileDateTimePicker de MUI X.
- ⚙️ **Personalización**: Posibilidad de configurar etiquetas para representar la fecha de inicio o fin.
- 🛠️ **Predeterminados**: Usa la fecha actual como valor predeterminado si no se proporciona uno.

```js
import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const CustomDateTimePicker = ({ defaultValue, isStartDate }) => {
  
  const today = dayjs();

  
  const defaultDate = defaultValue || today;


  const label = isStartDate ? 'Fecha de Inicio' : 'Fecha Fin';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MobileDateTimePicker
    label={label}
       
    />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
```

## 🧩 Props del componente

| Prop           | Tipo        | Descripción                                                                           |
|----------------|-------------|---------------------------------------------------------------------------------------|
| `defaultValue` | `Date`      | 📅 La fecha y hora predeterminadas que se mostrarán en el selector (opcional).        |
| `isStartDate`  | `boolean`   | 🔄 Define si el selector es para "Fecha de Inicio" (true) o "Fecha Fin" (false).       |


## 📋 Descripción del componente

- LocalizationProvider: Proporciona el contexto de localización necesario para el funcionamiento del selector de fecha y hora.
- MobileDateTimePicker: Selector de fecha y hora para dispositivos móviles, aunque también es usable en pantallas grandes.
- label: Define si la etiqueta será "Fecha de Inicio" o "Fecha Fin" dependiendo del valor de isStartDate.
- value: Establece la fecha y hora inicial, que puede ser el valor proporcionado o la fecha actual.
- onChange: Una función que maneja los cambios de fecha y hora, en este caso imprimiendo el valor en la consola.


## ⚙️ Uso de dayjs y MUI X

- **dayjs**: Utilizado para manejar y formatear fechas en el componente. Proporciona un valor predeterminado, today, que representa la fecha y hora actual.
- **MobileDateTimePicker**: Proporciona un selector fácil de usar para dispositivos móviles, permitiendo la selección tanto de fechas como de horas.

## 📋 Ejemplo de uso

```js
<CustomDateTimePicker
  defaultValue={new Date('2023-10-01T10:00')}
  isStartDate={true}  // 🏷️ Muestra "Fecha de Inicio"
  onChange={(newValue) => console.log('Nueva fecha:', newValue)}
/>
```

**defaultValue**: Establece la fecha predeterminada a "1 de octubre de 2023, 10:00 AM".
**isStartDate**: Define la etiqueta como "Fecha de Inicio" al establecerlo en true.
**onChange**: Captura y muestra en la consola la nueva fecha y hora seleccionada.