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

// Do not edit below this line
module.exports = sumAll;
