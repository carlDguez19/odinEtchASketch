//gc.style.border = "3px solid black";
let size = 20;

genGrid(15);
sizeLis();

//randomBtnClick
let rdmBtn = document.querySelector('.random');
rdmBtn.addEventListener('click', paintRandom);


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
        cell.style.backgroundColor = "lime";
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

function clearGrid(grid){
    let cells = grid.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.remove();
    })
}