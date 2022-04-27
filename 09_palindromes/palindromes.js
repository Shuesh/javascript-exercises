const palindromes = function (phrase) {
    let cleaned = phrase
        .split('')//Makes it into an array
        .filter(
            char => (/[a-zA-Z]/).test(char)
        );//Only keeps the character if it's a-z or A-Z
    
    for (let i = 0; i < cleaned.length/2 + 1; i++){      
        if (cleaned[i].toLowerCase() != cleaned[cleaned.length-1-i].toLowerCase()){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;