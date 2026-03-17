// ===============================
// Etch‑A‑Sketch State & Initialization
// ===============================

// Default grid size
let size = 20;

// Generate initial grid and attach all UI listeners
genGrid(20);
sizeLis();
randomLis();
blackLis();
clearLis();
eraseLis();
gridLis();

// ===============================
// UI Button Listeners
// ===============================

// Toggle grid lines on/off
function gridLis(){
    let grdBtn = document.querySelector('.grid');
    grdBtn.addEventListener('click', gridToggle);
}

// Activate eraser mode
function eraseLis(){
    let ersBtn = document.querySelector('.erase');
    ersBtn.addEventListener('click', eraserActive);
}

// Clear the entire drawing pad
function clearLis(){
    let clrBtn = document.querySelector('.clear');
    clrBtn.addEventListener('click', clearDrawPad);
}

// Switch to black drawing mode
function blackLis(){
    let blkBtn = document.querySelector('.black');
    blkBtn.addEventListener('click', paintBlackDefault);
}

// Switch to random‑color drawing mode
function randomLis(){
    let rdmBtn = document.querySelector('.random');
    rdmBtn.addEventListener('click', paintRandom);
}

// Handle grid size slider input
function sizeLis(){
    let inpt = document.querySelector(".input");
    let lbl = document.querySelector(".sizelbl");
    inpt.addEventListener('change', function(){
        let size = inpt.value;
        lbl.textContent = `size: ${size} x ${size}`;
        genGrid(size);
    })
}


// ===============================
// Grid Generation & Management
// ===============================

// Create a new grid of the given size
function genGrid(size){
    let gc = document.querySelector(".gridContainer");

    // Remove any existing cells
    clearGrid(gc);

     // Define CSS grid structure
    gc.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gc.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;

    // Create individual cells
    for(let i = 0; i < totalCells; i++){
        let cell = document.createElement('div');
        cell.style.backgroundColor = "white";
        gc.appendChild(cell);
    }

    // Default drawing mode is black
    paintBlackDefault();
}

// Remove all cells from the grid container
function clearGrid(grid){
    let cells = grid.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.remove();
    })
}

// ===============================
// Drawing Modes
// ===============================

// Draw in black on hover
function paintBlackDefault(){
    let gc = document.querySelector('.gridContainer');
    gc.addEventListener('mouseover', (e) => {
        if(e.target.tagName === 'DIV'){
            e.target.style.backgroundColor = "black";
        }
    });
}

// Draw random colors on hover
function paintRandom(){
    let gc = document.querySelector('.gridContainer');
    gc.addEventListener('mouseover', (e) => {
        if(e.target.tagName === 'DIV'){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    });
}

// Erase (paint white) on hover
function eraserActive(){
    let gc = document.querySelector('.gridContainer');
    gc.addEventListener('mouseover', (e) => {
        if(e.target.tagName === 'DIV'){
            e.target.style.backgroundColor = "white";
        }
    });
}

// ===============================
// Utility Actions
// ===============================

// Clear the board and regenerate the grid
function clearDrawPad(){
    let gc = document.querySelector('.gridContainer');
    clearGrid(gc);
    genGrid(size);
}

// Toggle grid line visibility via CSS class
function gridToggle(){
    let gc = document.querySelector('.gridContainer');
    gc.classList.toggle('gridToggle');
}
