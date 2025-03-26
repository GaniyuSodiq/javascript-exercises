const convertToCelsius = function(num) {
  const celius = Math.round(((num - 32) * (5/9)) * 10) / 10;
  return celius;
};

const convertToFahrenheit = function(num) {
  const fahrenheit = Math.round(((num * (9/5)) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
