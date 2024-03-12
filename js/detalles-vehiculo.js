(() => {
    document.addEventListener('DOMContentLoaded', () => {
        //Obtene el valor de detalles.htmnl?vehiculo=
        const parametros = new URLSearchParams(window.location.search)
        const vehiculo = parametros.get('vehiculo')
        //Obtener la sección donde se colocaran los detalles del vehículos
        const detalles = document.querySelector('.detalles-vehiculo')

        //Datos del vehículo dependiendo del identificador obtenido en el parámetro
        switch (vehiculo) {
            case '1':
                detalles.children[0].innerHTML = 'Nissan Z'
                detalles.children[1].src = 'img/vehiculos/carro1.jpg'
                detalles.children[2].innerHTML = '2023'
                detalles.children[3].innerHTML = '$500,000'
                detalles.children[4].innerHTML = `El Nuevo Nissan Z es un emocionante auto deportivo que combina velocidad, fuerza y seguridad.
            <br><br>
            El Nissan Z está equipado con un motor V6 de 3.0 litros Twin Turbo que genera 400 caballos de fuerza y 350 lb-pie de torque.
            Ofrece un control de lanzamiento (Launch Control) para una aceleración impresionante.
            <br><br>
            Cuenta con una pantalla táctil de 8 pulgadas que admite Apple CarPlay y Android Auto.
            El sistema de audio Bose® con 8 bocinas garantiza una experiencia de sonido excepcional.
            Además, ofrece NissanConnect® Services para mayor conectividad.
            <br><br>
            El interior del Nissan Z es ergonómico y confortable, permitiéndote disfrutar al máximo de la conducción.
            Su diseño exterior refleja la esencia de un guerrero samurái, con líneas agresivas y una apariencia imponente.
            <br><br>
            En resumen, el Nuevo Nissan Z es un vehículo que combina la pasión por la velocidad con la seguridad y la elegancia. ¡Un verdadero guerrero en la carretera! 🚗💨`
                break;
            case '2':
                detalles.children[0].innerHTML = 'Nissan Altima'
                detalles.children[1].src = 'img/vehiculos/carro2.jpg'
                detalles.children[2].innerHTML = '2023'
                detalles.children[3].innerHTML = '$600,000'
                detalles.children[4].innerHTML = `El Nuevo Nissan Altima es un sedán mediano que combina eficiencia, tecnología avanzada y un diseño elegante.
            <br><br>
            El Nissan Altima está equipado con un motor 2.5 litros de 4 cilindros que genera 188 caballos de fuerza y 180 lb-pie de torque.
            <br><br>
            Ofrece una transmisión Xtronic CVT® que garantiza una conducción suave y eficiente.
            <br><br>
            Además, cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control.
            <br><br>
            El interior del Nissan Altima es espacioso y confortable, con asientos Zero Gravity que garantizan una postura ergonómica.
            <br><br>
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Nissan Altima es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '3':
                detalles.children[0].innerHTML = 'Nissan Pathfinder'
                detalles.children[1].src = 'img/vehiculos/carro3.jpg'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$700,000'
                detalles.children[4].innerHTML = `El Nuevo Nissan Pathfinder es un SUV mediano diseñado para la aventura.
            <br><br>
            El Nissan Pathfinder está equipado con un motor V6 de 3.5 litros que genera 284 caballos de fuerza y 259 lb-pie de torque.
            Ofrece una capacidad de remolque de hasta 6,000 libras, ideal para transportar equipos pesados.
            <br><br>
            Cuenta con un sistema de tracción 4x4 que brinda mayor estabilidad y control en terrenos difíciles.
            Además, ofrece un modo de conducción todoterreno que se adapta a diferentes condiciones de manejo.
            <br><br>
            El interior del Nissan Pathfinder es espacioso y confortable, con asientos de cuero y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es robusto y elegante, con líneas aerodinámicas y una parrilla imponente.
            <br><br>
            En resumen, el Nuevo Nissan Pathfinder es un vehículo que combina la potencia con la comodidad, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la aventura! 🚗💨`
                break;
            case '4':
                detalles.children[0].innerHTML = 'Nissan X-Trail'
                detalles.children[1].src = 'img/vehiculos/carro4.jpg'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$650,000'
                detalles.children[4].innerHTML = `El Nuevo Nissan X-Trail es un SUV líder en diseño y tecnología. Ideal para la ciudad y la aventura.
            <br><br>
            El Nissan X-Trail está equipado con un motor 2.5 litros de 4 cilindros que genera 170 caballos de fuerza y 175 lb-pie de torque.
            Ofrece una transmisión Xtronic CVT® que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción todoterreno que se adapta a terrenos difíciles.
            <br><br>
            El interior del Nissan X-Trail es espacioso y confortable, con asientos Zero Gravity que garantizan una postura ergonómica.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Nissan X-Trail es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '5':
                detalles.children[0].innerHTML = 'Nissan Sentra'
                detalles.children[1].src = 'img/vehiculos/carro5.jpg'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$750,000'
                detalles.children[4].innerHTML = ` El Nuevo Nissan Sentra 2024 es un sedán con un diseño audaz y características avanzadas.
            <br><br>
            El Nissan Sentra está equipado con un motor 2.0 litros de 4 cilindros que genera 149 caballos de fuerza y 146 lb-pie de torque.
            Ofrece una transmisión Xtronic CVT® que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción deportivo que se adapta a diferentes estilos de manejo.
            <br><br>
            El interior del Nissan Sentra es espacioso y confortable, con asientos Zero Gravity que garantizan una postura ergonómica.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Nissan Sentra es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '6':
                detalles.children[0].innerHTML = 'Volkswagen Virtus'
                detalles.children[1].src = 'img/vehiculos/carro6.webp'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$326,470'
                detalles.children[4].innerHTML = `El Nuevo Volkswagen Virtus 2024 es un sedán que combina diseño, tecnología avanzada y rendimiento.
            <br><br>
            El Volkswagen Virtus está equipado con un motor 1.6 litros de 4 cilindros que genera 110 caballos de fuerza y 115 lb-pie de torque.
            Ofrece una transmisión automática de 6 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción deportivo que se adapta a diferentes estilos de manejo.
            <br><br>
            El interior del Volkswagen Virtus es espacioso y confortable, con asientos ergonómicos y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Volkswagen Virtus es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '7':
                detalles.children[0].innerHTML = 'Volkswagen Tiguan'
                detalles.children[1].src = 'img/vehiculos/carro7.webp'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$577,070'
                detalles.children[4].innerHTML = `El Nuevo Volkswagen Tiguan 2024 es un SUV mediano que combina diseño, tecnología avanzada y rendimiento.
            <br><br>
            El Volkswagen Tiguan está equipado con un motor 2.0 litros de 4 cilindros que genera 184 caballos de fuerza y 221 lb-pie de torque.
            Ofrece una transmisión automática de 8 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción todoterreno que se adapta a terrenos difíciles.
            <br><br>
            El interior del Volkswagen Tiguan es espacioso y confortable, con asientos de cuero y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Volkswagen Tiguan es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '8':
                detalles.children[0].innerHTML = 'Volkswagen Taos'
                detalles.children[1].src = 'img/vehiculos/carro8.webp'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$590,070'
                detalles.children[4].innerHTML = `El Nuevo Volkswagen Taos 2024 es un SUV compacto que combina diseño, tecnología avanzada y rendimiento. Ideal para la ciudad y la aventura.
            <br><br>
            El Volkswagen Taos está equipado con un motor 1.4 litros de 4 cilindros que genera 150 caballos de fuerza y 184 lb-pie de torque.
            Ofrece una transmisión automática de 8 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción todoterreno que se adapta a terrenos difíciles.
            <br><br>
            El interior del Volkswagen Taos es espacioso y confortable, con asientos de cuero y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Volkswagen Taos es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '9':
                detalles.children[0].innerHTML = 'Nissan Polo'
                detalles.children[1].src = 'img/vehiculos/carro9.webp'
                detalles.children[2].innerHTML = '2024'
                detalles.children[3].innerHTML = '$374,970'
                detalles.children[4].innerHTML = `El Nuevo Volkswagen Polo 2024 es un hatchback compacto que combina diseño, tecnología avanzada y rendimiento. Ideal para la ciudad y la aventura.
            <br><br>
            El Volkswagen Polo está equipado con un motor 1.6 litros de 4 cilindros que genera 110 caballos de fuerza y 115 lb-pie de torque.
            Ofrece una transmisión automática de 6 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción deportivo que se adapta a diferentes estilos de manejo.
            <br><br>
            El interior del Volkswagen Polo es espacioso y confortable, con asientos ergonómicos y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Volkswagen Polo es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '10':
                detalles.children[0].innerHTML = 'Toyota Prius'
                detalles.children[1].src = 'img/vehiculos/carro10.png'
                detalles.children[2].innerHTML = '2020'
                detalles.children[3].innerHTML = '$484,900'
                detalles.children[4].innerHTML = `El Nuevo Toyota Prius 2024 es un híbrido que combina eficiencia, tecnología avanzada y rendimiento. Ideal para la ciudad y el medio ambiente.
            <br><br>
            El Toyota Prius está equipado con un motor híbrido de 1.8 litros que genera 121 caballos de fuerza y 105 lb-pie de torque.
            Ofrece una transmisión automática de 6 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción deportivo que se adapta a diferentes estilos de manejo.
            <br><br>
            El interior del Toyota Prius es espacioso y confortable, con asientos ergonómicos y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Toyota Prius es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '11':
                detalles.children[0].innerHTML = 'Toyota RAV4 HEV'
                detalles.children[1].src = 'img/vehiculos/carro11.png'
                detalles.children[2].innerHTML = '2021'
                detalles.children[3].innerHTML = '$797,400'
                detalles.children[4].innerHTML = `El Nuevo Toyota RAV4 HEV 2024 es un SUV híbrido que combina diseño, tecnología avanzada y rendimiento. Ideal para la ciudad y la aventura.
            <br><br>
            El Toyota RAV4 HEV está equipado con un motor híbrido de 2.5 litros que genera 219 caballos de fuerza y 163 lb-pie de torque.
            Ofrece una transmisión automática de 6 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción delantera que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción todoterreno que se adapta a terrenos difíciles.
            <br><br>
            El interior del Toyota RAV4 HEV es espacioso y confortable, con asientos de cuero y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Toyota RAV4 HEV es un vehículo que combina la eficiencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para la ciudad! 🚗💨`
                break;
            case '12':
                detalles.children[0].innerHTML = 'Toyota Tundra HEV'
                detalles.children[1].src = 'img/vehiculos/carro12.png'
                detalles.children[2].innerHTML = '2021'
                detalles.children[3].innerHTML = '$1,420,300'
                detalles.children[4].innerHTML = `El Nuevo Toyota Tundra HEV 2024 es una pick-up híbrida que combina potencia, tecnología avanzada y rendimiento. Ideal para el trabajo y la aventura.
            <br><br>
            El Toyota Tundra HEV está equipado con un motor híbrido de 3.5 litros que genera 437 caballos de fuerza y 583 lb-pie de torque.
            Ofrece una transmisión automática de 10 velocidades que garantiza una conducción suave y eficiente.
            <br><br>
            Cuenta con un sistema de tracción 4x4 que brinda mayor estabilidad y control en diferentes condiciones de manejo.
            Además, ofrece un modo de conducción todoterreno que se adapta a terrenos difíciles.
            <br><br>
            El interior del Toyota Tundra HEV es espacioso y confortable, con asientos de cuero y un sistema de entretenimiento para los pasajeros.
            Su diseño exterior es moderno y sofisticado, con líneas aerodinámicas y una parrilla en forma de V.
            <br><br>
            En resumen, el Nuevo Toyota Tundra HEV es un vehículo que combina la potencia con la elegancia, ofreciendo una experiencia de conducción excepcional. ¡El compañero ideal para el trabajo y la aventura! 🚗💨`
                break;
        }
    })
})()