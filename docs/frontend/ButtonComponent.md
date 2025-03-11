---
id: buttoncomponent
title: 🎨 ButtonComponent.js
sidebar_label: ButtonComponent.js
---

## 🎨 ButtonComponent.js

Este componente `ButtonComponent` proporciona un botón con estilos personalizables y opciones como:

- 🎨 Color de fondo
- ✍️ Color del texto
- 🖱️ Capacidad de hacer clic
- 🚫 Posibilidad de deshabilitar el botón

Los estilos se pueden personalizar a través del objeto `buttonStyles`.

## 🛠️ Implementación del componente

```jsx
import React from "react";
import Button from "@mui/material/Button";
import buttonStyles from "./../../styles/Button/ButtonComponent";

function ButtonComponent({ label, onClick, backgroundColor, color, disabled }) {
  return (
    <Button
      sx={{
        ...buttonStyles.buttonStyle,
        backgroundColor: backgroundColor,
        color: color,
        "&:hover": {
          backgroundColor: backgroundColor,
        }
      }}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

export default ButtonComponent;
