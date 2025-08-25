module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      // чётная строка — как есть
      result.push(...matrix[i]);
    } else {
      // нечётная строка — реверс
      result.push(...matrix[i].reverse());
    }
  }

  return result;
};
