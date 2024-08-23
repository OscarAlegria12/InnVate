document.addEventListener('DOMContentLoaded', function() {
    const profilesLink = document.querySelector('nav ul li a[href="#"]'); // Selecciona el enlace con href="#"

    if (profilesLink) {
        profilesLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            window.location.href = '/PerfilesInnVate/Perfiles.html'; // Redirige a la página de perfiles
        });
    }
});
