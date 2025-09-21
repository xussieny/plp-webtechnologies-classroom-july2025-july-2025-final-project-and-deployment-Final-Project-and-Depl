
        // // DOM Elements
        // const menuToggle = document.getElementById('menuToggle');
        // const navMenu = document.getElementById('navMenu');
        // const navLinks = document.querySelectorAll('.nav-link');
        // const pages = document.querySelectorAll('.page');
        // const contactForm = document.getElementById('contactForm');
        
        // // Mobile Menu Toggle
        // menuToggle.addEventListener('click', () => {
        //     navMenu.classList.toggle('active');
        // });
        
        // // Navigation
        // navLinks.forEach(link => {
        //     link.addEventListener('click', (e) => {
        //         e.preventDefault();
                
        //         // Remove active class from all links and pages
        //         navLinks.forEach(l => l.classList.remove('active'));
        //         pages.forEach(page => page.classList.remove('active'));
                
        //         // Add active class to clicked link
        //         link.classList.add('active');
                
        //         // Show corresponding page
        //         const targetPage = link.getAttribute('href').substring(1);
        //         document.getElementById(targetPage).classList.add('active');
                
        //         // Close mobile menu after clicking a link
        //         navMenu.classList.remove('active');
                
        //         // Scroll to top
        //         window.scrollTo(0, 0);
        //     });
        // });
        
        // // Form Validation
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     let isValid = true;
            
        //     // Name validation
        //     const nameInput = document.getElementById('name');
        //     const nameError = document.getElementById('nameError');
            
        //     if (nameInput.value.trim() === '') {
        //         nameError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         nameError.style.display = 'none';
        //     }
            
        //     // Email validation
        //     const emailInput = document.getElementById('email');
        //     const emailError = document.getElementById('emailError');
        //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
        //     if (!emailPattern.test(emailInput.value)) {
        //         emailError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         emailError.style.display = 'none';
        //     }
            
        //     // Message validation
        //     const messageInput = document.getElementById('message');
        //     const messageError = document.getElementById('messageError');
            
        //     if (messageInput.value.trim() === '') {
        //         messageError.style.display = 'block';
        //         isValid = false;
        //     } else {
        //         messageError.style.display = 'none';
        //     }
            
        //     // If form is valid, show success message
        //     if (isValid) {
        //         alert('Thank you for your message! We will get back to you soon.');
        //         contactForm.reset();
        //     }
        // });
        
        
// let form = document.getElementById("#contactForm")
//     function checkValidity(e) {
// e.preventDfault();
// // console.log("message submitted");
// let myInput=document.getSelectorAll("#contactForm Input");
// if (myInput [0].value.length==0){
//     myInput[0].innerHTML = '<h3> please enter your name</h3>';
//     myInput[0].style.backgroundColor="pink";
// }

// if (myInput [1].value.length==0){
//     myInput[1].innerHTML = '<h3> please enter your email</h3>';
//     myInput[1].style.backgroundColor="pink";
// }
// if (myInput [2].value.length==0){
//     myInput[2].innerHTML = '<h3> please enter your message</h3>';
//     myInput[2].style.backgroundColor="pink";
// }
// if (myInput[0].value.length !==0 && myInput[0].value.length !==0 && myInput[2].value.length!==0){
//     myInput.innerHTML = '<h3> message submitted, Thank you</h3>'
// }}

// form.addEventListener("submit", checkValidity);
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
    alert (" Message submitted , Thank you!");

}
}
form.addEventListener("submit", checkValidity);
