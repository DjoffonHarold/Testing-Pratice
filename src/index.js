function sum(a, b) {
  return a + b;
}

function cal(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b
}

function mul(a, b) {
  return a*b
}

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.substr(1)
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function caesarCipher(str, shift) {
  return str.split('').map(char => {
      const code = char.charCodeAt(0);

      // Pour les lettres majuscules
      if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      // Pour les lettres minuscules
      if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      
      return char;
  }).join('');
}

function analyzeArray(arr){
  if(arr.length === 0) return null;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const length = arr.length
  const average = sum / length
 return {
    average: average,
    min: min,
    max: max,
    length: length
};

}



export {
  sum,
  cal,
  div,
  mul,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray} 