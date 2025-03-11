
---

## 🚀 
---
title: ¿Qué es una API?
---

# 📡 ¿Qué es una API?

Una **API (Application Programming Interface)** permite que dos aplicaciones se comuniquen entre sí.

## 📜 Ejemplo de API con Express
```js
app.get('/api/products', (req, res) => {
    res.json([{ id: 1, name: 'Laptop' }, { id: 2, name: 'Mouse' }]);
});
