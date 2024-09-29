const redSlider = document.getElementById("red-value");
const greenSlider = document.getElementById("green-value");
const blueSlider = document.getElementById("blue-value");
const colorCodeHex = document.querySelector(".color-code-hex");
const copyButton = document.getElementById("copy-btn");
const copyPopup = document.querySelector(".copy-to-clipboard-popup");
const copiedPopup = document.querySelector(".copied-popup");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

// Event listener for slider changes
redSlider.addEventListener("input", changeBackgroundColor);
greenSlider.addEventListener("input", changeBackgroundColor);
blueSlider.addEventListener("input", changeBackgroundColor);

// Event listener for the copy button
copyButton.addEventListener("click", handleCopy);
copyButton.addEventListener("mouseover", showCopyPopup);
copyButton.addEventListener("mouseleave", hideCopyPopup);

// Function to change the background color of the main section and footer
function changeBackgroundColor() {
  const red = parseInt(redSlider.value);
  const green = parseInt(greenSlider.value);
  const blue = parseInt(blueSlider.value);

  const hexColor = rgbToHex(red, green, blue);

  // Update the background color of the main section
  main.style.backgroundColor = hexColor;

  // Update the H1 text with the new color code
  colorCodeHex.textContent = hexColor;

  // Dynamic linear gradient for the footer
  footer.style.background = `linear-gradient(to top, var(--clr-black), ${hexColor})`;
  
  // Update the slider colors
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
