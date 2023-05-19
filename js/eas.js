//const cgButton = document.querySelector('.cgButton');//we will get rid of this button and automatically render in the grid
//const paintBlackButton = document.querySelector('.paintBlack');
//paintBlackButton.addEventListener('click', paintBlack);
let cellsNL = null;
let size = 2;
createGrid(size);
//cgButton.addEventListener('click', createGrid);
const cellsArray = Array.from(cellsNL);
cellsArray.forEach((cell) => {
    console.log(typeof cell);
});
// function paintBlack(){
//     const cellsArray = Array.from(cellsNL);
//     for(let i = 0; i < cellsArray.length; i++){
//         console.log(cellsArray[i] + i);
//         cellsArray[i].addEventListener('click', hello);
//     }
// }

function hello(){
    console.log('hello buddy');
}

// function addingEL(item){
//     console.log(item);
//     item.addEventListener('click', () => {

//     });
// }

function createGrid(size){
    let rowHeight = 25/size;
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.style.height = rowHeight + 'em';
        row.classList.add('row');
        for(let j = 0; j < size; j++){
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