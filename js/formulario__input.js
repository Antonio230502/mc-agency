(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const inputFormulario = document.querySelector('.formulario__input')
        const vehiculos = document.querySelectorAll('.vehiculos__vehiculo')

        inputFormulario.onkeyup = () => {
            const textoFiltro = inputFormulario.value.toLowerCase()
            let coincide = true

            vehiculos.forEach(vehiculo => {
                const modelo = vehiculo.children[1].textContent.toLowerCase()
                const marca = vehiculo.children[2].textContent.toLowerCase()
                const anio = vehiculo.children[3].textContent.toLowerCase()
                coincide = modelo.includes(textoFiltro) || marca.includes(textoFiltro) || anio.includes(textoFiltro)
                !coincide ? vehiculo.classList.add('vehiculos__vehiculo_oculto') : vehiculo.classList.remove('vehiculos__vehiculo_oculto')
            })
        }
    })
})()