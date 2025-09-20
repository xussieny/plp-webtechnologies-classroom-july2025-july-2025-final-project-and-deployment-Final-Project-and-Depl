
        // DOM Elements
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const contactForm = document.getElementById('contactForm');
        
        // Mobile Menu Toggle
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(page => page.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding page
                const targetPage = link.getAttribute('href').substring(1);
                document.getElementById(targetPage).classList.add('active');
                
                // Close mobile menu after clicking a link
                navMenu.classList.remove('active');
                
                // Scroll to top
                window.scrollTo(0, 0);
            });
        });
        
        // Form Validation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailInput.value)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Message validation
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            
            if (messageInput.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
