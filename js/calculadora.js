(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const parametros = new URLSearchParams(window.location.search)
        const vehiculo = parametros.get('vehiculo')

        const inputPrestamo = document.querySelector("#inputPrestamo")
        const selectPlazo = document.querySelector("#selectPlazo")
        const inputTasaInteres = document.querySelector("#inputTasaInteres")
        const inputPagosMensuales = document.querySelector("#inputPagosMensuales")
        const inputTotalPagar = document.querySelector("#inputTotalPagar")
        let longitudActual = 0
        let longitudAnterior = 0

        //Formato de moneda
        const formato = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });

        //Detectar si se está calculando el prestamo para un vehículo específico
        switch (vehiculo) {
            case "1":
                inputPrestamo.value = formato.format(500000)
                break;
            case "2":
                inputPrestamo.value = formato.format(600000)
                break;
            case "3":
                inputPrestamo.value = formato.format(700000)
                break;
            case "4":
                inputPrestamo.value = formato.format(650000)
                break;
            case "5":
                inputPrestamo.value = formato.format(750000)
                break;
            case "6":
                inputPrestamo.value = formato.format(326470)
                break;
            case "7":
                inputPrestamo.value = formato.format(577070)
                break;
            case "8":
                inputPrestamo.value = formato.format(590070)
                break;
            case "9":
                inputPrestamo.value = formato.format(374970)
                break;
            case "10":
                inputPrestamo.value = formato.format(484900)
                break;
            case "11":
                inputPrestamo.value = formato.format(797400)
                break;
            case "12":
                inputPrestamo.value = formato.format(1422300)
                break;
            default:
                inputPrestamo.value = ""
                break;
        }

        //Restricción para que el usuario solo pueda ingresar números y puntos en el campo de monto del préstamo
        inputPrestamo.onkeydown = e => /[0-9.]/.test(e.key) || e.key === "Backspace" || e.key === "Delete" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Tab"

        const calcularPagosMensuales = () => {
            const montoPrestamo = parseFloat(convertirFormatoMonedaACantidad(inputPrestamo.value))
            const plazo = parseInt(selectPlazo.value)
            const tasaInteres = parseFloat(inputTasaInteres.value)
            let pagosMensuales
            let totalAPagar

            totalAPagar = montoPrestamo + (tasaInteres * montoPrestamo / 100)
            inputTotalPagar.value = formato.format(totalAPagar)

            pagosMensuales = totalAPagar / plazo
            inputPagosMensuales.value = formato.format(pagosMensuales.toFixed(2))
        }

        const convertirFormatoMonedaACantidad = cadenaMoneda => {
            // Elimina el símbolo de dólar y las comas
            const cadenaLimpia = cadenaMoneda.replace(/[$,]/g, '');

            // Convierte la cadena en un número decimal
            const cantidad = parseFloat(cadenaLimpia);

            return cantidad;
        }

        //Tasas de interes segun el plazo del préstamo
        selectPlazo.onchange = () => {
            switch (selectPlazo.value) {
                case "6":
                    inputTasaInteres.value = "30%"
                    break;
                case "12":
                    inputTasaInteres.value = "85%"
                    break;
                case "18":
                    inputTasaInteres.value = "120%"
                    break;
                case "24":
                    inputTasaInteres.value = "170%"
                    break;
            }
            if (inputPrestamo.value !== "")
                calcularPagosMensuales()
        }

        inputPrestamo.oninput = () => {
            if (inputPrestamo.value == "$.00") {
                inputPrestamo.value = ""
                inputPagosMensuales.value = ""
                inputTotalPagar.value = ""
                return true
            }
            let posicion = inputPrestamo.selectionEnd
            longitudAnterior = longitudActual
            longitudActual = inputPrestamo.value.length
            inputPrestamo.value = formato.format(parseFloat(convertirFormatoMonedaACantidad(inputPrestamo.value)))
            //Si la longitudActual del número es 5, 9, 13, 17, etc., se coloca el cursor un espacio a la derecha por el desplazamiento de la coma
            if (longitudActual > longitudAnterior) {
                inputPrestamo.selectionStart = longitudActual % 4 === 0 || longitudActual === 1 ? posicion + 1 : posicion
                inputPrestamo.selectionEnd = longitudActual % 4 === 0 || longitudActual === 1 ? posicion + 1 : posicion
            }
            //Si la longitudActual del número es 4, 8, 12, 16, etc., se coloca el cursor un espacio a la izquierda por el desplazamiento de la coma
            else if (longitudActual < longitudAnterior) {
                if (longitudActual % 4 !== 0)
                    inputPrestamo.setSelectionRange(posicion, posicion)
                else
                    inputPrestamo.setSelectionRange(posicion - 1, posicion - 1)
            }

            if (selectPlazo.value === "Selecciona un plazo" || inputTasaInteres.value === "") {
                inputPagosMensuales.value = ""
                inputTotalPagar.value = ""
            }
            else {
                calcularPagosMensuales()
            }
        }
    })
})()