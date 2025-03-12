# ⚠️ Warning.js

Este componente acepta una propiedad `title` que se utiliza como el contenido del tooltip para el ícono de advertencia (`WarningOutlined`). También incluye un ícono de visibilidad (`VisibilityOutlined`). El contenido del tooltip se muestra cuando el usuario coloca el cursor sobre el ícono de advertencia.

```js
import React from "react";
import { VisibilityOutlined, WarningOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Tooltip } from "@mui/material";

const WarningComponent = ({title})=> {
  return (
  <Stack>
  <Stack direction="row">
  <Tooltip title={title} arrow placement="top">
  <Stack sx={{ margin: "5px", marginRight: "1px" }}>
  <WarningOutlined fontSize="medium" style={{ color: "#ffc340" }} />
  </Stack>
  </Tooltip>
  <Stack sx={{ margin: "5px", marginRight: "2rem" }}>
  <VisibilityOutlined fontSize="medium" style={{ color: "#ffc340" }} />
  </Stack>
  </Stack>
  </Stack>
  );
}
export default WarningComponent;
```

## 📦 Imports

| **Librería**                      | **Descripción**                                      |
|-----------------------------------|------------------------------------------------------|
| `React`                           | Biblioteca principal de React.                       |
| `VisibilityOutlined`, `WarningOutlined` | Íconos de Material-UI para advertencia y visibilidad. |
| `Stack`                           | Componente de Material-UI para disposición de elementos en una pila. |
| `Tooltip`                         | Componente de Material-UI para mostrar tooltips.    |

## 🔍 Componente WarningComponent

### Desglose del Componente

**Propiedad**:

- title: Se utiliza como contenido del tooltip.
- Contenedor Principal (Stack): Se utiliza Stack para organizar los elementos en un contenedor flexible.
- Contenedor Interno (Stack): direction="row": Organiza los elementos hijos en una fila horizontal.
- Tooltip: Muestra un tooltip con el texto definido en la prop title.
- arrow: Muestra una flecha en el tooltip que apunta hacia el ícono.
- placement="top": Posiciona el tooltip arriba del ícono.
### Ícono de Advertencia:
- WarningOutlined: Ícono de advertencia que muestra el tooltip cuando el cursor está sobre él.
- Estilo: Se aplica un color específico (#ffc340) al ícono.
### Ícono de Visibilidad:
- VisibilityOutlined: Ícono de visibilidad que se muestra al lado del ícono de advertencia.
- Estilo: Se aplica el mismo color (#ffc340) al ícono.