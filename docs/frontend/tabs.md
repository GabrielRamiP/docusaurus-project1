# 🗂️ Tabs.js

El componente **TabsComponent** está diseñado para renderizar una interfaz de pestañas utilizando el componente **Tabs** de **Material-UI**.

---

```js
import { Stack, Tab, Tabs } from "@mui/material";

function TabsComponent (props) {
  const { value = '1', setValue = () => { }, tabs = [] } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
    <Tabs
    value={value}
    onChange={handleChange}
    textColor="secondary"
    indicatorColor="secondary"
    variant="scrollable"
    >
    {tabs.map((item, index) => {
    return (
    <Tab
    key={index}
    value={item.key}
    label={item.label}
    disabled={item.disabled} />
    );
    })}
    </Tabs>
    </Stack>
  );
}

export default TabsComponent;

```
---

## 📊 Props

| **Propiedad** | **Descripción**                                       |
|---------------|------------------------------------------------------|
| **value**     | El valor actual de la pestaña seleccionada (por defecto `'1'`). |
| **setValue**  | Función para actualizar el valor de la pestaña seleccionada. |
| **tabs**      | Array de objetos que representan las pestañas, cada uno con propiedades como `key`, `label`, y `disabled`. |

## 🔄 Manejo de Cambios

La función handleChange se utiliza para manejar el cambio de pestaña y actualizar el estado correspondiente.

## 📋 Renderizado de las Pestañas

- **Stack**: Componente que actúa como contenedor vertical para las pestañas.
- **Tabs**: Componente que contiene las pestañas, configurado para ser scrollable.
- **Tab**: Componente que representa cada pestaña individualmente.
- **disabled**: Propiedad que determina si una pestaña está deshabilitada.