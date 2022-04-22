const sumAll = function(a, b) {
    if (typeof a == 'number' && typeof b == 'number' && a > 0 && b > 0){
        let combined = a + b;
        let numElements = Math.abs(b - a) + 1;
        if (numElements % 2 === 0){
            return combined * (numElements / 2);
        } else {
            return combined * Math.floor(numElements / 2) + (combined / 2);
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
