// ===========================
// PASI MFALME - SCRIPT.JS
// ===========================

// PRELOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }, 1200);
    }
});

// STICKY NAVBAR
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            if (navLinks) {
                navLinks.classList.remove("active");
            }
        }

    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();

// COUNTER
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let count = 0;

                const update = () => {

                    const increment = target / 100;

                    if (count < target) {

                        count += increment;

                        counter.innerHTML = Math.ceil(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerHTML = target + "+";

                    }

                };

                update();

                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => observer.observe(counter));

}

// TESTIMONIALS
const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

    let current = 0;

    function showSlide(index) {

        testimonials.forEach(item => {

            item.style.display = "none";

        });

        testimonials[index].style.display = "block";

    }

    showSlide(current);

    setInterval(() => {

        current++;

        if (current >= testimonials.length) {

            current = 0;

        }

        showSlide(current);

    }, 5000);

}

// GALLERY LIGHTBOX
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");

if (galleryImages.length > 0 && lightbox && lightboxImg) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// DARK MODE
const darkBtn = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

// BACK TO TOP
const topBtn = document.querySelector(".topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ===========================
HERO BACKGROUND SLIDESHOW
=========================== */

const hero = document.querySelector(".hero");

if(hero){

const backgrounds=[

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg",
"images/hero4.jpg"

];

let current=0;

setInterval(()=>{

current++;

if(current>=backgrounds.length){

current=0;

}

hero.style.backgroundImage=`url(${backgrounds[current]})`;

},5000);

}
/*==========================
BOOKING FORM
===========================*/

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const phone=document.getElementById("phone").value;

const service=document.getElementById("service").value;

const date=document.getElementById("date").value;

const location=document.getElementById("location").value;

const message=document.getElementById("message").value;

const text=`*PASI MFALME - ODA MPYA*%0A%0A
👤 Jina: ${name}%0A
📞 Simu: ${phone}%0A
🧺 Huduma: ${service}%0A
📅 Tarehe: ${date}%0A
📍 Pickup: ${location}%0A
📝 Maelezo: ${message}`;

window.open(`https://wa.me/255683433406?text=${text}`,"_blank");

});

}