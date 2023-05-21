const gridContain = document.querySelector('.gridContainer');
let size = 5;
let nlCells = createGrid(size);

for(let i = 0; i < nlCells.length; i++){
    nlCells[i].addEventListener('mouseover', black);
}

//console.log(getEventListeners(document.querySelector('.cell')));

// nlCells.forEach((cell)=>{
//     cell.addEventListener('click', () => {
//         this.classList.add('black');
//     });
// });

function black(e){
    e.target.sytle.backgroundColor = 'blue';
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