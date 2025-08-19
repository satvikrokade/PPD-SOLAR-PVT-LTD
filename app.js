document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Hero Slider Initialization (Swiper.js) ---
    const heroSlider = new Swiper('.hero-slider', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- Testimonials Slider Initialization (Swiper.js) ---
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // --- New Image Gallery Logic ---
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    function showNextImage() {
        // Remove 'active' class from the current image
        galleryImages[currentImageIndex].classList.remove('active');

        // Move to the next image, looping back to the start if at the end
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

        // Add 'active' class to the new current image
        galleryImages[currentImageIndex].classList.add('active');
    }

    // Set an interval to change the image every 2000 milliseconds (2 seconds)
    setInterval(showNextImage, 2000);


    // --- On-Scroll Animation Logic (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all required fields.');
            return;
        }

        alert(`Thank you, ${name}! Your request has been sent successfully.`);
        contactForm.reset();
    });

});