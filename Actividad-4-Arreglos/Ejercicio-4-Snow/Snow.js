function FloodFill(matrix, startX, startY, newColor) {
  const originalColor = matrix[startX][startY];
  if (originalColor === newColor) 
  return matrix;

  function fill(x, y) {
    if (
      x < 0 ||
      x >= matrix.length ||
      y < 0 ||
      y >= matrix[0].length ||
      matrix[x][y] !== originalColor
    ) {
      return;
    }

    matrix[x][y] = newColor;

    fill(x + 1, y);
    fill(x - 1, y);
    fill(x, y + 1);
    fill(x, y - 1);
  }

  fill(startX, startY);
  return matrix;
}

export { FloodFill }