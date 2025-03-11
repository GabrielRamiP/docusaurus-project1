
---

## 🚀 **7. Archivo:** `mongoose.md` (Explicación de Mongoose)  
👉 📄 Ruta: `my-docs/docs/mongoose.md`  
👉 **Copia y pega esto:**  

### ✅ **mongoose.md**
```markdown
---
title: ¿Qué es Mongoose?
---

# 💾 ¿Qué es Mongoose?

**Mongoose** es una librería de Node.js que nos permite trabajar con **MongoDB** de manera sencilla.

## 📜 Ejemplo de Conexión con MongoDB
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
