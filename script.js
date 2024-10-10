const redSlider = document.getElementById("red-value");
const greenSlider = document.getElementById("green-value");
const blueSlider = document.getElementById("blue-value");
const colorCodeHex = document.querySelector(".color-code-hex");
const copyButton = document.getElementById("copy-btn");
const copyPopup = document.querySelector(".copy-to-clipboard-popup");
const copiedPopup = document.querySelector(".copied-popup");

const btn = document.querySelector("button");

// Event listener for slider changes
redSlider.addEventListener("input", changeBackgroundColor);
greenSlider.addEventListener("input", changeBackgroundColor);
blueSlider.addEventListener("input", changeBackgroundColor);

// Event listener for dthe random color btn
btn.addEventListener("click", getRandomColor);

// Event listener for the copy button
copyButton.addEventListener("click", handleCopy);
copyButton.addEventListener("mouseover", showCopyPopup);
copyButton.addEventListener("mouseleave", hideCopyPopup);

//Function to get a random color from the API
async function getRandomColor() {
  let response = await fetch("https://dummy-apis.netlify.app/api/color");
  let responsJson = await response.json();
  let color = await responsJson.color;
  setSliderValues(color);
}

function setSliderValues(color){
  let hex = color.replace('#', '');

  redSlider.value = parseInt(hex.substring(0, 2), 16);
  greenSlider.value = parseInt(hex.substring(2, 4), 16);
  blueSlider.value = parseInt(hex.substring(4, 6), 16);
  changeBackgroundColor()
}

// Function to change the background color of the main section and header and footer
function changeBackgroundColor() {
  const red = parseInt(redSlider.value);
  const green = parseInt(greenSlider.value);
  const blue = parseInt(blueSlider.value);
  const main = document.querySelector("main");
const footer = document.querySelector("footer");

  const hexColor = rgbToHex(red, green, blue);

  main.style.backgroundColor = hexColor;

  colorCodeHex.textContent = hexColor;

  footer.style.background = `linear-gradient(to top, var(--clr-black), ${hexColor})`;

  document.querySelector("header").style.backgroundColor = hexColor;

  updateSliderColors();
}

// Function to convert a number to a two-digit hexadecimal value
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Function to compute the hex color from RGB values
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Function to update all slider colors dynamically
function updateSliderColors() {
  updateSliderBackground(redSlider, "var(--clr-red)");
  updateSliderBackground(greenSlider, "var(--clr-green)");
  updateSliderBackground(blueSlider, "var(--clr-blue)");
}

// Function to update the background of a specific slider
function updateSliderBackground(slider, color) {
  const value = slider.value;
  const percentage = (value / 255) * 100; // Calculate the thumb position as a percentage

  // Set the background as a gradient: color on the left, white on the right
  slider.style.background = `linear-gradient(to right, ${color} ${percentage}%, white ${percentage}%)`;
}

// Function to handle copying the color code to the clipboard
function handleCopy() {
  const hexColor = colorCodeHex.textContent;
  navigator.clipboard.writeText(hexColor).then(handleCopiedPopup);
}

// Function to handle the copied popup display
function handleCopiedPopup() {
  showCopiedPopup();

  // Set a timeout to hide the popup again
  setTimeout(() => {
    hideCopiedPopup();
  }, 2000); // Popup stays for 2 seconds
}

// Function to show the "Copy to Clipboard" popup
function showCopyPopup() {
  copyPopup.style.transform = "translateY(0)"; // Show the popup
}

// Function to hide the "Copy to Clipboard" popup
function hideCopyPopup() {
  copyPopup.style.transform = "translateY(-10000%)"; // Hide the popup
}

// Function to show the "Copied" popup
function showCopiedPopup() {
  copiedPopup.style.transform = "translateY(0)";
}

// Function to hide the "Copied" popup
function hideCopiedPopup() {
  copiedPopup.style.transform = "translateY(-10000%)";
}

// Set the initial slider background colors and the main background color
changeBackgroundColor();
