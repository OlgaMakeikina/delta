document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const nav = document.getElementById('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});