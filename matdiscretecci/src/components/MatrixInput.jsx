import React, { useState } from 'react';

function MatrixInput({ onMatrixSubmit }) {
  // Tamaño inicial de la matriz
  const initialSize = 3;

  // Estados
  const [size, setSize] = useState(initialSize); // Tamaño de la matriz
  const [matrix, setMatrix] = useState(Array.from({ length: initialSize }, () => Array(initialSize).fill(''))); // Matriz de entrada
  const [randomMatrix, setRandomMatrix] = useState(false); // Indicador de si se generó una matriz aleatoria
  const [relations, setRelations] = useState(null); // Relaciones generadas por la matriz

  // Maneja el cambio en el tamaño de la matriz
  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrix(Array.from({ length: newSize }, () => Array(newSize).fill('')));
    setRelations(null); // Limpiar las relaciones cuando cambia el tamaño de la matriz
  };

  // Maneja el cambio en los valores de la matriz
  const handleMatrixChange = (e, row, col) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value);
    if (value !== 0 && value !== 1) {
      // Si el valor no es 0 ni 1, no actualizamos la matriz
      return;
    }
    setMatrix((prevMatrix) =>
      prevMatrix.map((r, i) =>
        r.map((val, j) => (i === row && j === col ? value : val))
      )
    );
    setRelations(null); // Limpiar las relaciones cuando se cambia la matriz
  };

  // Genera una matriz aleatoria
  const handleRandomMatrix = () => {
    const randomMatrix = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Math.random() < 0.5 ? 0 : 1)
    );
    setMatrix(randomMatrix);
    setRandomMatrix(true);
    setRelations(null); // Limpiar las relaciones cuando se genera una matriz aleatoria
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!randomMatrix && matrix.length !== matrix[0].length) {
      alert('La matriz debe ser cuadrada.');
      return;
    }
    // Calcular las relaciones R
    const newRelations = calculateRelations(matrix);
    setRelations(newRelations);
    onMatrixSubmit(matrix);
  };

  // Restablece los valores de la matriz y las relaciones
  const handleReset = () => {
    setSize(initialSize);
    setMatrix(Array.from({ length: initialSize }, () => Array(initialSize).fill('')));
    setRandomMatrix(false);
    setRelations(null);
  };

  // Función para calcular las relaciones R
  const calculateRelations = (matrix) => {
    // Lógica para calcular las relaciones R
    // Aquí debes implementar la lógica para verificar las propiedades relacionales
    // y actualizar el objeto "relations" según corresponda

    // Por ahora, devolvemos null
    return null;
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      {/* Título y tamaño de la matriz */}
      <h2>Tamaño de la matriz:</h2>
      <label>
        Tamaño:
        <input type="number" value={size} onChange={handleSizeChange} min="2" />
      </label>

      {/* Botón para generar matriz aleatoria */}
      <button type="button" onClick={handleRandomMatrix}>Generar Aleatoriamente</button>

      {/* Matriz de entrada */}
      <div className="matrix-grid" style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, marginBottom: '10px' }}>
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              type="number"
              key={`${i}-${j}`}
              value={val}
              onChange={(e) => handleMatrixChange(e, i, j)}
              min="0"
              max="1"
              className="matrix-cell"
            />
          ))
        )}
      </div>

      {/* Botón para enviar la matriz */}
      <input type="submit" value="Enviar Matriz" />

      {/* Botón para borrar los valores ingresados */}
      <button type="button" onClick={handleReset}>Borrar Valores</button>
      
      {/* Mostrar las relaciones si están disponibles */}
      {relations && (
        <div className="relations">
          <h2>Relaciones generadas por la matriz:</h2>
          {/* Aquí puedes mostrar las relaciones, por ejemplo: */}
          <ul>
            <li>Reflexiva: {relations.reflexive ? 'Sí' : 'No'}</li>
            <li>Irreflexiva: {relations.irreflexive ? 'Sí' : 'No'}</li>
            {/* Agrega más relaciones según sea necesario */}
          </ul>
        </div>
      )}
    </form>
  );
}

export default MatrixInput;
