let size = 2;
let cellsNL = null;
createGrid(size);
//cgButton.addEventListener('click', createGrid);
for(let i = 0; i < cellsNL.length; i++){
    cellsNL[i].addEventListener('click',hello);
}

function hello(cell){
    console.log('hello');
}

function createGrid(size){
    let rowHeight = 25/size;
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.style.height = rowHeight + 'em';
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.setAttribute('id', 'cellID_test');
            cell.style.height = rowHeight + 'em';
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        document.querySelector('.gridContainer').appendChild(row);
    }
    cellsNL = document.querySelectorAll('.cell');
    //cellsArray = Array.from(cellsNL);
    //add function here that calls the code snippet at the bottom to listen for clicks on the grid
}
