//não
const nao1 = document.getElementById('nao-1');
const nao2 = document.getElementById('nao-2');
const nao3 = document.getElementById('nao-3');
const nao4 = document.getElementById('nao-4');
//sim
const sim = document.getElementById('sim');
//


nao1.addEventListener('click', (e) =>{
    if(e.target == nao1){
        nao1.style.display = "none";
        nao2.style.display = "flex"
    }
})

nao2.addEventListener('click', (e) =>{
    if(e.target == nao2){
        nao2.style.display = "none";
        nao3.style.display = "flex";
    }
})

nao3.addEventListener('click', (e) =>{
    if(e.target == nao3){
        nao3.style.display = "none";
        nao4.style.display = "flex";
    }
})

nao4.addEventListener('click', (e) =>{
    if(e.target == nao4){
        nao4.style.display = "none";
        nao1.style.display = "flex";
    }
})

sim.addEventListener('click', (e) =>{
    if(e.target == sim){
        window.location.href = "parabens.html"
    }
})