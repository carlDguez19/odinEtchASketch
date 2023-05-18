const cgButton = document.querySelector('.cgButton');
const paintBlackButton = document.querySelector('.paintBlack');
let cellsNL = null;

cgButton.addEventListener('click', createGrid);
paintBlackButton.addEventListener('click', paintBlack);

function paintBlack(){
    const cellsArray = Array.from(cellsNL);
    for(let i = 0; i < cellsArray.length; i++){
        console.log(cellsArray[i] + i);
        cellsArray[i].addEventListener('click', hello);
    }
}

function hello(){
    console.log('hello buddy');
}

// function addingEL(item){
//     console.log(item);
//     item.addEventListener('click', () => {

//     });
// }

function createGrid(){
    let rowHeight = 25/2;
    for(let i = 0; i < 2; i++){
        //console.log("here");
        const row = document.createElement('div');
        row.style.height = rowHeight + 'em';
        row.classList.add('row');
        for(let j = 0; j < 2; j++){
            //console.log(j);
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        document.querySelector('.gridContainer').appendChild(row);
    }
    cellsNL = document.querySelectorAll('.cell');
    //add function here that calls the code snippet at the bottom to listen for clicks on the grid
}

//place this within a function that is called uptop after the createGrid function
// document.querySelectorAll('.cell').forEach(cell => {
//     cell.addEventListener('click', function(e){
//         e.target.style.backgroundColor = 'black';
//     });
// });

// const gridContain = document.getElementById('gridContainer');

// gridContain.addEventListener('click', (e) => {
//     if(e.target.classList.contains('cell')){
//         console.log('popcoreRock');
//     }
// });

// cells.forEach((cell) => {
//     console.log('popcorn2');
//     cell.addEventListener('click', () => {
//         console.log("popcorn");
//         this.style.backgroundColor = 'black';
//     });
// });