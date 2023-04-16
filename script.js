// NAVBAR SCROLL

let lastScrollY = 0;
const navbar = document.querySelector ('nav');
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
})