const button = document.querySelector('.buttonA');

button.addEventListener('click', createGrid);

function createGrid(){
    let rowHeight = 25/50;
    for(let i = 0; i < 50; i++){
        console.log("here");
        const row = document.createElement('div');
        row.style.height = rowHeight + 'em';
        row.classList.add('row');
        for(let j = 0; j < 50; j++){
            console.log(j);
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        document.querySelector('.gridContainer').appendChild(row);
    }
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', function(e){
            e.target.style.background = 'black';
        });
    });
}