const repeatString = function(word, repeatNumber) {
    if (repeatNumber < 0) return "ERROR";
    let repeatedWord = "";
    for (let i = 0; i < repeatNumber; i++) {
        repeatedWord += word;
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
