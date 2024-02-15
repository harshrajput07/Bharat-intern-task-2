function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitInput = document.getElementById("fahrenheit").value;

    if (celsiusInput !== "") {
        var celsius = parseFloat(celsiusInput);
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else if (fahrenheitInput !== "") {
        var fahrenheit = parseFloat(fahrenheitInput);
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
        document.getElementById("fahrenheit").value = "";
        document.getElementById("celsius").value = "";
    }
}
