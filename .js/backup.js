
// // creación de usuario y contraseña. Verificación de contraseña numérica
// let usuario = prompt("Ingrese nuevo usuario")
// let contrasena = 12345678
// let check = true
// let contrasenanum = parseInt(contrasena)
// do {
//     contrasena = prompt("Ingrese nueva contraseña de 8 numeros")
//     contrasenanum = parseInt(contrasena)
//     validarContr(contrasenanum)
//     // if (contrasena = !contrasenanum) {
//     //     check = false
//     //     console.warn("La contraseña debe contener sólo números.")
//     // } else {
//     //     check = true
//     //     console.log("Felicidades, usted ha cambiado su contraseña correctamente")
//     // }
// } while (check == false)

// function validarContr(contrasenanum) {
//     if (contrasena = !contrasenanum) {
//         check = false
//         console.warn("La contraseña debe contener sólo números.")
//     } else {
//         check = true
//         console.log("Felicidades, usted ha cambiado su contraseña correctamente")
//     }
//     return check
// }


// // uso de for para saber el saldo de caja a una determinada hora

// let cantTrans = prompt("Ingrese el total de transacciones por hora")
// let ticketProm = prompt("Ingrese el ticket promedio")
// let horadecorte = prompt("Ingrese la hora en que quiere saber el saldo de su cuenta")
// let saldo = 0

// while (horadecorte < 8 || horadecorte > 18) {
//     console.warn("Lo siento, la hora de corte debe estar entre las 8AM y las 18PM")
//     horadecorte = prompt("Ingrese una nueva hora de corte")
// }

// for (let index = 8; index < horadecorte; index++) {
//     saldo = saldo + (cantTrans * ticketProm)
// }
// console.log("El saldo a las ", horadecorte, "hs es de $ ", saldo)

// // uso de switch para evaluar artículo y talle
// let carrito = 0
// seguircomprando = true

// do {
//     articulo = prompt("Seleccione indumentaria")
//     switch (articulo) {
//         case "pantalon":
//             switch (prompt("seleccione talle")) {
//                 case "s": alert("Lo siento, No disponemos de talle.")
//                     carrito = carrito + 0
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "m": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "l": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "xl": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 default:
//                     console.warn("No se encontró el talle.")
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;

//             }
//             break;
//         case "remera":
//             switch (prompt("seleccione talle")) {
//                 case "s": alert("Lo siento, No disponemos de talle.")
//                     carrito = carrito + 0
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "m": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "l": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "xl": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 default:
//                     console.warn("No se encontró el talle.")
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;

//             }
//             break;
//         case "camisa":
//             switch (prompt("seleccione talle")) {
//                 case "s": alert("Lo siento, No disponemos de talle.")
//                     carrito = carrito + 0
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "m": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "l": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "xl": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 default:
//                     console.warn("No se encontró el talle.")
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;

//             }
//             break;
//         case "campera":
//             switch (prompt("seleccione talle")) {
//                 case "s": alert("Lo siento, No disponemos de talle.")
//                     carrito = carrito + 0
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "m": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "l": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 case "xl": console.log("Perfecto, lo añadimos al carrito. Desea seguir comprando?")
//                     carrito = carrito + 1
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;
//                 default:
//                     console.warn("No se encontró el talle.")
//                     respuesta = prompt("Desea seguir comprando SI(S) NO (N)")
//                     if (respuesta == "N") {
//                         seguircomprando = false
//                     }
//                     break;

//             }
//             break;
//         default:
//             console.warn("Lo siento no se encontró el artículo solicitado, desea seguir comprando")
//             respuesta = prompt("Desea seguir comprando SI(S) NO (N)").toUpperCase
//             if (respuesta = "N") {
//                 seguircomprando = false
//             }
//             break;
//     }
// } while (seguircomprando)
// console.log("Usted ha comprado ", carrito, " artículos.")


// debugger
// //suma de artículos
// let art1 = parseInt(prompt("Valor del artículo 1"))
// let cant1 = parseInt(prompt("Qx artículo 1"))
// let art2 = parseInt(prompt("Valor del artículo 2"))
// let cant2 = parseInt(prompt("Qx artículo 2"))

// montoAPagar()
// console.log("El total de la compra sin descuentos es $ " + total)
// console.log("El total de los descuentos es $ " + descuento)
// function calcSinDescuento(art1, art2, cant1, cant2) {
//     return total = parseFloat(art1) * parseFloat(cant1) + parseFloat(cant2) * parseFloat(art2)
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

// function montoAPagar() {
//     return console.log("El monto a abonar es de $ " + (calcSinDescuento(art1, art2, cant1, cant2) - calcularDescuentos(total)))
// }