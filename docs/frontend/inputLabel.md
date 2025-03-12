# 📝 Inputlabel.js

Este componente `InputLabel` proporciona una etiqueta y un campo de entrada personalizado que puede ser un selector o un campo de texto. Puede manejar la validación y muestra mensajes de error según sea necesario.

```js
import React, { useState, useEffect } from "react";

const InputLabel = ({
  label,
  inputType,
  options,
  selectwidth,
  inputwidth,
  value = "",
  setValue = () => {},
  hdlOnFocus = () => {},
  hdlOnChange = () => {},
  validate = () => "",
}) => {
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const error = validate(value);
    setValidationError(error || "");
  }, [value, validate]);

  const getChangeSelevct = (e) => {
    const selectedValue = e.target.value;
    hdlOnChange(selectedValue);
    setValue(selectedValue);
  };

  const getNweValue = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setValidationError(validate(inputValue) || "");
  };

  return (
    <div>
    <label
    style={{
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#708198",
    }}
    >
    {label}
    </label>
    {inputType === "select" ? (
    <select
    value={value}
    style={{
    width: selectwidth,
    padding: "8px",
    backgroundColor: "#edeff2",
    border: "none",
    color: "gray",
    outline: "none",
    borderRadius: "7px",
    }}
    onChange={getChangeSelevct}
    >
    {options.map((option, index) => (
    <option key={index} value={option.value}>
    {option.label}
    </option>
    ))}
    </select>
    ) : (
    <div>
    <input
    type={inputType}
    autoComplete="off"
    value={value}
    onChange={getNweValue}
    style={{
    width: inputwidth,
    padding: "8px",
    backgroundColor: "#edeff2",
    border: "none",
    color: "gray",
    outline: "none",
    borderRadius: "7px",
    }}
    onFocus={hdlOnFocus}
    />
    {validationError && (
    <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
    {validationError}
    </div>
    )}
    </div>
    )}
    </div>
  );
};

export default InputLabel;
```

## 📦 Imports

| Librería                         | Descripción                                          |
|----------------------------------|------------------------------------------------------|
| **React**                        | Biblioteca principal de React para crear componentes.|
| **useState**                     | Hook de React para manejar el estado.               |
| **useEffect**                    | Hook de React para manejar efectos secundarios.      |

## 🚀 Definición del Componente InputLabel

| Propiedad        | Tipo      | Descripción                                                          |
|------------------|-----------|----------------------------------------------------------------------|
| **label**        | string    | Etiqueta que se mostrará junto al campo de entrada.                |
| **inputType**    | string    | Tipo de entrada (ej. "text", "select").                            |
| **options**      | array     | Opciones para el selector, si `inputType` es "select".            |
| **selectwidth**  | string    | Ancho del selector.                                                |
| **inputwidth**   | string    | Ancho del campo de entrada.                                       |
| **value**        | string    | Valor actual del campo de entrada.                                |
| **setValue**     | function  | Función para actualizar el valor del campo.                       |
| **hdlOnFocus**   | function  | Función que se llama al enfocar el campo de entrada.             |
| **hdlOnChange**  | function  | Función que se llama al cambiar el valor del campo.              |
| **validate**     | function  | Función que se utiliza para validar el valor del campo.          |

### Estructura del JSX

| Elemento          | Descripción                                                                |
|-------------------|----------------------------------------------------------------------------|
| **div**           | Contenedor principal para la etiqueta y el campo de entrada.              |
| **label**         | Etiqueta que se muestra junto al campo de entrada.                       |
| **select**        | Campo de selección que se muestra si `inputType` es "select".            |
| **input**         | Campo de entrada que se muestra si `inputType` es diferente de "select". |
| **div (error)**   | Muestra el mensaje de error de validación, si existe.                    |

## 📚 Funciones Internas

### getChangeSelevct

Maneja el cambio en el selector, actualizando el valor y llamando a la función hdlOnChange.

### getNweValue

Maneja el cambio en el campo de entrada, actualizando el valor y validando el nuevo valor.

### useEffect

Se utiliza para validar el valor del campo cada vez que cambia. Si hay un error de validación, se establece en el estado.