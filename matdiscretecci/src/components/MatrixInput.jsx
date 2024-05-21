import React, { useState } from 'react';

function MatrixInput({ onMatrixSubmit }) {
  const [size, setSize] = useState(3);
  const [matrix, setMatrix] = useState(Array(size).fill(Array(size).fill(0)));

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrix(Array(newSize).fill(Array(newSize).fill(0)));
  };

  const handleMatrixChange = (e, row, col) => {
    const newMatrix = matrix.map((r, i) => r.map((val, j) => (i === row && j === col ? parseInt(e.target.value) : val)));
    setMatrix(newMatrix);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div>
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              type="number"
              key={`${i}-${j}`}
              value={val}
              onChange={(e) => handleMatrixChange(e, i, j)}
              min="0"
              max="1"
            />
          ))
        )}
      </div>
      <button type="submit">Enviar Matriz</button>
    </form>
  );
}

export default MatrixInput;