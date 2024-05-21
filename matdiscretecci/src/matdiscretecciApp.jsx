import React, { useState } from 'react';
import MatrixInput from './components/MatrixInput';
import MatrixResults from './components/MatrixResults';
import MatrixGraph from './components/MatrixGraph';
import { isReflexive, isIrreflexive, isSymmetric } from './utils/relations';

function MatdiscretecciApp() {
  const [matrix, setMatrix] = useState([]);
  const [results, setResults] = useState([]);

  const handleMatrixSubmit = (newMatrix) => {
    setMatrix(newMatrix);
    const newResults = [];
    if (isReflexive(newMatrix)) newResults.push('Reflexiva');
    if (isIrreflexive(newMatrix)) newResults.push('Irreflexiva');
    if (isSymmetric(newMatrix)) newResults.push('Simétrica');
    // Agrega más validaciones aquí
    setResults(newResults);
  };

  return (
    <div className="App">
      <h1>Simulación de Relaciones Sobre Conjuntos y Grafos</h1>
      <MatrixInput onMatrixSubmit={handleMatrixSubmit} />
      <MatrixResults results={results} />
      <MatrixGraph matrix={matrix} />
    </div>
  );
}

export default MatdiscretecciApp;
