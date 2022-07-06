

const alertinicio = ()=> {
    Swal.fire({
            title: 'Usted está a punto de cotizar su servicio',
        text: 'La información sólo es a modo de referencia',
        imageUrl:'data:image/png;base64,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',
        html: '<p>Si ustede desea comprar puede seguir el siguiente link</p><a href=//www.facebook.com/sochideportes/>SOCHI DEPORTES</a>',
        imageWidth: 350,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
} 


const alertapresupuesto = () => {
    Swal.fire({
        title: 'Está seguro de cotizar?',
        text: "Luego de aceptar el carrito se vaciará",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cotizar!',
        cancelButtonText: 'Continuar cotizando',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Su cotización fue exitosa',
            'revise su correo.',
            'success'
          )
        }
      })

}