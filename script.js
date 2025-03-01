// Include EmailJS initialization
(function () {
    emailjs.init("_Q9PSvGMbLPdGDnqv");
})();

// Function to toggle the hamburger menu
function toggleHamburgerMenu() {
    var menu = document.getElementById("hamburger");
    if (menu.classList.contains("w3-show")) {
        menu.classList.remove("w3-show");
        menu.classList.add("w3-hide");
    } else {
        menu.classList.remove("w3-hide");
        menu.classList.add("w3-show");
    }
}

// Function to close the hamburger menu
function closeHamburgerMenu() {
    var menu = document.getElementById("hamburger");
    menu.classList.remove("w3-show");
    menu.classList.add("w3-hide");
}

// Google Tag Manager setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-VTBRRQ18QC");

// Function to set the minimum date for the date input field
function setMinDate() {
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("date").setAttribute("min", today);
}

// Function to handle the contact form submission
function setupEmailJS() {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("gmail_service", "contact_form", this).then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("✨Your message has been sent successfully!");
                window.location.reload();
            },
            function (error) {
                console.log("FAILED...", error);
                alert("⚠️Failed to send the message, please try again later!");
            }
        );
    });
}

// Function to handle scroll restoration
function setupScrollRestoration() {
    if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
    } else {
        window.onload = function () {
            window.scrollTo(0, 0);
        };
    }
}

// Function to show/hide the scroll-to-top button
function handleScroll() {
    const mybutton = document.getElementById("myBtn");
    mybutton.style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
}

// Function to scroll to the top
function topFunction() {
    document.documentElement.scrollTop = 0;
}

// Function to setup scroll progress bar
function setupScrollProgress() {
    const scrollProgress = document.getElementById("scroll-progress");
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
    });
}

// Function to initialize all event listeners
function initializeEventListeners() {
    const mybutton = document.getElementById("myBtn");
    mybutton.addEventListener("click", topFunction);

    const hamburgerButton = document.getElementById("hamburgerButton");
    if (hamburgerButton) {
        hamburgerButton.addEventListener("click", toggleHamburgerMenu);
    }

    window.onscroll = handleScroll;
}

// Ensure the DOM is fully loaded before running any functions
document.addEventListener("DOMContentLoaded", function() {
    setMinDate();
    setupEmailJS();
    setupScrollRestoration();
    setupScrollProgress();
    initializeEventListeners();
});