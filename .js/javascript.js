// // creación de usuario y contraseña. Verificación de contraseña numérica
// // let usuario = prompt("Ingrese nuevo usuario")
// // let contrasena = 12345678
// // let check = true
// // let contrasenanum = parseInt(contrasena)
// // do {
// //     contrasena = prompt("Ingrese nueva contraseña de 8 numeros")
// //     contrasenanum = parseInt(contrasena)
// //     validarContr(contrasenanum)

// // } while (check == false)

// // function validarContr(contrasenanum) {
// //     if (contrasena = !contrasenanum) {
// //         check = false
// //         console.warn("La contraseña debe contener sólo números.")
// //     } else {
// //         check = true
// //         console.log("Felicidades, usted ha cambiado su contraseña correctamente")
// //     }
// //     return check
// // }

class Articulo {
    constructor(codigo, nombre, precio, tipo, peso, bulto, stock) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.peso = peso;
        this.bulto = bulto;
        this.stock = stock;

    }
    precioxBulto() {
        let pb = this.precio * this.bulto
        return pb.toFixed(2)
    }

    aumentarStock(cant) {
        this.stock -= cant
    }

    descontarStock(cant) {
        this.stock += cant
    }

}

const articulos = []

llenarArt()
// listarProdTabla ()
// listarProd()
// mostrarCodigosNombres()
// debugger
// buscarartPorNombre()
// debugger
// presupuestar2Art()
// debugger
// agregarProd()
// montoAPagar()

function llenarArt() {
    articulos.push(new Articulo(1, "Remera Adidas", 5000, "Remera", 100, 86, 5000));
    articulos.push(new Articulo(2, "Pantalon Adidas", 15000, "Pantalon", 500, 40, 4000))
    articulos.push(new Articulo(3, "Buzo Nike", 3500, "Buzo", 600, 40, 5000))
    articulos.push(new Articulo(4, "Zapatilla Adidas", 8000, "Zapatilla", 800, 80, 1000))
    articulos.push(new Articulo(5, "Zapatilla Puma", 9000, "Zapatilla", 800, 80, 6500))
    articulos.push(new Articulo(6, "Pantalon Puma", 7000, "Pantalon", 500, 90, 3000))
    articulos.push(new Articulo(7, "Remera Nike", 6800, "Remera", 200, 15, 8000))
    articulos.push(new Articulo(8, "Zapatilla Nike", 8200, "Zapatilla", 800, 15, 5000))
    articulos.push(new Articulo(9, "Gorra nike", 1600, "Gorra", 100, 50, 2000))
    articulos.push(new Articulo(10, "Gorra Adidas", 1200, "Gorra", 100, 60, 3000))
}



// debugger
// function Id() {
//     return parseInt(Math.random() * 100)
// }

// function listarProd() {
//     for (const Articulo of
//         articulos) {
//         console.table(Articulo)
//     }
// }

// function listarProdTabla() {
//     articulos.forEach((art) => {
//         console.table(art)

//     });
// }
// function agregarProd() {
//     let codigo = Id()
//     let nombre = prompt("Ingrese nombre del producto")
//     let precio = prompt("Ingrese precio")
//     let tipo = prompt("Ingrese tipo")
//     let peso = prompt("Ingrese peso")
//     let bulto = prompt("Ingrese cantidad por bulto")
//     let stock = prompt("Ingrese stock inicial")

//     articulos.push(new Articulo(codigo, nombre, precio, tipo, peso, bulto, stock))
// }

// function mostrarCodigosNombres() {
//     articulos.forEach((Articulo) => {
//         console.table(Articulo.codigo, Articulo.nombre)

//     })
// }

// function presupuestar2Art() {
//     let art1 = buscarartprecio()
//     let cant1 = parseInt(prompt("Qx artículo 1"))
//     let art2 = buscarartprecio()
//     let cant2 = parseInt(prompt("Qx artículo 2"))
//     montoAPagar(art1, art2, cant1, cant2)
// }

// function buscarartprecio() {
//     let productoBuscado = parseInt(prompt("Ingrese el ID a buscar"))
//     let resultado = articulos.find((art) => art.codigo === productoBuscado)
//     if (resultado !== undefined) {
//         console.clear
//         console.table(resultado.precio)
//     }

//     return resultado.precio
// }

// function buscarartPorNombre() {
//     let productoBuscado = prompt("Ingrese el nombre a buscar")
//     let resultado = articulos.filter((art) => art.nombre.includes(productoBuscado))
//     if (resultado !== undefined) {
//         console.clear
//         console.table(resultado)
//     }
// }



// debugger

// console.log("El total de la compra sin descuentos es $ " + total)
// console.log("El total de los descuentos es $ " + descuento)

// function calcSinDescuento(art1, art2, cant1, cant2) {

//     return totalBruto = parseFloat(art1) * parseFloat(cant1) + parseFloat(cant2) * parseFloat(art2)

// }

// function calcularDescuentos(suma) {
//     let codigo = parseInt(prompt("Agregue codigo de descuento"))
//     switch (codigo) {
//         case 10:
//             descuento = (codigo / 100) * suma
//             break;
//         case 15:
//             descuento = (codigo / 100) * suma
//             break;
//         case 20:
//             descuento = (codigo / 100) * suma
//             break;
//         case 30:
//             descuento = (codigo / 100) * suma
//             break;
//         default:
//             descuento = 0
//     } return descuento
// }

// function montoAPagar(art1, art2, cant1, cant2) {

//     return console.log("El monto a abonar es de $ ", calcSinDescuento(art1, art2, cant1, cant2) - calcularDescuentos(calcSinDescuento(art1, art2, cant1, cant2)))
// }

// //suma de artículos
// //seleccionar artículo en base al código
// //enviar precio del artículo



