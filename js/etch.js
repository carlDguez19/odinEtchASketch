//gc.style.border = "3px solid black";
let size = 20;

genGrid(20);
sizeLis();
randomLis();
blackLis();
clearLis();
eraseLis();
gridLis();
//randomBtnClick

function gridLis(){
    let grdBtn = document.querySelector('.grid');
    grdBtn.addEventListener('click', gridToggle);
}

function eraseLis(){
    let ersBtn = document.querySelector('.erase');
    ersBtn.addEventListener('click', eraserActive);
}

function clearLis(){
    let clrBtn = document.querySelector('.clear');
    clrBtn.addEventListener('click', clearDrawPad);
}

function blackLis(){
    let blkBtn = document.querySelector('.black');
    blkBtn.addEventListener('click', paintBlackDefault);
}

function randomLis(){
    let rdmBtn = document.querySelector('.random');
    rdmBtn.addEventListener('click', paintRandom);
}

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

    //set template for grid
    gc.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gc.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;

    //fill grid with divs
    for(let i = 0; i < totalCells; i++){
        let cell = document.createElement('div');
        cell.style.backgroundColor = "white";
        //cell.style.borderRadius = "3px";
        gc.appendChild(cell);
    }

    //paint each cell using event delegation use one event listener instead of one for every cell
    paintBlackDefault();
}

function paintBlackDefault(){
    let gc = document.querySelector('.gridContainer');
    gc.addEventListener('mouseover', (e) => {
        if(e.target.tagName === 'DIV'){
            e.target.style.backgroundColor = "black";
        }
    });
}

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

function eraserActive(){
    let gc = document.querySelector('.gridContainer');
    gc.addEventListener('mouseover', (e) => {
        if(e.target.tagName === 'DIV'){
            e.target.style.backgroundColor = "white";
        }
    });
}

function clearDrawPad(){
    let gc = document.querySelector('.gridContainer');
    clearGrid(gc);
    genGrid(size);
}

function clearGrid(grid){
    let cells = grid.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.remove();
    })
}

function gridToggle(){
    let gc = document.querySelector('.gridContainer');
    gc.classList.toggle('gridToggle');
}