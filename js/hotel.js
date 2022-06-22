
function Img1(){    
    // const miImg1 = document.querySelector("#habitacion");
    const miImg1 = document.getElementById("habitacion")
    miImg1.src = "../img/habitacion2.jpg"
}

function Img2(){    
    const miImg1 = document.querySelector("#habitacion");
    // const miImg1 = document.getElementById("habitacion")
    miImg1.src = "../img/habitacion3.jpg"
}

function Cotizar(){
    const nPers = document.querySelector("#nroPer").value;
    const nDias = document.querySelector("#nroDias").value;
    const nvalorPers = document.querySelector("#vlrPer").value;
    const nResultado = document.querySelector("#Resultado"); 
    const nTotal = Number(nPers) * Number(nDias) * Number(nvalorPers);
    nResultado.textContent = nTotal;
}