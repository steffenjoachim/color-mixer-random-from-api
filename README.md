# Color Picker Application

This project is a simple web-based **Color Picker** tool. It allows users to adjust RGB (Red, Green, Blue) values using sliders and see the resulting color in real time. Additionally, users can copy the generated hexadecimal color code to the clipboard and even generate a random color using a new "Random Color" button. 

## Features

### 1. **RGB Color Sliders**
- Users can control the intensity of **Red**, **Green**, and **Blue** by moving sliders.
- The **background color** of the page updates dynamically based on the current slider values.
- The current color is converted to a **hexadecimal color code** and displayed in real-time beneath the sliders.

### 2. **Random Color Generator**
- A new **Random Color Button** generates a random color using an API and adjusts the sliders accordingly.
- Users can explore new colors with one click, making the color selection process more dynamic and exciting.

### 3. **Copy Hex Color Code to Clipboard**
- A convenient **copy button** is provided to copy the current color’s hexadecimal code to the clipboard.
- When the user clicks the copy button:
  - A popup briefly appears to confirm that the color code was copied.
  - The color code is stored in the clipboard, ready to be pasted into other applications or documents.

### 4. **Dynamic Footer Gradient**
- The footer of the page has gradient effect that transitioned from **black** to the selected color.

### 5. **Real-Time Visual Feedback**
- The displayed hexadecimal color code updates live as users adjust the sliders.
- The **popup indicators** provide clear feedback for actions like copying the hex code.

## How It Works

1. **RGB Sliders**: Each slider (Red, Green, Blue) is connected to an `input` event listener. As the user moves the sliders, the current color values are converted to the corresponding hex color code using a `rgbToHex` function.
2. **Background Color Update**: The background color of the body and main section changes immediately based on the current RGB values.
3. **Random Color Feature**: The random color button fetches a random color from an API, sets the sliders to the respective RGB values, and updates the background color.
4. **Copy to Clipboard**: Clicking the copy button triggers the `navigator.clipboard.writeText()` API to copy the hex code to the clipboard. A small popup appears to confirm the action.