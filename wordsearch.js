// Pair programming with kevin cho and Kian Naimi-Roy 

let newArray = [];
const transpose = function(matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newArray[col][row] = matrix[row][col];
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  if(word.length <= 1){
return false
  }
if (letters.length === 0){
return false;
}

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  };
  transpose(letters);

  const verticalJoin = newArray.map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  };
  return false;
};

module.exports = wordSearch;

