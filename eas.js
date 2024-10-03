const container = document.querySelector(".container");


for (i = 1; i < 17; i++) {
    const cont = document.createElement("div");
    cont.classList.add("cont");
    container.appendChild(cont);

    for (let j = 1; j < 17; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        cont.appendChild(grid);  
    }
    
}

