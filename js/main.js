function generateColor() {
  // Generate random values for red, green, and blue components
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Combine the red, green, and blue components into a single color value
  var color = "rgb(" + red + "," + green + "," + blue + ")";

  // Return the generated color
  return color;
}

function updateColor() {
  // Get a reference to the color display element
  var colorDisplay = document.getElementById("colorDisplay");

  // Generate a new color and set it as the background color of the display element
  var color = generateColor();
  colorDisplay.style.backgroundColor = color;
  colorDisplay.innerHTML = color;
}
