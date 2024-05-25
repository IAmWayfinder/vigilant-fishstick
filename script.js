
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('#hero');
    const scrollToAbout = document.querySelector('.btn');

    scrollToAbout.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            heroSection.style.backgroundSize = '110%';
        } else {
            heroSection.style.backgroundSize = 'cover';
        }
    });
});
