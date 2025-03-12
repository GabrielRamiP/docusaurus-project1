# 📝 InputComponent.js

Este componente `InputComponent` es una envoltura del componente `TextField` de Material-UI con funcionalidad adicional de validación de entrada.

```js
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function InputComponent(props) {
  const { label, value, onChange,width, fullWidth, errorText ,validate, backgroundColor } = props;
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (validate) {
      const error = validate(value);
      setValidationError(error || "");
    }
  }, [value, validate]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValidationError("");

    if (onChange) {
      onChange(inputValue);
    }
  };


  return (
    <div>
    <TextField
    label={label}
    value={value}
    onChange={handleInputChange}
    fullWidth={fullWidth}
    sx={{ width:width, backgroundColor: backgroundColor}} 
    variant="outlined"
    error={!!validationError || !!errorText}
    />
    </div>
  );
}

export default InputComponent;
```

## 📦 Imports

| Librería                         | Descripción                                          |
|----------------------------------|------------------------------------------------------|
| **useState**                     | Hook de React para manejar el estado.               |
| **useEffect**                    | Hook de React para manejar efectos secundarios.      |
| **TextField**                    | Componente de Material-UI para campos de texto.     |

## 🚀 Definición del Componente InputComponent

| Propiedad         | Tipo      | Descripción                                                       |
|-------------------|-----------|-------------------------------------------------------------------|
| **label**         | string    | Etiqueta que se mostrará en el campo de entrada.                |
| **value**         | string    | Valor actual del campo de entrada.                               |
| **onChange**      | function  | Función que se llama al cambiar el valor del campo de entrada.   |
| **width**         | string    | Ancho del campo de entrada (opcional).                           |
| **fullWidth**     | boolean   | Si es `true`, el campo de entrada ocupará todo el ancho disponible. |
| **errorText**     | string    | Mensaje de error para mostrar (opcional).                        |
| **validate**      | function  | Función que se utiliza para validar el valor del campo.         |
| **backgroundColor**| string   | Color de fondo del campo de entrada.                             |

### Estructura del JSX

| Elemento          | Descripción                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------|
| **div**           | Contenedor principal del campo de entrada.                                                     |
| **TextField**     | Campo de texto de Material-UI que muestra la etiqueta, el valor, y maneja los eventos de cambio. |

## 📚 Funciones Internas

### handleInputChange

Esta función se llama cuando el valor del campo de entrada cambia. Se encarga de actualizar el estado y restablecer el error de validación.

### useEffect

Este hook se utiliza para validar el valor del campo cada vez que cambia. Si se pasa una función de validación, establece el error de validación basado en el resultado de la función.