import React from 'react';

function MatrixResults({ results }) {
  return (
    <div>
      <h2>Resultados</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default MatrixResults;
