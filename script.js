// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Typing Effect
const text = "Computer Science Student | Python Developer | CV Researcher";
const typingElement = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing after a short delay
setTimeout(typeWriter, 1000);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Stats Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '').replace(',', '');
            
            // Lower inc for high numbers
            const inc = target / speed;

            if (count < target) {
                // Special formatting for 83000
                let displayNum = Math.ceil(count + inc);
                if(target > 1000) {
                    counter.innerText = displayNum.toLocaleString() + "+";
                } else {
                    counter.innerText = displayNum + "+";
                }
                setTimeout(updateCount, 20);
            } else {
                if(target > 1000) {
                     counter.innerText = target.toLocaleString() + "+";
                } else {
                    counter.innerText = target + "+";
                }
            }
        };
        updateCount();
    });
}

// Trigger counters when About section is in view
let counted = false;
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
    if(!counted && window.scrollY + window.innerHeight > aboutSection.offsetTop + 100) {
        animateCounters();
        counted = true;
    }
});