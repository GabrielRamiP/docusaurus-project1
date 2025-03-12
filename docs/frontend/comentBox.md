# 💬 ComentBox.js

Este componente TextInput proporciona un campo de texto de entrada con opciones de personalización, como el título, el ancho, el color de fondo y el color del texto.

## 🎯 Características:

- ✍️ Permite introducir texto de forma flexible.
- 🎨 Personalización de estilo con color de fondo, color de texto, y ancho.
- 🛠️ Incluye un botón y tipografía usando Material UI.

```js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const TextInput = ({ title, width, backgroundColor, textColor}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container>
    <div>
    <Typography  sx={{color:"#999999",}} >{title}</Typography>
    <TextField
    id="textoEntrada"
    variant="outlined"
    fullWidth
    multiline
    rows={4}
    value={inputText}
    onChange={handleInputChange}
    style={{  backgroundColor:backgroundColor, width:width, color:textColor,color: `${textColor} !important`  }}
    />
    </div>
    </Container>
  );
};

export default TextInput;
```

## 🧩 Props del componente

| Prop            | Tipo     | Descripción                                                             |
|-----------------|----------|-------------------------------------------------------------------------|
| `title`         | `string` | 📝 El título que se mostrará sobre el campo de texto.                    |
| `width`         | `string` | 📏 El ancho del campo de texto (e.g., `'100%'`, `'300px'`).               |
| `backgroundColor`| `string`| 🎨 Color de fondo del campo de texto.                                    |
| `textColor`     | `string` | 🎨 Color del texto dentro del campo de entrada.                          |


## ⚙️ Funciones

| Función             | Descripción                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| `handleInputChange` | 📥 Maneja el cambio de texto en el campo de entrada y actualiza el estado `inputText`.           |