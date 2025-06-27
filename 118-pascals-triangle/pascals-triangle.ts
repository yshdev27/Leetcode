function generate(numRows: number): number[][] {

    const triangle: number[][] = [];

  for (let row = 0; row < numRows; row++) {
    const currentRow: number[] = new Array(row + 1).fill(1);

    for (let col = 1; col < row; col++) {
      currentRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }

    triangle.push(currentRow);
  }

  return triangle;

    
};