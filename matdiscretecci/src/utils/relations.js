function isReflexive(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] !== 1) {
      return false;
    }
  }
  return true;
}

function isIrreflexive(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] !== 0) {
      return false;
    }
  }
  return true;
}

function isSymmetric(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}

// Agrega más funciones para asimétrico, antisimétrico, transitivo, etc.

export { isReflexive, isIrreflexive, isSymmetric };
