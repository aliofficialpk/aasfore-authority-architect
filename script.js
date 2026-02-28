document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger to X (optional, but nice)
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('open'));
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Simple Form Submission Logic (Placeholder for Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // If the action is not set to Formspree, we can handle it here
            // But for this project, we'll recommend Formspree in the HTML action attribute
            console.log('Form submission intercepted');
        });
    }

    // Enhanced Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Animate hero on load
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 * (index + 1));
    });

    // WhatsApp Button Animation
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        // Add fade-in animation on page load
        setTimeout(() => {
            whatsappButton.style.opacity = '0';
            whatsappButton.style.transform = 'translateY(20px)';
            setTimeout(() => {
                whatsappButton.style.transition = 'all 0.5s ease';
                whatsappButton.style.opacity = '1';
                whatsappButton.style.transform = 'translateY(0)';
            }, 100);
        }, 500);
    }

    // LinkedIn Button Animation
    const linkedinButton = document.querySelector('.linkedin-button');
    if (linkedinButton) {
        // Add fade-in animation on page load
        setTimeout(() => {
            linkedinButton.style.opacity = '0';
            linkedinButton.style.transform = 'translateY(20px)';
            setTimeout(() => {
                linkedinButton.style.transition = 'all 0.5s ease';
                linkedinButton.style.opacity = '1';
                linkedinButton.style.transform = 'translateY(0)';
            }, 100);
        }, 600);
    }
});
