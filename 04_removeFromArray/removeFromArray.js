const removeFromArray = function(array=[], removeValue) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === removeValue) {

            array.splice(i,1);
        }
        
    }
    
    return array;
};

removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;
