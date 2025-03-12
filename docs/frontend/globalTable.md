# 📊 GlobalTable.js

Este componente **`GlobalTable`** proporciona una tabla básica con celdas que contienen títulos y texto. Los estilos pueden personalizarse mediante el objeto **`stylesTable`**. Asegúrate de proporcionar correctamente la estructura de datos (**data**) para que la tabla se genere correctamente.

```js
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import stylesTable from '../../styles/GlobalTable/globalTable';

const GlobalTable = ({ data }) => {
  return (
    <div style={stylesTable.divTable}>
    <TableContainer component={Paper} style={{ border: `1px solid #F2F2F2`, }}>
    <Table>
    <TableBody>
    {data.map((column, columnIndex) => (
    <TableRow key={columnIndex}>
    <TableCell style={{ borderBottom: `1px solid #F2F2F2` }}>
    {column.map((cell, cellIndex) => (
    <div key={cellIndex}>
    <Typography style={stylesTable.cellTitle}>
    {cell.title}
    </Typography>
    <Typography sx={stylesTable.cellText}>{cell.text}</Typography>
    </div>
    ))}
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
    </TableContainer>
    </div>
  );
};

export default GlobalTable;
```

## 📦 Imports

| Librería                          | Descripción                                       |
|-----------------------------------|---------------------------------------------------|
| **React**                         | Se importa la biblioteca React para usar componentes |
| **Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography** | Componentes de Material-UI para construir la tabla |

## ⚙️ Configuración del componente

| Propiedad       | Descripción                                      |
|------------------|--------------------------------------------------|
| **`data`**       | 📊 Estructura de datos que se pasará al componente para generar la tabla. Asegúrate de que la estructura sea correcta para que la tabla funcione adecuadamente. |


## 🚀 Definición del componente GlobalTable

- TableContainer: Contenedor de la tabla que incluye estilos personalizados.
- Table: Componente principal que representa la tabla.
- TableBody: Sección de la tabla que contiene las filas y celdas.
- TableRow: Representa cada fila de la tabla.
- TableCell: Representa cada celda de la fila.
- Typography: Utilizado para mostrar texto dentro de las celdas, con estilos aplicados desde stylesTable.

## 🎨 Estilos y visualización

Los estilos del componente se pueden personalizar mediante el objeto stylesTable, permitiendo ajustes visuales en la tabla.