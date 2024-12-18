document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.link a');
    const navToggle = document.createElement('div');

    // Create a toggle button for mobile navigation
    navToggle.classList.add('nav__toggle');
    navToggle.innerHTML = '<i class="ri-menu-line"></i>';
    navbar.appendChild(navToggle);

    // Add event listener for the toggle button to show/hide navigation links
    navToggle.addEventListener('click', function() {
        const navLinksContainer = document.querySelector('.nav__links');
        navLinksContainer.classList.toggle('show');
    });

    // Add event listener for window scroll to change navbar background color
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '5px 20px';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '10px 20px';
        }
    });

    // Add event listeners for hover effect on navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff6347';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
