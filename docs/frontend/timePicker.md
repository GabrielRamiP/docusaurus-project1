# 🕒 TimePicker.js

Este componente proporciona un selector de tiempo personalizado con estilos específicos y opciones de configuración para las horas y minutos.

```js
import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { styled } from '@mui/system';
import { Label } from '@material-ui/icons';

const StyledMobileTimePicker = styled(MobileTimePicker)({
  width: '6rem', 
  color:"gray"
});

const CustomTimePicker = ({ defaultValue, label }) => {
  const currentTime = dayjs().format('HH:mm');
  const defaultTime = defaultValue || currentTime;

return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <StyledMobileTimePicker
  defaultValue={defaultTime}
  label={label}
  ampmInClock
  views={['hours', 'minutes']}
  />
  </LocalizationProvider>
  );
};

export default CustomTimePicker;
```

## 📦 Imports

| **Librería**                   | **Descripción**                                     |
|--------------------------------|----------------------------------------------------|
| `React`                        | Librería para construir interfaces de usuario.     |
| `dayjs`                       | Librería para manipulación de fechas y horas.      |
| `AdapterDayjs`                | Adaptador para utilizar **dayjs** con **Material-UI**. |
| `LocalizationProvider`         | Proveedor de localización para los selectores de fecha y hora. |
| `MobileTimePicker`            | Componente de selector de tiempo móvil de **Material-UI**. |
| `styled`                      | Función para crear componentes estilizados.         |
| `Label`                       | Icono de etiqueta de **Material-UI** (aunque no se usa en el código). |

## 📊 Props

| **Propiedad**   | **Descripción**                                       |
|-----------------|------------------------------------------------------|
| **defaultValue**| Valor inicial del selector de tiempo.                |
| **label**       | Etiqueta que se muestra en el selector de tiempo.    |

## 🔧 Estilos Personalizados

- **StyledMobileTimePicker**: Componente de **MobileTimePicker** estilizado con un ancho de `6rem` y un color gris.

## 🕒 Funcionalidad

El componente utiliza dayjs para obtener la hora actual y establecerla como valor predeterminado si no se proporciona otro. Se incluye un LocalizationProvider para manejar la localización del selector de tiempo.