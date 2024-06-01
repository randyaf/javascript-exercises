const reverseString = function(word) {
    let reversedString = "";
    for (character of word) {
        reversedString = character + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
