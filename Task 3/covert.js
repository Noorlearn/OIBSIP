function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
  
    if (unit === "celsius") {
      let fahrenheit = (temp * 9) / 5 + 32;
      document.getElementById("result").innerHTML =
        temp + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
      let celsius = ((temp - 32) * 5) / 9;
      document.getElementById("result").innerHTML =
        temp + "°F = " + celsius.toFixed(2) + "°C";
    }
  }
  