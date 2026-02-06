// Smooth scroll animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInSection 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.story, .image-section, .contact, .footer');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});

// Subtle parallax effect for hero logo
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroLogo = document.querySelector('.hero-logo');
            if (heroLogo && scrolled < window.innerHeight) {
                heroLogo.style.opacity = 1 - scrolled / 600;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };
    
    // Create mailto link
    const subject = encodeURIComponent('Richiesta informazioni da ' + data.name);
    const body = encodeURIComponent(
        `Nome: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Telefono: ${data.phone || 'Non fornito'}\n\n` +
        `Messaggio:\n${data.message || 'Nessun messaggio'}`
    );
    
    const mailtoLink = `mailto:info@miraseti.com?subject=${subject}&body=${body}`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    // Show success message
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Il tuo client di posta si aprirà per inviare il messaggio. Grazie!';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to contact items on hover
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Image section gradient animation
const imageSection = document.querySelector('.image-section');
if (imageSection) {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        // Subtle color shift effect
    }, 50);
}

// Add loading animation for form button
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        if (contactForm.checkValidity()) {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }
    });
}

// Fade in elements on scroll with stagger
const fadeElements = document.querySelectorAll('.story-text p, .contact-item, .footer-logo, .footer-info, .footer-links');
fadeElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                elementObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    elementObserver.observe(element);
});

// Add custom cursor effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach(element => {
    element.style.cursor = 'pointer';
});
