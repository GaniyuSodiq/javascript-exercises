const reverseString = function(word) {
    let wordReversed = word.split("").reverse().join("");
    return wordReversed;
};

reverseString(word);

// Do not edit below this line
module.exports = reverseString;
