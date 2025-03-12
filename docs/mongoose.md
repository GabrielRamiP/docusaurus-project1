# Mongoose y MongoDB

Mongoose es una **biblioteca de modelado de datos para MongoDB y Node.js**.  
Nos permite definir **esquemas**, realizar consultas y gestionar datos de manera eficiente.  

---

# 📌 *Índice*


1. 🚀 [¿Qué es Mongoose?](#que-es-mongoose)  
2. 🏗️ [Instalación y Configuración](#instalacion-y-configuracion)  
3. 🏛️ [Modelos y Esquemas](#modelos-y-esquemas)  
4. 🔄 [Operaciones CRUD en Mongoose](#operaciones-crud-en-mongoose)  
5. 🎛️ [Relaciones entre Modelos](#relaciones-entre-modelos)  
6. 🏆 [Buenas Prácticas](#buenas-practicas)  
7. 🎯 [Conclusión](#conclusion)  

---

# 🚀 *¿Qué es Mongoose?*

Mongoose es una biblioteca de Node.js que nos permite interactuar con **MongoDB** usando una **API basada en esquemas**.

# 💡 *Características clave:*

✔️ Define estructuras de datos con **esquemas**.  
✔️ Permite validaciones automáticas de datos.  
✔️ Proporciona métodos avanzados para consultas.  

---

# 🏗️ *Instalación y Configuración*  

```bash
npm install mongoose
```

---

# 🏛️ *Modelos y Esquemas*

| Componente | Descripción | Ejemplo |
|------------|------------|---------|
| **Esquema** | Define la estructura de un documento en MongoDB. | `new mongoose.Schema({ nombre: String })` |
| **Modelo** | Representa una colección basada en un esquema. | `mongoose.model('Usuario', UsuarioSchema)` |
| **Documento** | Instancia de un modelo almacenada en la BD. | `const usuario = new Usuario({ nombre: "Juan" })` |

---

# 🔄 *Operaciones CRUD en Mongoose*

| Operación | Método | Ejemplo |
|-----------|--------|---------|
| **Crear** | `.create()` | `Usuario.create({ nombre: "Ana", edad: 25 })` |
| **Leer** | `.find()`, `.findById()` | `Usuario.find({ edad: 25 })` |
| **Actualizar** | `.updateOne()`, `.findByIdAndUpdate()` | `Usuario.updateOne({ nombre: "Ana" }, { edad: 26 })` |
| **Eliminar** | `.deleteOne()`, `.findByIdAndDelete()` | `Usuario.deleteOne({ nombre: "Ana" })` |


---

# 🔄 *Operaciones CRUD en Mongoose* 

```js
// Crear usuario
Usuario.create({ nombre: "Carlos", edad: 30 })
  .then(usuario => console.log("Usuario creado:", usuario))
  .catch(err => console.error(err));

// Leer usuarios
Usuario.find().then(usuarios => console.log(usuarios));

// Actualizar usuario
Usuario.findOneAndUpdate({ nombre: "Carlos" }, { edad: 31 }, { new: true })
  .then(usuario => console.log("Usuario actualizado:", usuario));

// Eliminar usuario
Usuario.findOneAndDelete({ nombre: "Carlos" })
  .then(() => console.log("Usuario eliminado"));
```

---
  
# 🏆 *Buenas Prácticas*


✅ Usar nombres de modelos en singular y capitalizados (Ej: Usuario, no usuarios).
✅ Aplicar validaciones en los esquemas para garantizar datos correctos.
✅ Utilizar async/await para escribir código más limpio en operaciones asíncronas.
✅ Implementar indices en campos de búsqueda frecuente para mejorar el rendimiento.

---

# 🎯 *Conclusión*

📌 Mongoose facilita la interacción con MongoDB a través de modelos estructurados.

✅ Beneficios:
✔️ Organización clara de los datos.
✔️ Validaciones automáticas y seguridad.
✔️ Métodos avanzados para gestionar información.

🚀 Siguiendo buenas prácticas, nuestras bases de datos serán más eficientes y escalables.