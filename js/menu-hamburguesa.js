(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const botonHamburguesa = document.querySelector(".header__boton-hamburguesa");
        botonHamburguesa.onclick = () => {
            document.body.classList.toggle("menu_visible");
        }
    })
})()