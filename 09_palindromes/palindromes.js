const palindromes = function (words) {
    const regex = /[a-z0-9]+/g;
    const result = words.toLowerCase().match(regex);
    console.log(result);
    const newWords = result.join("");

    let tempWord = [];
    for (let i = newWords.length -1; i >= 0; i--) {
        tempWord.push(newWords.charAt(i));
    }
    const reversedWord = tempWord.join("");

    return newWords === reversedWord ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
