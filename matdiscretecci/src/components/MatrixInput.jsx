import React, { useState } from 'react';

function MatrixInput({ onMatrixSubmit }) {
  const [size, setSize] = useState(3);
  const [matrix, setMatrix] = useState(Array.from({ length: 3 }, () => Array(3).fill(0)));

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrix(Array.from({ length: newSize }, () => Array(newSize).fill(0)));
  };

  const handleMatrixChange = (e, row, col) => {
    const newMatrix = matrix.map((r, i) =>
      r.map((val, j) => (i === row && j === col ? parseInt(e.target.value) : val))
    );
    setMatrix(newMatrix);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matrix.length !== matrix[0].length) {
      alert('La matriz debe ser cuadrada.');
      return;
    }
    onMatrixSubmit(matrix);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Tamaño de la matriz:
          <input type="number" value={size} onChange={handleSizeChange} min="2" />
        </label>
      </div>
      <div className="matrix-grid" style={{ gridTemplateColumns: `repeat(${size}, 40px)` }}>
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
      <input type="submit" value="Enviar Matriz" />
    </form>
  );
}

export default MatrixInput;
