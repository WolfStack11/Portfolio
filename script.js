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


// TAG CLOUD SCRIPT

const Texts = [
    'HTML', 'CSS', 'Javascript',
    'React', 'GitHub', 'Bootstrap'
];

var tagCloud = TagCloud('.skill-globe', Texts, {
    radius: 250,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
})

var color = '#01a7c2';
document.querySelector('.skill-globe').style.color = color;


// WELCOME TEXT SCROLL

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

window.onscroll = () => {
    let pos = window.scrollY + 650;
    line1.style.left = `${pos}px`;
    line2.style.right = `${pos}px`; 
}