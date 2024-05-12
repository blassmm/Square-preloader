document.addEventListener("DOMContentLoaded", function()
{
    // Bloquear el desplazamiento hacia la sección 2
    document.body.style.overflowY = 'hidden';
    setTimeout(function() {document.body.style.overflowY = 'auto';}, 3000); // Desbloquear el desplazamiento hacia la sección 2 después de 5 segundos

    // Desaparecer el preloader + que aparezca el header con opacidad 0 hasta 1.
    var preloader_ejecutado = false;

    setTimeout(function()
    {
        if (!preloader_ejecutado)
        {
            //DOM - <header>
            var header = document.querySelector("header"); // Selecciona el primer elemento <header> en el documento
           
            header.style.transition = "opacity 5s";
            header.style.opacity = "1";

            //Manipulamos el Preloader en el DOM
            var preloader = document.querySelector('.preloader');

            preloader.style.display = "none";

            preloader_ejecutado = true;
        }
    }, 2000); // Muestra el preloader durante 2 segundos-
});


/*
document.addEventListener("DOMContentLoaded", function()
{
    var preloader_ejecutado = false;

    setTimeout(function()
    {
        if (!preloader_ejecutado)
        {
            //DOM - <header>
            var header = document.querySelector("header"); // Selecciona el primer elemento <header> en el documento
           
            header.style.transition = "opacity 5s";
            header.style.opacity = "1";

            //DOM - <main>
            var main = document.querySelector("main"); // Selecciona el primer elemento <main> en el documento
           
            main.style.display = "block";

            //Manipulamos el Preloader en el DOM
            var preloader = document.getElementsByClassName("container");

            // Iterar sobre la lista de elementos y ocultar cada uno
            for (var i = 0; i < preloader.length; i++)
            {
                preloader[i].style.display = "none"; // Oculta cada preloader
            }

            preloader_ejecutado = true;

            //Eliminamos la clase body2 del DOM
            var $body2 = document.querySelector(".body2");
            $body2.remove();
        }
    }, 2000); // Muestra el preloader durante 2 segundos-
});

*/