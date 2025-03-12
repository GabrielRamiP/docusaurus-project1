# 🎛️ RadioButton.js

Este componente proporciona un grupo de **botones de radio** estilizados con Material-UI, lo que facilita la integración en una aplicación React.

```js
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SelectCircle = ({
  title,
  options,
  selectedValue,
  onChange,
  onOptionSelect,
  orientation = 'vertical'
}) => {
  const theme = createTheme({
  palette: {
  primary: {
  main:"#9c27be",
  },
  },
  });

  const handleOptionSelect = (value) => {
  onChange(value);
  onOptionSelect(value); 
  };

  return (
    <ThemeProvider theme={theme}>
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    value={selectedValue}
    onChange={(event) => handleOptionSelect(event.target.value)}
    name="radio-buttons-group"
    sx={{
    flexDirection: orientation === 'horizontal' ? 'row' : 'column'
    }}
    >
    {options.map((option) => (
    <FormControlLabel
    key={option.value}
    value={option.value}
    control={<Radio color="primary" />}
    label={option.label}
    onChange={(e) => console.log('Hola: ', e.target.value)}
    />
    ))}
    </RadioGroup>
    </FormControl>
    </ThemeProvider>
  );
};

export default SelectCircle;
```
---

## 📋 Propiedades del Componente

| Propiedad        | Tipo        | Descripción                                             |
|------------------|-------------|---------------------------------------------------------|
| `title`          | `string`    | Título del grupo de botones de radio.                  |
| `options`        | `array`     | Opciones que se mostrarán como botones de radio.       |
| `selectedValue`  | `string`    | Valor actualmente seleccionado.                         |
| `onChange`       | `function`  | Función que se ejecuta al cambiar la opción seleccionada.|
| `onOptionSelect` | `function`  | Función que se ejecuta al seleccionar una opción.      |
| `orientation`    | `string`    | Orientación de los botones ('horizontal' o 'vertical').|