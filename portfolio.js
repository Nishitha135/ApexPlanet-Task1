// Welcome Message
window.addEventListener("load", () => {
    alert("Welcome to Nishitha's Portfolio Website 🚀");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Navigation Click Message
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Opened: " + link.textContent);
    });
});

// Contact Form Message
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you for contacting me! 😊");

    form.reset();
});

// Section Animation on Scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});

// Initial Animation State
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});