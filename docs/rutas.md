# Rutas en Express.js

Las **rutas** en Express.js definen cómo una aplicación responde a una solicitud HTTP en un endpoint específico.  

---

# 📌 *Índice*


1. 🚀 [¿Qué es una Ruta en Express?](#que-es-una-ruta-en-express)  
2. 🏗️ [Estructura de una Ruta](#estructura-de-una-ruta)  
3. 🔄 [Tipos de Rutas](#tipos-de-rutas)  
4. 📜 [Ejemplo de Rutas en Express](#ejemplo-de-rutas-en-express)  
5. 🎛️ [Manejo de Parámetros](#manejo-de-parametros)  
6. 🏆 [Buenas Prácticas](#buenas-practicas)  
7. 🎯 [Conclusión](#conclusion)  

---

# 🚀 *¿Qué es una Ruta en Express?*  
Las **rutas** determinan cómo una API responde a las solicitudes HTTP en puntos específicos.  

💡 **Ejemplo de ruta:**  
```plaintext
GET https://miapi.com/usuarios
```


# 🏗️ *Estructura de una Ruta*


| Componente    | Descripción | Ejemplo |
|--------------|------------|---------|
| **Método HTTP** | Define la acción de la solicitud. | `GET`, `POST`, `PUT`, `DELETE` |
| **URL** | Dirección específica dentro de la API. | `/usuarios`, `/productos/:id` |
| **Handler (Controlador)** | Función que maneja la solicitud. | `function(req, res) { ... }` |


---


# 🔄 *Tipos de Rutas*

| Tipo de Ruta  | Descripción | Ejemplo |
|--------------|------------|---------|
| **Ruta Estática** | Siempre devuelve el mismo contenido. | `app.get('/home', (req, res) => res.send('Bienvenido'))` |
| **Ruta Dinámica** | Usa variables en la URL. | `app.get('/usuarios/:id', (req, res) => res.send('Usuario ID: ' + req.params.id))` |
| **Ruta con Middleware** | Usa funciones intermedias para procesar la solicitud. | `app.use('/admin', middleware, controlador)` |

---

# 🎛️ *Manejo de Parámetros*

| Tipo de Parámetro | Descripción | Ejemplo |
|------------------|------------|---------|
| **Query Params** | Parámetros en la URL después de `?`. | `/usuarios?edad=25` |
| **Route Params** | Parámetros dentro de la ruta. | `/usuarios/:id` |
| **Body Params** | Datos enviados en el cuerpo de la petición. | `{ "nombre": "Carlos" }` |

---

# 🏆 *Buenas Prácticas*

✅ Usar nombres de rutas descriptivos.
✅ Aplicar validación de parámetros para evitar errores.
✅ Mantener la separación de responsabilidades usando controladores.
✅ Implementar manejadores de errores en las rutas.

---


# 🎯 *Conclusión*

📌 Las rutas en Express.js organizan la forma en que una API responde a las solicitudes.

✅ Permiten:
✔️ Definir y manejar endpoints eficientemente.
✔️ Organizar el flujo de datos en la aplicación.
✔️ Facilitar la escalabilidad del código.

🚀 Siguiendo buenas prácticas, el código será modular, reutilizable y fácil de mantener.
