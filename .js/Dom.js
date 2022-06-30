const principal = document.getElementById("principal")
const servicios = document.getElementById("servicios")
const servicios2 = document.getElementById("servicios2")
const botonpres = document.getElementById("botonpres")

const formul = document.getElementsByClassName("form-label")
const mb3 = document.getElementsByClassName("mb-3")
const arti = document.getElementsByClassName("art")



console.log(principal.innerText)

const caracteristicas = ['codigo', 'nombre', 'precio', 'tipo', 'peso', 'bulto', 'stock']
const presupuesto = []
const productPresup = ['PROD1', 'PRODU2', 'PROD3', 'PROD4', 'PROD5', 'PROD6', 'PROD7']




presupuestar()

function presupuestar() {
    botonpres.addEventListener("click", ()=>{alertapresup()})
}

function alertapresup() {
    servicios2.innerText = "CARGAR PRODUCTOS"
    console.log(servicios2.innerText)
    const subtitulo = document.createElement("p")
    subtitulo.innerHTML = "Favor de cargar tocar los productos a presupuestar"
    document.body.append(subtitulo)
    arti.innerText=""
    
    for (const prod of productPresup) {
const lab = document.createElement("li")
lab.innerText = prod + prompt("Nombre del artículo")
presupuesto.push(prod)
document.body.append(prod)
    }
}

// function cargarcarrito(art) {
//     for (const art of presupuesto) {
//         presupuesto.push(art)
//         const li = document.createElement("li")
//         li.innerText = art
//         li.id = art + "pres"
//         li.addEventListener

//     }
// }

// cargarProd()
// function cargarProd() {
//     for (const caract of articulos) {
//         const dato = document.createElement("li")
//         dato.innerText = caract
//         formul.append(dato)
//         // mb3.innerHTML += "<label>" + caract +"</label>"

//     }
// }




