(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let numeroDiapositiva = 0
        const diapositivas = document.querySelectorAll('.carrusel__diapositiva')
        const indicadores = document.querySelectorAll('.carrusel__indicador')
        const controlesAnterior = document.querySelectorAll('.carrusel__control_anterior')
        const controlesSiguiente = document.querySelectorAll('.carrusel__control_siguiente')
        const botones = document.querySelectorAll(".carrusel__boton")
        const botonOfertas = document.querySelector(".ofertas__boton")

        let reiniciarConteo = false

        const actualizarCarrusel = () => {
            // Oculta todas las diapositivas e indicadores
            diapositivas.forEach(diapositiva => {
                diapositiva.classList.add('carrusel__diapositiva_oculta')
                diapositiva.classList.remove("animacionDesvanecimiento")
            })
            indicadores.forEach(indicador => indicador.classList.remove('carrusel__indicador_activo'))

            // Muestra la diapositiva e indicador actual
            numeroDiapositiva = (numeroDiapositiva + 1) % diapositivas.length
            diapositivas[numeroDiapositiva].classList.remove('carrusel__diapositiva_oculta')
            // diapositiva.classList.add("animacionDesvanecimiento")
            indicadores[numeroDiapositiva].classList.add('carrusel__indicador_activo')
        }

        // Cambiar la diapositiva cada 5 segundos
        setInterval(() => {
            //En caso de que se haya cambiado manualmente la diapositiva hay que reiniciar la cuenta regresiva para que cambie a la siguiente diapositiva
            if (reiniciarConteo) {
                reiniciarConteo = false
                numeroDiapositiva += 3
                setTimeout(actualizarCarrusel, 4000)
            }
            else
                actualizarCarrusel()
        }, 5000)

        //Cambiar a la diapositiva anterior
        controlesAnterior.forEach(controlAnterior => {
            controlAnterior.onclick = () => {
                reiniciarConteo = true
                numeroDiapositiva = (numeroDiapositiva - 2 + diapositivas.length) % diapositivas.length
                actualizarCarrusel()
            }
        })

        //Cambiar a la diapositiva siguiente
        controlesSiguiente.forEach(controlSiguiente => {
            controlSiguiente.onclick = () => {
                reiniciarConteo = true
                actualizarCarrusel()
            }
        })

        // cambiar de diapositiva según el indicador que se presione
        indicadores.forEach((indicador, i) => {
            indicador.onclick = () => {
                reiniciarConteo = true
                numeroDiapositiva = i - 1
                actualizarCarrusel()
            }
        })

        //Redireccionar a la página de vehículos cuando se presionen los botones de las diapositivas
        botones.forEach(boton => boton.onclick = () => window.location.href = "vehiculos.html")

        //Redireccionar a la página de vehículos cuando se presione el botón de ver ofertas
        botonOfertas.onclick = () => window.location.href = "vehiculos.html"
    })
})()