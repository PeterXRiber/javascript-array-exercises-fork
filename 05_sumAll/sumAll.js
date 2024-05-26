const sumAll = function(int1, int2) {

    let sum = 0;

    let biggestInt;
    let smallestInt;

    if (int1 > int2) {
        biggestInt = int1;
        smallestInt = int2;
    } else if(int2 > int1){
        biggestInt = int2;
        smallestInt = int1;
    }

    if (smallestInt <= 0 || biggestInt <= 0 
        || typeof smallestInt !== 'number' || typeof biggestInt !== 'number') {
        return 'ERROR';
    }

    for (smallestInt; smallestInt <= biggestInt; smallestInt++) {
        
        sum += smallestInt;
    }

    return sum;
};

sumAll();

// Do not edit below this line
module.exports = sumAll;
