
---

## 🚀

### ✅ **controladores.md**
```markdown
---
title: ¿Qué es un Controlador?
---

# 💻 ¿Qué es un Controlador en Express?

Un **controlador** es simplemente una función que se encarga de **controlar la lógica** de nuestras rutas o endpoints.

👉 **Es como un intermediario** que recibe una solicitud, procesa datos, realiza consultas a la base de datos y devuelve una respuesta.

## 📜 Ejemplo básico de un Controlador
```js
const getUsers = (req, res) => {
    const users = [
        { id: 1, name: 'Gabriel' },
        { id: 2, name: 'Juan' }
    ];
    res.json(users);
};
