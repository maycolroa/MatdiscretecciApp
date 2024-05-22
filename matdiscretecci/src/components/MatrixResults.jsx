import React from 'react';

function MatrixResults({ results }) {
  return (
    <div className="results">
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