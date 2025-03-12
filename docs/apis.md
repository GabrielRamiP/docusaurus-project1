# APIs en Express.js

Una **API (Interfaz de Programación de Aplicaciones)** es un conjunto de reglas que permite a diferentes sistemas comunicarse entre sí.  

---

# 📌 *Índice*  
1. 🚀 [¿Qué es una API?](#que-es-una-api)  
2. 🏗️ [Estructura de una API](#estructura-de-una-api)  
3. 📜 [Ejemplo de API en Express](#ejemplo-de-api-en-express)  
4. 🎛️ [Tipos de APIs](#tipos-de-apis)  
5. 🏆 [Buenas Prácticas](#buenas-practicas)  
6. 🎯 [Conclusión](#conclusion)  

---

# 🚀 **¿Qué es una API?**  
Una API define cómo dos aplicaciones pueden interactuar mediante **endpoints** y **métodos HTTP**.  

# 💡 *Ejemplo de llamada a una API:*  
```plaintext
GET https://miapi.com/usuarios
```

# 🏗️ *Estructura de una API*

| Componente | Descripción | Ejemplo |
|------------|------------|---------|
| **Endpoint** | URL específica para interactuar con la API. | `/usuarios`, `/productos/:id` |
| **Método HTTP** | Acción que se realiza sobre los datos. | `GET`, `POST`, `PUT`, `DELETE` |
| **Parámetros** | Datos enviados en la solicitud. | `req.params`, `req.query`, `req.body` |
| **Respuesta** | Datos que devuelve la API. | `res.json({ mensaje: "OK" })` |


---
# 🎛️ *Tipos de APIs*

| Tipo de API | Descripción | Ejemplo |
|------------|------------|---------|
| **REST API** | Basada en recursos y métodos HTTP. | `GET /usuarios`, `POST /productos` |
| **GraphQL API** | Permite consultas flexibles de datos. | `{ usuario(id: 1) { nombre } }` |
| **SOAP API** | Protocolo estructurado basado en XML. | `POST /usuarios` con XML |
| **WebSockets** | Comunicación bidireccional en tiempo real. | `ws://miapi.com/chat` |

---

# 🏆 *Buenas Prácticas*

✅ Diseñar endpoints claros y consistentes.
✅ Usar códigos de estado HTTP adecuados.
✅ Implementar autenticación y autorización.
✅ Documentar la API con Swagger o Postman.

---

# 🎯 *Conclusión*

✅ Beneficios:
✔️ Facilita la integración con otros servicios.
✔️ Organiza la estructura de datos de la aplicación.
✔️ Mejora la escalabilidad y el mantenimiento.

🚀 Siguiendo buenas prácticas, la API será eficiente, segura y fácil de usar.