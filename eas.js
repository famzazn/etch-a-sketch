const container = document.querySelector(".container");

let a = 17

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    a = prompt('Enter a number')
    document.querySelectorAll('.container').forEach((element) => {
        element.innerHTML = "";
    }) 
    grid();
})


function grid() {
    for (i = 1; i < a; i++) {
        const cont = document.createElement("div");
        cont.classList.add("cont");
        container.appendChild(cont);
    
        for (let j = 1; j < a; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            cont.appendChild(grid);  
        }
        
    }
    
    
    // querySelectorAll makes NodeList of all "grid" divs which acts like an array //
    const gridcells = document.querySelectorAll('.grid'); 
    
    // Can now use forEach() to go through every single grid div to specify color input //
    gridcells.forEach((cell) => cell.addEventListener('mouseover', color));
    
    function color(e) {
        console.log('pass through cell');
        e.target.style.backgroundColor = 'red'
    }
    
}

grid();


