let celsiusVal = 10;
while (celsiusVal <= 100) {
    let fahrVal = (9 * celsiusVal + 160) / 5;

    console.log("Celsius: " + celsiusVal + "ºC = Fahrenheit: " + fahrVal.toFixed(1) + "ºF");

    celsiusVal = celsiusVal + 10;
}