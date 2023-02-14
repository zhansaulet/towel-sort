
// You should implement your task here.

module.exports = function towelSort(matrix) {
  //console.log(matrix);
  let res = [];

  if (arguments.length == 0) return [];
  if (matrix.length == 0) return [];


  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) {
      matrix[i] = matrix[i].reverse();
    }

    for (let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[i][j]);
    }

  }
  return res;
};
