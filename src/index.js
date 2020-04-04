module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0){
        for (let k = 1; k <= 9; k++) {
          function isValid(table, row, column, k) {
            for (let i = 0; i < 9; i++) {
              const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
              const n = 3 * Math.floor(column / 3) + i % 3;
              if (table[row][i] === k || table[i][column] === k || table[m][n] === k) return false;
            }
            return true;
          }
          if (isValid(matrix, i, j, k)) {
            matrix[i][j] = k;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
