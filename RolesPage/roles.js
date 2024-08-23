document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los botones por su ID
    const boosterButton = document.getElementById('booster');
    const bussinesButton = document.getElementById('bussines');

    // Define las URLs a las que se debe redirigir según el rol
    const boosterPageUrl = 'booster-page.html'; // Cambia a la URL de tu página para el rol Booster
    const bussinesPageUrl = 'bussines-page.html'; // Cambia a la URL de tu página para el rol Bussines

    // Agrega eventos click a los botones
    boosterButton.addEventListener('click', () => {
        window.location.href = boosterPageUrl;
    });

    bussinesButton.addEventListener('click', () => {
        window.location.href = bussinesPageUrl;
    });
});
