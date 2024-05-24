const removeFromArray = function(array=[], ...removeValues) {

    

    return array.filter(x => !removeValues.includes(x));
};

removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;
