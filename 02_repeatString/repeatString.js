const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };

//   let num = 3;
//   let result = "";
//   function repeatStr(str, num) {
//       for (let i = 0; i < num; i++){
//           result += `${str}`;
//       }
//       console.log(result);
//   }

// Do not edit below this line
module.exports = repeatString;
