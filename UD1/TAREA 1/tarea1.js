        var imagen = document.getElementById("imagen");
        var boton = document.getElementById("boton");
        var contador = document.querySelector(".contador");
        var imagenActual = 1;
        var totalImagenes = 4;

        function cambiarImagen() {
            imagenActual = (imagenActual % totalImagenes) + 1;
            imagen.src = "https://picsum.photos/250/250?" + imagenActual;
            contador.textContent = "Imagen " + imagenActual + " de " + totalImagenes;
        }
        boton.addEventListener("click", cambiarImagen);