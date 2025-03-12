# 📋 SubMenu.js

Este componente proporciona un menú desplegable sensible al desplazamiento con opciones específicas y un botón que se activa al pasar el ratón sobre él.

```js
import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SubMenu = ({ user, loggout = () => { } }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 2) {
    setIsScrolling(true);
    } else {
    setIsScrolling(false);
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Button
    aria-controls="simple-menu"
    aria-haspopup="true"
    onMouseEnter={handleMouseEnter}
    style={{
    textTransform: "capitalize",
    fontSize: "20px",
    textDecoration: "none",
    color: isScrolling ? "blue" : "white",
    transition: "background-color 0.3s",
    fontFamily: "sans-serif",

    }}
    >
    {user}
    </Button>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem onClick={handleClose} component={Link} to="#">
    Mi Cuenta
    </MenuItem>
    <MenuItem onClick={handleClose} component={Link} to="#">
    Mis Servicios
    </MenuItem>
    <MenuItem onClick={() => {
    handleClose();
    loggout();
    }}>
    Salir
    </MenuItem>
    </Menu>
    </>
  );
};

export default SubMenu;

```

---

## 📦 Imports

| Módulo                        | Descripción                                                                          |
|-------------------------------|--------------------------------------------------------------------------------------|
| `React`, `useState`, `useEffect` | Se importan para crear componentes de React y manejar el estado y los efectos secundarios. |
| `Menu`, `MenuItem`, `Button` | Componentes de Material-UI utilizados para crear el menú y el botón del menú desplegable. |
| `Link`                        | Se importa de `react-router-dom` para manejar la navegación entre rutas.             |


## 🔧 Estado y Funciones

| Elemento               | Descripción                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `isScrolling`          | Estado que indica si el usuario está desplazándose por la página.                             |
| `setIsScrolling`       | Función para actualizar el estado de `isScrolling`.                                          |
| `anchorEl`            | Estado que determina el elemento al que se ancla el menú desplegable.                        |
| `setAnchorEl`         | Función para actualizar el estado de `anchorEl`.                                            |
| `handleMouseEnter`    | Función que se llama al pasar el ratón sobre el botón, estableciendo el elemento de anclaje. |
| `handleClose`          | Función que se llama para cerrar el menú.                                                     |

## 🔍 Renderizado del Componente

| Elemento                | Descripción                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| `Button`                | Renderiza un botón que, al pasar el ratón sobre él, muestra el menú desplegable.               |
| `Menu`                  | Renderiza el menú desplegable, que se abre al pasar el ratón sobre el botón.                   |
| `MenuItem`             | Elementos del menú que permiten al usuario navegar a diferentes opciones (Mi Cuenta, Mis Servicios, Salir). |