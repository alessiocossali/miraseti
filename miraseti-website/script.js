// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Logo fade on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const logo = document.querySelector('.hero-logo');
    
    if (logo && scrolled < window.innerHeight) {
        logo.style.opacity = 1 - (scrolled / 600);
    }
    
    lastScroll = scrolled;
});
