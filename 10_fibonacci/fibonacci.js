const fibonacci = function(num) {
    try {
        num = Number(num);
    }
    catch (error) {
        console.error(error);
    }

    if (num < 0){
        return 'OOPS';
    }
    else {        
        let prev = 1;
        let curr = 1;
        let temp;
        for (let i = 0; i < num - 2; i++){
            temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
};

// Do not edit below this line
module.exports = fibonacci;
