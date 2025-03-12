# 📝 InputCampaings.js

Este componente proporciona un campo de entrada personalizado con una etiqueta flotante que se ajusta dinámicamente según el enfoque y el contenido del campo.

```js
import React, { useState } from "react";

const InputCampaings = ({ label, value, onChange, width, height, color, colorSelect }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
    setIsFocused(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
    <div
    style={{
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    color: color,
    }}
    >
    <label
    style={{
    position: "absolute",
    top: isFocused || value ? "5px" : "65%",
    left: "8px",
    transform: isFocused || value ? "translateY(0)" : "translateY(-50%)",
    transition: "all 0.3s ease",
    color: isFocused ? colorSelect : color,
    pointerEvents: "none",
    background: "white", 
    padding: "0 4px", 
    }}
    >
    {label}
    </label>
    </div>
    <div>
    <input
    type="text"
    value={value}
    onChange={onChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    style={{
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    width: width || "100%",
    height: height || "2rem",
    padding: "8px",
    backgroundColor: "transparent", 
    color: "gray",
    borderColor: "none", 
    outline:"none",
    marginTop:"1rem"
    }}
    />
    </div>
    </div>
  );
};

export default InputCampaings;
```

## 📦 Imports

| Librería                  | Descripción                                           |
|---------------------------|-------------------------------------------------------|
| **React**                 | Biblioteca principal para crear componentes.          |
| **useState**              | Hook de React para manejar el estado.                 |

## 🚀 Definición del Componente InputCampaings

| Propiedad      | Tipo      | Descripción                                                                 |
|----------------|-----------|-----------------------------------------------------------------------------|
| **label**      | string    | Etiqueta que se mostrará en el campo de entrada.                          |
| **value**      | string    | Valor actual del campo de entrada.                                        |
| **onChange**   | function  | Función que se llama al cambiar el valor del campo de entrada.            |
| **width**      | string    | Ancho del campo de entrada (opcional).                                    |
| **height**     | string    | Altura del campo de entrada (opcional).                                   |
| **color**      | string    | Color del texto de la etiqueta.                                           |
| **colorSelect**| string    | Color de la etiqueta cuando el campo está enfocado.                       |

### Estructura del JSX

| Elemento          | Descripción                                                                                          |
|-------------------|------------------------------------------------------------------------------------------------------|
| **div**           | Contenedor principal que tiene `position: "relative"` para el manejo del enfoque de la etiqueta.    |
| **label**         | Etiqueta que se desplaza y cambia de color según el enfoque del campo de entrada.                   |
| **input**         | Campo de entrada de texto que maneja el estado del valor y las funciones de enfoque y desenfoque.   |

## 📚 Funciones Internas

### handleFocus

Esta función se llama cuando el campo de entrada recibe el enfoque y establece isFocused en true.

### handleBlur

Esta función se llama cuando el campo de entrada pierde el enfoque. Si el campo está vacío, establece isFocused en false.