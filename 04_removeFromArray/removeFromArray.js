const removeFromArray = function(array=[], ...removeValues) {

    return array.filter(x => !removeValues.includes(x));
};
removeFromArray();


  // x => is the same as writing "function (x) {}" but simply more concise
  // the return statement states in words 
  // "Filter the array where x represents values to keep.
  //  Do not remove values that is included in x. Aka. do not remove values from the first parameter".
  
// Do not edit below this line
module.exports = removeFromArray;
