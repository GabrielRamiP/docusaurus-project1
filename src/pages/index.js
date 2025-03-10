import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🚀 ¡Bienvenido a Mi Proyecto!</h1>
      <p>Este es mi primer proyecto con Docusaurus.</p>

      <img src="/img/bienvenido.jpg" width="400" alt="Bienvenido" />

      <br/><br/>
      <a href="/docs/welcome">
        <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#00AEEF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          👉 Ir a la Documentación 📜
        </button>
      </a>
    </div>
  );
}
