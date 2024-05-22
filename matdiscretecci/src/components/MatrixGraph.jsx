import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

function MatrixGraph({ matrix }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = matrix.map((_, i) => ({ id: i, label: `${i}` }));
    const edges = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          edges.push({ from: i, to: j });
        }
      }
    }

    const data = { nodes, edges };
    const options = {};
    new Network(containerRef.current, data, options);
  }, [matrix]);

  return <div ref={containerRef} style={{ height: '500px' }} />;
}

export default MatrixGraph;
