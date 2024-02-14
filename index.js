// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var navbar = document.getElementById('navbar');
    if (isInViewport(navbar)) {
        navbar.classList.add('visible');
        window.removeEventListener('scroll', handleScroll); // Remove event listener once nav is visible
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);




const nameText = "I'M SEJA"; // The text you want to animate
const nameSpan = document.getElementById('typedText');
let charIndexName = 0;
// Start typing animation for the name when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
typeName();
});

function typeName() {
if (charIndexName < nameText.length) {
    nameSpan.textContent += nameText.charAt(charIndexName);
    charIndexName++;
    setTimeout(typeName,600); // Adjust the typing speed by changing the delay (in milliseconds)
}
}

// Start typing animation for the name when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
typeName();
});

const aboutText = "Seja Menath epitomizes tech innovation, blending machine learning prowess with web development finesse. With an insatiable thirst for knowledge, she relentlessly explores new frontiers, pushing boundaries. Yet, her journey isn't just about mastering tech; it's about impactful solutions. Seja's resilience in adversity sets her apart, viewing setbacks as stepping stones to success. In her hands, technology becomes a tool for positive change, revolutionizing healthcare, optimizing supply chains, and empowering communities. As she charts her course, Seja embodies the future of tech—a trailblazer defining innovation and impact. Wherever her journey leads, innovation and impact follow, shaping a brighter tomorrow."; // The text you want to animate
const aboutSpan = document.getElementById('about');
let charIndexAbout = 0;

function typeAbout() {
if (charIndexAbout < aboutText.length) {
    aboutSpan.textContent += aboutText.charAt(charIndexAbout);
    charIndexAbout++;
    setTimeout(typeAbout, 3); // Adjust the typing speed by changing the delay (in milliseconds)
} else {
    // After the first animation is complete, start the second animation
    startAbout1Animation();
}
}

// Start typing animation for aboutText when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
typeAbout();
});

const about1Text = " Welcome to the online portfolio of Seja Menath, a dynamic Machine Learning (ML) engineer and adept web developer hailing from the vibrant backdrop of Sri Lanka. Despite being just 20 years old, I've showcased exceptional proficiency in both domains, highlighted by an array of projects and achievements. This portfolio website serves as a gateway to my expertise, creativity, and unwavering commitment to the realm of technology. Explore and discover how my passion translates into tangible solutions and groundbreaking innovations that shape the future."; // The text you want to animate
const about1Span = document.getElementById('about1');
let charIndexAbout1 = 0;

function typeAbout1() {
if (charIndexAbout1 < about1Text.length) {
    about1Span.textContent += about1Text.charAt(charIndexAbout1);
    charIndexAbout1++;
    setTimeout(typeAbout1, 3); // Adjust the typing speed by changing the delay (in milliseconds)
}
}

// Function to start typing animation for about1Text
function startAbout1Animation() {
setTimeout(typeAbout1, 3); // Delay the start of the second animation by 1000 milliseconds (1 second)
}








document.addEventListener("DOMContentLoaded", function () {
const pointer = document.querySelector('.pointer');

// Function to update pointer position and opacity
function updatePointerPosition(e) {
pointer.style.opacity = "0.7"; // Set opacity to 0.7
pointer.style.left = `${e.clientX}px`;
pointer.style.top = `${e.clientY}px`;
}

// Event listener for mousemove
document.addEventListener("mousemove", updatePointerPosition);

// Event listener for mouseleave
document.addEventListener("mouseleave", function () {
pointer.style.opacity = "0";
});

// Optional: Event listener for mouseenter
document.addEventListener("mouseenter", function () {
pointer.style.opacity = "7"; // Set opacity to 0.7 when mouse enters the window
});

// Optional: Event listener for window resize
window.addEventListener("resize", function () {
// Recalculate pointer position if window size changes
pointer.style.left = `${e.clientX}px`;
pointer.style.top = `${e.clientY}px`;
});
});



function speak(text) {
// Create an instance of SpeechSynthesisUtterance
var speech = new SpeechSynthesisUtterance();

// Set the text to be spoken
speech.text = text;

// Speak the text
window.speechSynthesis.speak(speech);
}

// Text to be spoken automatically
var textToSpeak = "Hello, world! This is an automatic text-to-speech example.";

// Call the speak function when the page loads
window.onload = function() {
speak(textToSpeak);
};







window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}




// Example of changing scrollbar colors dynamically
const content = document.querySelector('.content');

// Change scrollbar colors to yellow and dark black
content.style.setProperty('--scrollbar-track-color', '#333'); // Dark black
content.style.setProperty('--scrollbar-thumb-color', 'yellow');


// Get all smoke elements
const smokeElements = document.querySelectorAll('.smoke');

// Set random animation delay for each smoke element
smokeElements.forEach((smoke, index) => {
    smoke.style.animationDelay = Math.random() * 10 + 's'; // Random delay between 0s and 10s
});





// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var isValid = true;

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email format";
        isValid = false;
    }

    if (message === "") {
        messageError.innerHTML = "Message is required";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}









