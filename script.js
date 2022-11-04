const add7 = (num) => num + 7;

const multiply = (num1, num2) => num1 * num2;

// const capitalize = (str) => {
//   const strArr = str.split("");
//   console.log(strArr);
//   console.log(strArr[0]);
//   strArr[0] = strArr[0].toUpperCase();
//   return strArr.join("");
// };

const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

console.log(capitalize("hElLo"));

const lastLetter = function (str) {
  return str.charAt(str.length - 1);
};

console.log(lastLetter("dwadwaddwadwasssewkz"));
