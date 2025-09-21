
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
        




let form = document.getElementById("contactForm");
function checkValidity(e){
    e.preventDefault();
let myInputs = document.querySelectorAll("#contactForm input");
if (myInputs[0].value.length === 0){
    document.getElementById("nameError").textContent = "please enter your name";
    myInputs[0].style.backgroundColor = "pink";
}
if (myInputs[1].value.length === 0){
    document.getElementById("emailError").textContent = "please enter your email";
    myInputs[1].style.backgroundColor = "pink";
}
if (myInputs[2].value.length === 0){
    document.getElementById("messageError").textContent = "please enter your message";
    myInputs[2].style.backgroundColor = "pink";
}
if (myInputs[0].value.length !== 0 && myInputs[1].value.length !== 0 && myInputs[2].value.length !== 0){
    alert(" Message submitted , Thank you!");// Show success message in a popup
        // optionally you could clear all the inputs here as well
        myInputs[0].value = "";
        myInputs[1].value = "";
        myInputs[2].value = "";

}
}
form.addEventListener("submit", checkValidity);
