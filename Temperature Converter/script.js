const celsiusEl = document.getElementById("Celcius");
const farenheitEl = document.getElementById("Farenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp() {
    // Add + to avoid String Problem
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            kelvinEl.value = currentValue + 273.15;
            farenheitEl.value = currentValue * 1.8 + 32;
            break;
         case "Farenheit":
            celsiusEl.value =  (currentValue - 32) / 1.8;
            kelvinEl.value = (currentValue - 32 ) / 1.8 + 273.15;
            break;
         case "Kelvin":
            celsiusEl.value = currentValue - 273.15;
            farenheitEl.value = (currentValue - 273.15) * 1.8 + 32;
            break;
    
        default:
            break;
    }
}