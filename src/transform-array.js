const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  let end = [];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
    case '--discard-next':
      result = arr.slice(0, i);
      end = arr.slice(i + 2);
      return result.concat(end);
    case '--discard-prev':
      result = arr.slice(0, i - 1);
      end = arr.slice(i + 1);
      return result.concat(end);
    case '--double-next':
      result = arr.slice(0, i);
      end = arr.slice(i + 1);
      result.push(arr[i+1]);
      return result.concat(end);
    case '--double-prev':
      result = arr.slice(0, i);
      end = arr.slice(i + 1);
      result.push(arr[i-1]);
    return result.concat(end);
    }
  }
}

module.exports = {
  transform
};
