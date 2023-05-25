//gc.style.border = "3px solid black";
let size = 20;

genGrid(15);
sizeLis();


function sizeLis(){
    let inpt = document.querySelector(".input");
    let lbl = document.querySelector(".sizelbl");
    inpt.addEventListener('change', function(){
        let size = inpt.value;
        lbl.textContent = `size: ${size} x ${size}`;
        genGrid(size);
    })
}

function genGrid(size){
    let gc = document.querySelector(".gridContainer");

    //clear grid of any previous size grid
    clearGrid(gc);

    gc.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gc.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;

    for(let i = 0; i < totalCells; i++){
        let cell = document.createElement('div');
        cell.style.backgroundColor = "lime";
        gc.appendChild(cell);
    }
}

function clearGrid(grid){
    let cells = grid.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.remove();
    })
}