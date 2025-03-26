const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0){
        return "ERROR";
    }
    if ((!Number.isInteger(firstNum)) || (!Number.isInteger(secondNum))){
        return "ERROR";
    }
    let sum = 0;
    if (secondNum > firstNum){
        for (let i = firstNum; i <= secondNum; i++){
            sum += i;
        }
    } else if (secondNum < firstNum) {
        for (let i = secondNum; i <= firstNum; i++){
            sum += i;
        }
    } else {
        sum = firstNum + secondNum
    }
    return sum
    
};

// HERE IS WHAT HAPPENED
// i know how to go about adding the numbers. I know loop will count from the least uptill the highest
// but i didt know how to detect if the value is integer or not
// so did the mighty o'l google and landed on this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// from this search "how to get non integer parameter in javascript"

// Do not edit below this line
module.exports = sumAll;
