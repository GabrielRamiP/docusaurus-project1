# 💡 ToolTip.js

Este archivo de estilo define un diseño básico para el tooltip. Cuando el usuario coloca el cursor sobre el elemento con la clase `tooltip-container`, se mostrará el texto del tooltip con un efecto de desvanecimiento (opacity) y algunos estilos básicos.

```js
import { WarningOutlined } from "@mui/icons-material";
import "../../styles/Tooltip/Tooltip.css";

function Tooltip({ children }) {
  return (
    <div className="tooltip-container">
    <span className="tooltip-text">{children}</span>
    <WarningOutlined fontSize="medium" style={{ color: "#ffc340" }} />
    </div>
  );
      
}

export default Tooltip;
```

## 📦 Imports

| **Librería**                      | **Descripción**                                      |
|-----------------------------------|------------------------------------------------------|
| `WarningOutlined`                 | Icono de advertencia de Material UI.                |
| `../../styles/Tooltip/Tooltip.css`| Archivo de estilos CSS para el tooltip.             |

## 🎨 Estilos

El tooltip se define en un archivo CSS externo que se importa al componente. Cuando el usuario pasa el cursor sobre el contenedor de la tooltip, el texto se mostrará con un efecto de desvanecimiento.