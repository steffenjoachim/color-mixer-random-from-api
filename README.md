# Color Picker Application

This project is a simple web-based **Color Picker** that allows users to adjust RGB (Red, Green, Blue) values using sliders and see the resulting color in real time. It also enables the user to copy the generated hexadecimal color code to the clipboard.

## Features

### 1. RGB Color Sliders
- Users can adjust the intensity of **Red**, **Green**, and **Blue** values using sliders.
- The background color of the main section dynamically updates as the sliders are adjusted.
- The RGB values are converted into a hexadecimal color code and displayed in real-time.

### 2. Dynamic Footer Gradient
- The footer has a gradient that transitions from **black** to the selected RGB color, enhancing the visual effect of the chosen color.

### 3. Copy Hex Color Code to Clipboard
- A **copy button** is provided to easily copy the generated hexadecimal color code.
- Upon clicking the copy button:
  - A popup will briefly appear indicating that the color code was copied.
  - The hexadecimal code is stored in the clipboard for easy reuse in other applications.

## How It Works

- **Slider Interaction**: The `input` event listeners on each slider capture the changes and update the background color of the main section and the displayed hex code.
- **Copy Button**: When the copy button is clicked, the current hexadecimal color code is copied to the clipboard using the `navigator.clipboard.writeText()` API. A brief popup provides visual feedback to confirm the action.

## How to Use

1. Open the application in a browser.
2. Adjust the **Red**, **Green**, and **Blue** sliders to find your desired color.
3. The hexadecimal color code will be updated automatically.
4. Click the **copy button** to copy the hex code to your clipboard.
5. Paste the hex code into any application or text editor.

**The application is not responsive – suitable only for screens larger than 850px.**

Enjoy customizing your colors!