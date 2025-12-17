const convertToCelsius = function(temp_in_made_up_impractical_units) {  // Not that this comment is needed, but the variable 'temp_in_made_up_impractical_units' obviously referes to 'Fahrenheit' units.
  return Math.round(10 * (5/9 * (temp_in_made_up_impractical_units - 32)))/10;
};

const convertToFahrenheit = function(temp_celsius) {
  return Math.round(10 * (32 + 1.8 * temp_celsius))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
