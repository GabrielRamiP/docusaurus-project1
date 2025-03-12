# ✨ ModalComponent.js

Este componente **Modal** proporciona una interfaz fácil de usar para mostrar modales en una aplicación React. Utiliza estilos para controlar el diseño y la apariencia del modal, y acepta propiedades para personalizar su contenido y comportamiento. 

```js
import React from "react";
import stylesModal from "../../styles/ModalComponent/modal";

const Modal = ({ title, children, onClose, buttons, visible, width }) => {
  const modalStyle = {
    ...stylesModal.modal,
    width: width,
    display: visible ? "block" : "none",
    position: 'absolute'
  };

  return (
    <div style={stylesModal.modalOverlay}>
    <div style={modalStyle}>
    <div style={stylesModal.modalHeader}>
    <h2 style={stylesModal.modalHeaderH2}>{title}</h2>
    <button style={stylesModal.closeButton} onClick={onClose}>
    &times;
    </button>
    </div>
    <hr style={stylesModal.modalDivider} />
    <div style={stylesModal.modalContent}>{children}</div>
    {buttons && (
    <>
    <hr style={stylesModal.modalDivider} />
    <div style={stylesModal.modalButtons}>{buttons}</div>
    </>
    )}
    </div>
    </div>
  );
};

export default Modal;
```

## 🛠️ Estructura del Componente

| Propiedad   | Tipo     | Descripción                                           |
|-------------|----------|-------------------------------------------------------|
| `title`     | `string` | Título del modal.                                    |
| `children`  | `node`   | Contenido que se mostrará dentro del modal.         |
| `onClose`   | `function` | Función que se ejecuta al cerrar el modal.         |
| `buttons`   | `node`   | Botones opcionales que se mostrarán en el modal.    |
| `visible`   | `boolean`| Determina si el modal es visible o no.              |
| `width`     | `string` | Ancho del modal (ej. '400px').                       |