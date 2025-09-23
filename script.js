
const hamberger = document.querySelector(".hamberger");
const navmenu = document.querySelector(".nav-menu");
hamberger.addEventListener("click", ()=>{
    navmenu.classList.toggle("active");

})
document.querySelectorAll("nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamberger.classList.remove("active");
    navmenu.classList.remove("active");

}))
console.log(45);
// form validation
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
