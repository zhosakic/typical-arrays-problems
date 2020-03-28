
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
    array.sort( (a,b) => a - b);
    return array[array.length-1];
  }
};

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  } else {
   let sum = array.reduce(function (acc, nextElem) {
        return acc + nextElem;
    });
   return sum/array.length
  }
};
