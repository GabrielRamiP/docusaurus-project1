# 🕒 WaitingAgents.js

El componente `WaitingAgents` muestra una imagen centrada horizontalmente dentro de la pantalla, con un margen superior del 10%. Debajo de la imagen, se muestra un texto opcional también centrado, con un color y tamaño de fuente personalizables. Utiliza `styled-components` para estilizar la imagen y Material-UI para la disposición y el texto.

```js
import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import wex_png_wait from "../../assets/wex_png_wait.png";
import Typography from "@mui/material/Typography";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const WaitingAgents = ({ textColor, text }) => {
  return (
    <Stack
      sx={{
        marginTop:"10%",
        height: "30vh",
        width: "99.5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "15vw",
          textAlign:"center"
        }}
      >
        <Image src={wex_png_wait} alt="Logo" />
        {text && ( 
          <Typography style={{
            color: textColor,
            fontSize: "calc(0.61vw + 1px)",
            whiteSpace: "nowrap", 
            width: "100%"
          }}>
            {text}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default WaitingAgents;
```

## 📦 Imports

| **Librería**                      | **Descripción**                                      |
|-----------------------------------|------------------------------------------------------|
| `React`                           | Biblioteca principal de React.                       |
| `styled-components`               | Biblioteca para estilizar componentes utilizando tagged template literals. |
| `Stack` y `Typography`            | Componentes de `@mui/material` para la disposición y el texto. |
| `wex_png_wait`                   | Imagen importada desde la carpeta de assets.        |

## 🔍 Componente WaitingAgents

Se crea un componente Image utilizando styled-components, que aplica estilos a la etiqueta img para que su ancho y alto máximo sean del 100%.

## Función WaitingAgents

### Propiedades (Props): 

**textColor**: Color del texto.
**text**: Texto a mostrar debajo de la imagen.

### Stack principal:

**marginTop: "10%"**: Añade un margen superior del 10%.
**height: "30vh"**: Altura del 30% de la ventana gráfica.
**width: "99.5vw"**: Ancho del 99.5% de la ventana gráfica.
**display: "flex"**: Utiliza flexbox para la disposición.
**justifyContent: "center"**: Centra el contenido horizontalmente.
**alignItems: "center"**: Centra el contenido verticalmente.

### Stack interno:

**width: "15vw"**: Ancho del 15% de la ventana gráfica.
**textAlign: "center"**: Alinea el texto al centro.

### Componente Image:

Muestra la imagen importada wex_png_wait.

### Condicional de texto:

Si text está presente, se renderiza un componente Typography con el texto y estilos personalizados:

**color**: Se establece el color del texto según la prop textColor.
**fontSize**: Se calcula el tamaño de la fuente con calc(0.61vw + 1px).
**whiteSpace: "nowrap"**: Evita el salto de línea.
**width: "100%"**: Hace que el ancho del contenedor del texto sea del 100%