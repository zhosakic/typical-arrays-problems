
exports.min = function min (array) {
    if (!array || !array.length) {
      return 0;
    } else {
      array.sort( (a,b) => a - b);
      return array[0];
    }
};

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  } else {
    array.sort( (a,b) => a - b).reverse();
    return array[0];
  }
};

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  } else {
    let result = 0;
    let arrayLength =  array.length;
    for (let i = 0; i < arrayLength; i++) {
      result = result + array[i];
    }
    return result/arrayLength;
  }
};
