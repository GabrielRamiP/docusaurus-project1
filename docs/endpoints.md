# Endpoints

Un **Endpoint** en una API es una **URL específica** donde un cliente puede enviar solicitudes y recibir respuestas.  
Los **endpoints** son la interfaz de comunicación entre el cliente y el servidor.  

---

# 📌 *Índice* 
1. 🚀 [¿Qué es un Endpoint?](#que-es-un-endpoint)  
2. 🏗️ [Estructura de un Endpoint](#estructura-de-un-endpoint)  
3. 📜 [Ejemplo Básico](#ejemplo-basico)  
4. 🎛️ [Tipos de Endpoints](#tipos-de-endpoints)  
5. 🏆 [Buenas Prácticas](#buenas-practicas)  
6. 🎯 [Conclusión](#conclusion)  

---

# 🚀 *¿Qué es un Endpoint?* 
Un **endpoint** es una dirección URL específica dentro de una API donde se reciben y procesan solicitudes. 



# 💡 *Ejemplo de endpoint:*
```plaintext
GET https://miapi.com/usuarios
```
Este endpoint permite obtener la lista de usuarios.

---

# 🏗️ *Estructura de un Endpoint*  

| Componente    | Descripción | Ejemplo |
|--------------|------------|---------|
| **Método HTTP** | Define la acción de la solicitud. | `GET`, `POST`, `PUT`, `DELETE` |
| **URL** | Dirección específica dentro de la API. | `/usuarios`, `/productos/:id` |
| **Parámetros** | Datos adicionales en la solicitud. | `req.params`, `req.query`, `req.body` |
| **Respuesta** | Devuelve los datos al cliente. | `res.json({ mensaje: "OK" })` |

---


# 🎯 *Conclusión*
📌 Los endpoints son esenciales para la comunicación entre cliente y servidor.
✅ Siguiendo buenas prácticas, podemos hacer nuestra API más organizada, eficiente y fácil de mantener.

