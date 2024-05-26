
const reverseString = function(string) {
    
    splittedStringArray = string.split('');
    splittedStringArray.reverse();
    string = splittedStringArray.join('');

    return string;
};





// Do not edit below this line
module.exports = reverseString;
