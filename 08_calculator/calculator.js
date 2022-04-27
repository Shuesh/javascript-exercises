const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce(
    (total, element) => total + element,
    0
  )
};

const multiply = function(array) {
  return array.reduce(
    (total, element) => total * element,
    1
  )
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a > 1 && a % 1 == 0){
    return a * factorial(a-1);
  }
  else if (a == 1 || a == 0) {
    return 1;
  }
  else {
    return 'ERROR';
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
