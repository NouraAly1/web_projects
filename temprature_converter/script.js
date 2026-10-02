// this to grab the elements we need from the page, so we can read and update them
const tempInput = document.getElementById("tempInput");
const conversionType = document.getElementById("conversionType");
const resultDisplay = document.getElementById("result");
const errorDisplay = document.getElementById("errorMsg");
const convertBtn = document.getElementById("convertBtn");

// this function does the math for celsius to fahrenheit
// using the formula from the assignment: F = (9/5) * C + 32
function celsiusToFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

// this function does the math for fahrenheit to celsius
// by using the formula: C = (5/9) * (F - 32)
function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// this function checks if what the user typed is actually usable
// it will return true if the input is a valid number, false if not
function isValidTemperature(value) {
  // if the box is empty, that's not valid
  if (value === "") {
    return false;
  }

  // isNaN checks if something is "Not a Number"
  // so if isNaN says true, that means the input is NOT a valid number
  if (isNaN(value)) {
    return false;
  }

  // if it passed both checks above, it's good to use
  return true;
}

// this runs every time the user clicks the Convert button
convertBtn.addEventListener("click", function () {
  // grab whatever the user typed and picked from the dropdown
  const inputValue = tempInput.value;
  const type = conversionType.value;

  // check if the input is actually a usable number before doing any math
  if (isValidTemperature(inputValue) === false) {
    // if it's not valid, show an error message and clear out any old result
    errorDisplay.textContent = "Please enter a valid number.";
    resultDisplay.textContent = "";
    return; // stop here, don't try to convert bad input
  }

  // if we made it this far, the input is good, so clear any old error
  errorDisplay.textContent = "";

  // turn the input into an actual number, since it comes in as text
  const numericValue = Number(inputValue);

  // now figure out which direction to convert, based on the dropdown
  if (type === "CtoF") {
    const converted = celsiusToFahrenheit(numericValue);
    resultDisplay.textContent =
      numericValue + " °C is " + converted.toFixed(2) + " °F";
  } else if (type === "FtoC") {
    const converted = fahrenheitToCelsius(numericValue);
    resultDisplay.textContent =
      numericValue + " °F is " + converted.toFixed(2) + " °C";
  }
});
