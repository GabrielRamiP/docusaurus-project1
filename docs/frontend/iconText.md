# 📌 IconText.js

Este componente **`IconText`** combina un icono y un texto en un formato visualmente agradable utilizando un contenedor div flexible y el componente **Typography** de Material-UI.

```js
import React from 'react';
import Typography from '@mui/material/Typography';

function IconText({ iconName, text,numb }) {
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ marginTop: '1px', marginRight: '5px' }}>{iconName}</div>
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>{text}</Typography>
    </div>
  );
}

export default IconText;
```

## 📦 Imports

| Librería                  | Descripción                                           |
|---------------------------|-------------------------------------------------------|
| **React**                | Se importa la biblioteca React para utilizar componentes. |
| **Typography**           | Componente de Material-UI para manejar texto con estilos. |


## 🚀 Descripción del Componente

El componente IconText utiliza un contenedor div flexible para alinear un icono y un texto de manera horizontal. Este diseño permite una presentación limpia y organizada.

### Propiedades

| Propiedad     | Tipo    | Descripción                                |
|---------------|---------|--------------------------------------------|
| **iconName**  | ReactNode | Representa el icono que se va a mostrar. |
| **text**      | string  | El texto que se mostrará junto al icono.  |
| **numb**      | number  | (No utilizado actualmente en el componente). |