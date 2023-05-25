//gc.style.border = "3px solid black";
let size = 20;

genGrid(15);

let inpt = document.querySelector(".input");
inpt.addEventListener('change', function(){

    let blah = inpt.value;
    genGrid(blah);
})
console.log("hello");




function genGrid(size){
    let gc = document.querySelector(".gridContainer");

    //clear grid of any previous size grid
    let cells = gc.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.remove();
    })

    gc.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gc.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;

    for(let i = 0; i < totalCells; i++){
        let cell = document.createElement('div');
        cell.style.backgroundColor = "lime";
        gc.appendChild(cell);
    }
}

function getSize(){
    //let input = prompt("enter size of board: ");
    let input = document.querySelector(".input");
    size = input.value();
    return input;
}

console.log("hello");