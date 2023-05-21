const gridContain = document.querySelector('.gridContainer');
let size = 5;
let nlCells = createGrid(size);

nlCells.forEach((cell)=>{
    cell.addEventListener('click', () => {
        this.classList.add('black');
    });
});

function black(e){
    this.classList.add('black');
}

function createGrid(size){
    let hnw = 25/size;
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.style.width = hnw + 'em';
            cell.style.height = hnw + 'em';
            cell.classList.add('cell');
            //cell.classList.add('black');
            row.appendChild(cell);
        }
        gridContain.appendChild(row);
    }
    return document.querySelectorAll('.cell');
}//end createGrid