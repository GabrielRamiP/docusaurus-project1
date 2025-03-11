
---

## 🚀 **4. Archivo:** `endpoints.md` (Explicación de endpoints)  
👉 📄 Ruta: `my-docs/docs/endpoints.md`  
👉 **Copia y pega esto:**  

### ✅ **endpoints.md**
```markdown
---
title: ¿Qué es un Endpoint?
---

# 💡 ¿Qué es un Endpoint?

Un **endpoint** es simplemente una **URL o dirección** en tu servidor que responde a ciertas solicitudes HTTP.

## 📜 Ejemplo de Endpoints
```js
app.get('/api/users', (req, res) => {
    res.send('Lista de usuarios');
});

app.post('/api/users', (req, res) => {
    res.send('Usuario creado');
});

app.delete('/api/users/:id', (req, res) => {
    res.send('Usuario eliminado');
});
