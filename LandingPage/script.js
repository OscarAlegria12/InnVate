document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.button');
    
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            window.location.href = '/HomePage/HomePage.html'; // Redirige a la página de inicio
        });
    }
});
