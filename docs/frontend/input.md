# 📝 Input.js

Este componente **`LoginForm`** está diseñado para manejar el inicio de sesión de usuarios.

```js
import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AuthContext } from "../../Auth/Context";
import { useAuthClient } from "../../hooks/useAuthClient";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('Rellena todos los campos');
  const { loginClient } = useAuthClient();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onLogin = async () => {
    if (username === '' || password === '') {
    setMessage('Rellena todos los campos');
    setOpen(true);
    } else {
    try {
    const response = await loginClient(username, password);
  
    if (!response.success) {
    setMessage(response.message);
    setOpen(true);
    } else {
    login(response.user);
  
          
    if (response.user?.profile?.class === '_AGENT_') {
    navigate('/agents-home', {
    replace: true
    });
    } else {
    navigate('/option-dashboard', {
    replace: true
    });
    }
    }
    } catch (err) {
    setMessage(err.message);
    setOpen(true);
    }
    }
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

 
  return (
  <Box
  sx={{
  backgroundImageColor: 'white',
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
      
  }}
  >
  <div style={{ textAlign: "center" }}>
  <h1 style={{ color: "black" }}>Iniciar sesión</h1>
  <div>
  <img src={require("../../assets/logo_1.png")} style={{ width: 100 }} />
  </div>
  <div
  style={{
  display: "block",
  }}
  >
  <TextField
  id="username"
  label="Usuario"
  value={username}
  onChange={handleUsernameChange}
  margin="normal"
  variant="outlined"
  />
  </div>
  <div
  style={{
  display: "block",
  }}
  >
  <TextField
  id="password"
  label="Contraseña"
  type="password"
  value={password}
  onChange={handlePasswordChange}
  margin="normal"
  variant="outlined"
  />
  </div>
  <Button
  style={{
  marginTop: "1rem",
  marginBottom: "1rem",
  }}
  type="submit"
  variant="contained"
  color="primary"
  onClick={onLogin}
  >
  Iniciar sesión
  </Button>
  <Snackbar
  open={open}
  autoHideDuration={3000}
  onClose={handleClose}
  anchorOrigin={{
  vertical: 'top',
  horizontal: 'center'
  }}
  >
  <MuiAlert
  elevation={6}
  variant="filled"
  onClose={handleClose}
  severity="error"
  >
  {message}
  </MuiAlert>
  </Snackbar>
  </div>
  </Box>
  );
};

export default LoginForm;
```

## 📦 Imports

| Librería                  | Descripción                                           |
|---------------------------|-------------------------------------------------------|
| **useContext**            | Hook de React para acceder al contexto.               |
| **useState**              | Hook de React para manejar el estado.                 |

## 💻 Material-UI

| Componente               | Descripción                                           |
|--------------------------|-------------------------------------------------------|
| **TextField**            | Componente de Material-UI para entradas de texto.    |
| **Button**               | Componente de Material-UI para crear botones.         |
| **Box**                  | Componente de Material-UI para crear contenedores flexibles. |
| **Snackbar**             | Componente de Material-UI para mostrar mensajes breves. |
| **Alert**                | Componente de Material-UI para mostrar alertas.      |

## 💻 React Router

| Hook                     | Descripción                                           |
|--------------------------|-------------------------------------------------------|
| **useNavigate**          | Hook para navegar entre rutas en la aplicación.      |

## 💻 Contexto de Autenticación

| Contexto                | Descripción                                           |
|--------------------------|-------------------------------------------------------|
| **AuthContext**          | Contexto que proporciona el estado de autenticación y funciones relacionadas. |

## 🚀 Definición del Componente LoginForm

| Propiedad    | Tipo      | Descripción                                                    |
|--------------|-----------|---------------------------------------------------------------|
| **N/A**      | N/A       | Este componente no recibe props directamente. Utiliza contexto y hooks. |

### Estructura del JSX

| Elemento         | Descripción                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| **Box**          | Contenedor principal con propiedades de fondo y diseño.                                                |
| **h1**           | Título del formulario de inicio de sesión.                                                              |
| **img**          | Logo de la aplicación.                                                                                    |
| **TextField**    | Campo para ingresar el nombre de usuario.                                                               |
| **TextField**    | Campo para ingresar la contraseña (tipo: password).                                                     |
| **Button**       | Botón para enviar el formulario y manejar el inicio de sesión.                                          |
| **Snackbar**      | Componente que muestra un mensaje temporal (alerta) cuando hay un error.                               |
| **MuiAlert**     | Componente que se utiliza dentro del Snackbar para mostrar el mensaje de error.                        |

## 📚 Funciones Internas

### onLogin

Esta función maneja el proceso de inicio de sesión. Realiza las siguientes tareas:
- Validación de campos: Verifica si los campos de usuario y contraseña están llenos. Si no lo están, muestra un mensaje de error.
- Llamada a la API: Si ambos campos están llenos, llama a loginClient con el nombre de usuario y la contraseña.

### Manejo de respuesta:

- Si la respuesta no es exitosa, muestra el mensaje de error correspondiente.
- Si la respuesta es exitosa, actualiza el contexto de autenticación y navega a la ruta correspondiente según el perfil del usuario.

### handleUsernameChange y handlePasswordChange

Funciones que actualizan el estado del nombre de usuario y la contraseña respectivamente.

### handleClose

Maneja el cierre del Snackbar.