


const convertToCelsius = function(tempFahrenheit) {
  let fahrenheitToCelcius = (tempFahrenheit - 32) * 5/9;
  tempFahrenheit = fahrenheitToCelcius;
  tempFahrenheit = Number(tempFahrenheit.toFixed(1));

  return tempFahrenheit;
};

const convertToFahrenheit = function(tempCelcius) {
  let celciusToFahrenheit = tempCelcius * 9/5 + 32;
  tempCelcius = celciusToFahrenheit;
  tempCelcius = Number(tempCelcius.toFixed(1));

  return tempCelcius;
};

convertToCelsius();
convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
