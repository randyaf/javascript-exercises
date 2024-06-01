const removeFromArray = function(array, elementToRemove) {
    let modifiedArray = [...array];
    for (item of modifiedArray) {
        for (argument of arguments) {
            while (modifiedArray.includes(argument)) {
                modifiedArray.splice(modifiedArray.indexOf(argument), 1);
            }
        }
    }
    // for (item of modifiedArray) {
    //   for (argument of arguments) {
    //     if (item === argument) {
    //       while(modifiedArray.includes(argument)) {
    //         modifiedArray.splice(modifiedArray.indexOf(item), 1);
    //       }
    //     }
    //   }
    // }
    return modifiedArray;

    
};

// Do not edit below this line
module.exports = removeFromArray;
