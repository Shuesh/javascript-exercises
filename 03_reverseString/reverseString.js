const reverseString = function(input) {
    let output = "";
    let arrayInput = input.split('');

    for (let char of arrayInput){
        output = char + output;
    }

    return output;

};

// Do not edit below this line
module.exports = reverseString;
