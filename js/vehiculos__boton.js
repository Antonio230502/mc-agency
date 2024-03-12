(() => {
    document.addEventListener('DOMContentLoaded', () => {
        //Redireccionar a la sección de detalles del vehículo correspondiente
        const botonesDetalles = document.querySelectorAll('.vehiculos__boton_detalles')
        botonesDetalles.forEach(boton => boton.onclick = () => window.location.href = `detalles.html?vehiculo=${boton.dataset.vehiculo}`)

        //Redireccionar a la calculadora de prestamos con el vehículo correspondiente
        const botonesCalculadora = document.querySelectorAll('.vehiculos__boton_calculadora')
        botonesCalculadora.forEach(boton => boton.onclick = () => window.location.href = `calculadora.html?vehiculo=${boton.dataset.vehiculo}`)
    })
})()