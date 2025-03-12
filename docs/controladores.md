#  Controladores

Un **Controlador** en Express.js es una función que maneja la lógica de negocio de una aplicación.  
Se encarga de **recibir solicitudes (request), procesarlas y enviar respuestas (response).**  

---

# 📌 *Índice*
1. 🎯 [¿Qué es un Controlador?](#que-es-un-controlador)  
2. 🏗️ [Estructura de un Controlador](#estructura-de-un-controlador)  
3. 📜 [Ejemplo Básico](#ejemplo-basico)  
4. 🎛️ [Controladores con una Base de Datos](#controladores-con-una-base-de-datos)  
5. 🏆 [Buenas Prácticas](#buenas-practicas)  
6. 🛠️ [Ejemplo Completo](#ejemplo-completo)  
7. 🎯 [Conclusión](#conclusion)  

---

# 🎯 *¿Qué es un Controlador?*

Un **controlador** es una función que maneja la lógica de negocio en una aplicación Express.js.  

# ✅ *Tareas principales:*  
✔️ Recibir y analizar la solicitud (**request**).  
✔️ Procesar datos o consultar una base de datos.  
✔️ Enviar una respuesta al cliente (**response**).  

# 💡 *En otras palabras:* 
👉 Es un **intermediario** entre las rutas y los modelos de datos.  


---

# 🏗️ *Estructura de un Controlador*  

Un **controlador** está compuesto por diferentes partes esenciales. A continuación, se presenta una tabla con los componentes básicos de un controlador en Express.js:  

---

# 📋 *Componentes de un Controlador*


| Componente    | Descripción | Ejemplo |
|--------------|------------|---------|
| **Request (`req`)** | Contiene la información de la solicitud realizada por el cliente. | `req.body`, `req.params`, `req.query` |
| **Response (`res`)** | Permite enviar una respuesta al cliente. | `res.json(data)`, `res.send("Hola")` |
| **Next (`next`)** | Función que pasa el control al siguiente middleware. | `next()` |
| **Lógica del negocio** | Aquí se procesan los datos, validaciones o consultas a la base de datos. | `const data = await Model.find();` |


---





# 🎯 *Conclusión*
📌 Los controladores en Express.js organizan y estructuran el código de nuestras aplicaciones.

✅ Permiten:

✔️ Separar la lógica de negocio de las rutas.

✔️ Manejar solicitudes y respuestas de manera eficiente.

✔️ Facilitar la escalabilidad y mantenimiento del código.

🚀 Siguiendo buenas prácticas, tu código será más limpio, modular y reutilizable.

---