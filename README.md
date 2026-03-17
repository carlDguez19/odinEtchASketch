# Etch-A-Sketch

A dynamic drawing application built with vanilla JavaScript, demonstrating DOM manipulation, event delegation, CSS Grid rendering, and interactive UI state management. Users can draw in black, erase, toggle grid lines, switch to random-color mode, and resize the canvas in real time.

---

## Features

- Adjustable grid size (user-controlled)
- Black, random-color, and eraser drawing modes
- Hover-based drawing using event delegation
- Clear/reset functionality
- Grid line toggle via CSS class
- Responsive layout and clean UI

---

## Tech Stack

- **HTML5**
- **CSS3 / SCSS**
- **JavaScript (ES6)**

---

## Project Structure

```
ODINETCHASKETCH/
│
├── index.html
│
├── css/
│   ├── main.css
│   ├── main.css.map
│   └── main.scss
│
├── js/
│   └── etch.js
│
└── font/
```

---

## How It Works

### Grid Generation
- The grid is created dynamically using CSS Grid.
- `genGrid(size)` clears any existing cells, sets the grid template, and generates `size × size` divs.
- Each cell begins with a white background.

### Event Delegation
Instead of attaching listeners to every cell, the app uses a **single `mouseover` listener** on the grid container.  
This improves performance and keeps the code maintainable.

### Drawing Modes
- **Black mode:** paints cells black on hover  
- **Random mode:** assigns a random RGB value  
- **Eraser mode:** paints cells white  
- Modes are switched by attaching new listeners to the grid container.

### Grid Size Control
- A slider input updates the label and regenerates the grid with the new dimensions.

### Grid Toggle
- A CSS class (`.gridToggle`) is applied/removed to show or hide grid lines.

---

## Challenges & Solutions

- **Efficient drawing:**  
  Solved with event delegation instead of per-cell listeners.

- **Dynamic resizing:**  
  Clearing and regenerating the grid ensures consistent behavior across sizes.

- **Mode switching:**  
  Each mode reassigns the hover behavior cleanly without needing to track individual cell state.

- **UI clarity:**  
  Grid toggle and clear functions keep the drawing surface intuitive and easy to reset.

---

## UI & Experience

- Clean, responsive layout  
- Intuitive controls for mode switching  
- Real-time feedback when resizing the grid  
- Smooth drawing experience using hover events  

---

## Live Demo

Add your Netlify link here once deployed:

```
https://your-etch-a-sketch.netlify.app
```

---

## Future Improvements

- Add opacity/pressure simulation  
- Add color picker  
- Add save/export drawing feature  
- Add touch support for mobile
