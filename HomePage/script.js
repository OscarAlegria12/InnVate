function toggleMenu() {
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('show');
}

// Opcional: Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener('click', (event) => {
    const menu = document.getElementById('profile-menu');
    const button = document.querySelector('.profile-button');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('show');
    }
});
