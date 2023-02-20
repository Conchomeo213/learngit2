// Convert temperature from celcius to Farenheit
function convertToFarenheit(celcius) {
    return (celcius * 9/5) + 32;
  }
  
  let temperatureInCelcius = 20;
  let temperatureInFarenheit = convertToFarenheit(temperatureInCelcius);
  console.log(temperatureInFarenheit); // 68