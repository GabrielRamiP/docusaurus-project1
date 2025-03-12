# 📅 DatePickerComponent.js

El componente DatePickerComponent integra el selector de fecha de MUI X en tu aplicación React, permitiendo la selección de fechas con personalización en cuanto a etiquetas, valores iniciales, y límites de fechas mínimas y máximas.

## 🎯 Características:

- 📅 **Selector de Fecha**: Utiliza el DatePicker de MUI X.
- ⚙️ **Personalización**: Personaliza la etiqueta, el valor seleccionado y los límites de fechas.
- 🛠️ **Facilidad de uso**: Propiedades configurables para el manejo de fechas.

```js
import { InputLabel, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const DatePickerComponent = (props) => {
  const {
    titleLabel = '',
    value = null,
    setValue = () => { },
    minDate = null,
    maxDate = new Date()
  } = props;

  return (
    <Stack>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
    label={titleLabel}
    value={value}
    onChange={(newValue) => setValue(newValue)}
    maxDate={maxDate}
    minDate={minDate}
    />
    </LocalizationProvider>
    </Stack>
  );
}

export default DatePickerComponent;
```

## 🧩 Props del componente

| Prop          | Tipo       | Descripción                                                                 |
|---------------|------------|-----------------------------------------------------------------------------|
| `titleLabel`  | `string`   | 🏷️ Texto que aparecerá como etiqueta en el DatePicker.                       |
| `value`       | `Date`     | 📅 Valor de fecha inicial seleccionado (opcional).                            |
| `setValue`    | `function` | 🔄 Función que se ejecuta cuando el valor cambia, recibe la nueva fecha.      |
| `minDate`     | `Date`     | 🗓️ Fecha mínima que se puede seleccionar (opcional).                         |
| `maxDate`     | `Date`     | 📅 Fecha máxima permitida, por defecto es la fecha actual (`new Date()`).     |


## ⚙️ Uso de Material-UI y MUI X

- DatePicker: El componente principal que permite seleccionar una fecha.
- LocalizationProvider: Proporciona la localización necesaria para el DatePicker, utilizando el adaptador AdapterDateFns para la gestión de fechas.
- Stack: Un contenedor de MUI que permite apilar elementos vertical u horizontalmente con espaciado.

### 📋 Ejemplo de uso

```js
<DatePickerComponent
  titleLabel="Seleccionar fecha"
  value={selectedDate}
  setValue={setSelectedDate}
  minDate={new Date('2023-01-01')}
  maxDate={new Date('2023-12-31')}
/>
```

- **titleLabel**: "Seleccionar fecha" muestra una etiqueta clara para el usuario.
- **value**: selectedDate es la variable de estado que almacena la fecha seleccionada.
- **setValue**: setSelectedDate actualiza la fecha cuando el usuario selecciona una nueva.
- **minDate**: Limita la fecha mínima seleccionable a enero de 2023.
- **maxDate**: Limita la fecha máxima seleccionable a diciembre de 2023.