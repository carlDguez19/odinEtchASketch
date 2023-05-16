const button = document.querySelector('.buttonA');

button.addEventListener('click', createGrid);

function createGrid(){
    let rowHeight = 25/5;
    for(let i = 0; i < 5; i++){
        console.log("here");
        const row = document.createElement('div');
        row.style.height = rowHeight + 'em';
        row.classList.add('row');
        for(let j = 0; j < 5; j++){
            console.log(j);
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        document.querySelector('.gridContainer').appendChild(row);
    }
    //add function here that calls the code snippet at the bottom to listen for clicks on the grid
}

//place this within a function that is called uptop after the createGrid function
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function(e){
        e.target.style.backgroundColor = 'black';
    });
});