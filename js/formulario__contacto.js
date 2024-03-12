(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const btnEnviar = document.querySelector("#btnEnviar")
        const formulario = document.querySelector("#formularioContacto")
        const inputs = document.querySelectorAll(".formulario__input")
        const textArea = document.querySelector(".formulario__textarea")

        //Inicializar mensajes de error
        inputs[0].setCustomValidity("Por favor, ingresa tu nombre")
        inputs[1].setCustomValidity("Por favor, ingresa tu correo")
        inputs[2].setCustomValidity("Por favor, ingresa tu teléfono")
        textArea.setCustomValidity("Por favor, describe tu problema, queja o sugerencia")

        //Impedir que los usuarios ingresen contenido invalido en los inputs
        //En el campo de nombre solo se permiten letras y espacios
        inputs[0].onkeydown = e => /[a-zA-Z ]/.test(e.key)
        //En el campo de correo solo se permiten letras, números, arroba, guiones, puntos y guiones bajos
        inputs[1].onkeydown = e => /[a-zA-Z0-9@._-]/.test(e.key)
        //En el campo de teléfono solo se permiten números, la tecla de retroceso, la tecla de suprimir y las teclas de flecha izquierda y derecha
        inputs[2].onkeydown = e => /[0-9]/.test(e.key) || e.key === "Backspace" || e.key === "Delete" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Tab"
        //En el campo de comentarios se permiten todos los caracteres

        const validarInputs = () => {
            let mensajeError = ""

            //Validar que el nombre del usuario no esté vacío
            mensajeError = inputs[0].validity.valueMissing ? "Por favor, ingresa tu nombre" : ""
            inputs[0].setCustomValidity(mensajeError)

            //Validaciones para el campo de email
            if (inputs[1].validity.valueMissing)
                mensajeError = "Por favor, ingresa tu correo"
            else if (inputs[1].validity.typeMismatch)
                mensajeError = "Por favor, ingresa un correo válido (ejemplo@gmail.com)"
            else
                mensajeError = ""
            inputs[1].setCustomValidity(mensajeError)

            //Validaciones para el campo de teléfono
            if (inputs[2].validity.valueMissing)
                mensajeError = "Por favor, ingresa tu teléfono"
            else if (inputs[2].validity.patternMismatch)
                mensajeError = "El número de teléfono solo puede contener digitos numéricos (0-9) sin guiones ni espacios"
            else if (inputs[2].validity.tooShort || inputs[2].validity.tooLong)
                mensajeError = "El número de teléfono debe tener 10 dígitos"
            else
                mensajeError = ""
            inputs[2].setCustomValidity(mensajeError)

            //Validar que el campo de comentarios no esté vacío
            mensajeError = textArea.validity.valueMissing ? "Por favor, describe tu problema, queja o sugerencia" : ""
            textArea.setCustomValidity(mensajeError)
        }

        inputs.forEach(input => input.oninput = validarInputs)
        textArea.oninput = validarInputs

        formulario.onsubmit = e => {
            e.preventDefault()

            btnEnviar.value = 'Enviando...';

            const serviceID = 'service_ac6bc8p';
            const templateID = 'template_iw4z2op';

            //Función para enviar los correos con el servicio de EmailJS
            emailjs.sendForm(serviceID, templateID, formulario)
                .then(() => {
                    btnEnviar.value = 'Enviar';
                    alert('¡Correo enviado exitosamente!');
                    inputs.forEach(input => input.value = "")
                    textArea.value = ""
                }, err => {
                    btnEnviar.value = 'Enviar';
                    alert(JSON.stringify(err));
                });
        }
    })
})()