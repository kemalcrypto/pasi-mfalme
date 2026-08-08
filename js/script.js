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
/*=========================
MOBILE MENU
=========================*/

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("navbar");

if(menuToggle && mobileNav){

    menuToggle.addEventListener("click",()=>{

        mobileNav.classList.toggle("active");

        if(mobileNav.classList.contains("active")){

            menuToggle.innerHTML='<i class="fas fa-times"></i>';

        }else{

            menuToggle.innerHTML='<i class="fas fa-bars"></i>';

        }

    });

}


/* =========================================
   PASI MFALME AI ASSISTANT
   PROFESSIONAL VERSION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const aiOpen = document.getElementById("aiOpen");
    const aiClose = document.getElementById("aiClose");
    const aiChatBox = document.getElementById("aiChatBox");
    const aiInput = document.getElementById("aiInput");
    const aiSend = document.getElementById("aiSend");
    const aiMessages = document.getElementById("aiMessages");

    if (
        !aiOpen ||
        !aiClose ||
        !aiChatBox ||
        !aiInput ||
        !aiSend ||
        !aiMessages
    ) {
        console.error("Pasi Mfalme AI: Element haijapatikana.");
        return;
    }


    /* =========================================
       ORDER DATA
    ========================================= */

    let order = {
        service: "",
        quantity: "",
        location: "",
        name: "",
        phone: ""
    };

    let orderStep = 0;


    /* =========================================
       OPEN AI
    ========================================= */

    aiOpen.addEventListener("click", function () {

        aiChatBox.classList.add("active");

        setTimeout(function () {
            aiInput.focus();
        }, 200);

    });


    /* =========================================
       CLOSE AI
    ========================================= */

    aiClose.addEventListener("click", function () {

        aiChatBox.classList.remove("active");

    });


    /* =========================================
       SEND BUTTON
    ========================================= */

    aiSend.addEventListener("click", function () {

        sendMessage();

    });


    /* =========================================
       ENTER KEY
    ========================================= */

    aiInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();

        }

    });


    /* =========================================
       SEND MESSAGE
    ========================================= */

    function sendMessage() {

        const message = aiInput.value.trim();

        if (!message) {
            return;
        }

        addMessage(message, "user");

        aiInput.value = "";


        /* ORDER PROCESS */

        if (orderStep > 0) {

            processOrder(message);

            return;

        }


        /* NORMAL RESPONSE */

        setTimeout(function () {

            const response = getResponse(message);

            if (response) {

                addMessage(response, "bot");

            }

        }, 350);

    }


    /* =========================================
       ADD MESSAGE
    ========================================= */

    function addMessage(message, type) {

        const div = document.createElement("div");

        div.className = "ai-message " + type;

        div.innerHTML = message;

        aiMessages.appendChild(div);

        aiMessages.scrollTop = aiMessages.scrollHeight;

        return div;

    }


    /* =========================================
       AI RESPONSE
    ========================================= */

    function getResponse(message) {

        const text = message.toLowerCase().trim();


        /* ================================
           SALAMU
        ================================= */

        if (
            text.includes("habari") ||
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("mambo") ||
            text.includes("hujambo")
        ) {

            return `
                Habari 👑 Karibu <b>Pasi Mfalme</b>.
                <br><br>
                Nikusaidie nini leo?
                <br><br>

                🧺 Huduma zetu<br>
                📦 Kuweka oda<br>
                🚚 Pickup & Delivery<br>
                💰 Bei za huduma
            `;

        }


        /* ================================
           HUDUMA
        ================================= */

        if (
            text.includes("huduma") ||
            text.includes("service") ||
            text.includes("mnafanya nini") ||
            text.includes("huduma gani")
        ) {

            return `
                <b>Huduma za Pasi Mfalme 👑</b>
                <br><br>

                🧺 <b>Kufua Nguo</b>
                <br>
                Tunafua nguo zako kwa usafi na uangalifu.
                <br><br>

                👔 <b>Kupiga Pasi</b>
                <br>
                Tunapiga pasi nguo zako kwa umakini.
                <br><br>

                ✨ <b>Dry Cleaning</b>
                <br>
                Kwa nguo zinazohitaji huduma maalum ya usafi.
                <br><br>

                🛏️ <b>Mashuka & Mapazia</b>
                <br><br>

                🚚 <b>Pickup & Delivery</b>
                <br>
                Tunasaidia kuchukua na kupeleka nguo kwa maeneo yanayohudumiwa.
            `;

        }


        /* ================================
           BEI
        ================================= */

        if (
            text.includes("bei") ||
            text.includes("gharama") ||
            text.includes("price") ||
            text.includes("shilingi")
        ) {

            return `
                <b>Bei za Pasi Mfalme 👑</b>
                <br><br>

                Kwa sasa bei zinaandaliwa kulingana na aina ya huduma na idadi ya nguo.
                <br><br>

                Ili kupata bei sahihi, unaweza kuweka oda hapa au kuwasiliana nasi moja kwa moja.
                <br><br>

                📦 Bonyeza <b>Weka Oda</b> kuanza.
            `;

        }


        /* ================================
           PICKUP
        ================================= */

        if (
            text.includes("pickup") ||
            text.includes("delivery") ||
            text.includes("chukua") ||
            text.includes("peleka")
        ) {

            return `
                <b>Pickup & Delivery 🚚</b>
                <br><br>

                Pasi Mfalme tunatoa huduma ya kuchukua na kupeleka nguo kwa maeneo yanayohudumiwa.
                <br><br>

                Ukiwa tayari kuweka oda, bonyeza:
                <br><br>

                📦 <b>Weka Oda</b>
            `;

        }


        /* ================================
           LOCATION
        ================================= */

        if (
            text.includes("mlipo") ||
            text.includes("wapi") ||
            text.includes("eneo") ||
            text.includes("location")
        ) {

            return `
                <b>Pasi Mfalme 👑</b>
                <br><br>

                Tunapatikana:
                <br>
                📍 <b>Manzese, Argentina — Dar es Salaam</b>
                <br><br>

                Pia tunatoa huduma ya Pickup & Delivery kwa maeneo yanayohudumiwa.
            `;

        }


        /* ================================
           ORDER
        ================================= */

        if (
            text.includes("oda") ||
            text.includes("order") ||
            text.includes("kuweka oda") ||
            text.includes("nataka oda")
        ) {

            startOrder();

            return "";

        }


        /* ================================
           CONTACT
        ================================= */

        if (
            text.includes("wasiliana") ||
            text.includes("contact") ||
            text.includes("namba") ||
            text.includes("simu")
        ) {

            return `
                <b>Wasiliana na Pasi Mfalme 👑</b>
                <br><br>

                📱 WhatsApp / Simu:
                <br>
                <b>0683 433 406</b>
                <br><br>

                📍 Manzese, Argentina — Dar es Salaam
                <br><br>

                Unaweza pia kuweka oda moja kwa moja kupitia AI Assistant.
            `;

        }


        /* ================================
           DEFAULT
        ================================= */

        return `
            Samahani, sijaelewa vizuri swali lako.
            <br><br>

            Naweza kukusaidia kuhusu:
            <br><br>

            🧺 <b>Huduma</b><br>
            📦 <b>Kuweka Oda</b><br>
            🚚 <b>Pickup & Delivery</b><br>
            💰 <b>Bei</b><br>
            📞 <b>Wasiliana Nasi</b>
            <br><br>

            Mfano unaweza kuandika:
            <br>
            <b>"Nataka kuweka oda"</b>
        `;

    }


    /* =========================================
       START ORDER
    ========================================= */

    function startOrder() {

        order = {
            service: "",
            quantity: "",
            location: "",
            name: "",
            phone: ""
        };

        orderStep = 1;


        addMessage(`
            <b>Karibu kwenye mfumo wa oda 👑</b>
            <br><br>

            Tutakusaidia kuweka oda yako hatua kwa hatua.
            <br><br>

            <b>Hatua ya 1/5</b>
            <br><br>

            Unahitaji huduma gani?
            <br><br>

            🧺 Kufua Nguo<br>
            👔 Kupiga Pasi<br>
            ✨ Dry Cleaning<br>
            🛏️ Mashuka & Mapazia

        `, "bot");

    }


    /* =========================================
       PROCESS ORDER
    ========================================= */

    function processOrder(message) {


        /* STEP 1 */

        if (orderStep === 1) {

            order.service = message;

            orderStep = 2;

            addMessage(`
                Sawa 👑
                <br><br>

                <b>Hatua ya 2/5</b>
                <br><br>

                Una nguo ngapi?
                <br><br>

                Mfano: <b>10</b>
            `, "bot");

            return;

        }


        /* STEP 2 */

        if (orderStep === 2) {

            order.quantity = message;

            orderStep = 3;

            addMessage(`
                Vizuri.
                <br><br>

                <b>Hatua ya 3/5</b>
                <br><br>

                Upo eneo gani?
                <br><br>

                Mfano: <b>Manzese</b>
            `, "bot");

            return;

        }


        /* STEP 3 */

        if (orderStep === 3) {

            order.location = message;

            orderStep = 4;

            addMessage(`
                Tumepokea eneo lako.
                <br><br>

                <b>Hatua ya 4/5</b>
                <br><br>

                Tafadhali andika jina lako.
            `, "bot");

            return;

        }


        /* STEP 4 */

        if (orderStep === 4) {

            order.name = message;

            orderStep = 5;

            addMessage(`
                Asante, <b>${order.name}</b>.
                <br><br>

                <b>Hatua ya 5/5</b>
                <br><br>

                Tafadhali weka namba yako ya simu.
            `, "bot");

            return;

        }


        /* STEP 5 */

        if (orderStep === 5) {

            order.phone = message;

            orderStep = 0;

            showOrderSummary();

        }

    }


    /* =========================================
       ORDER SUMMARY
    ========================================= */

    function showOrderSummary() {

        addMessage(`
            <b>Oda yako iko tayari 👑</b>

            <br><br>

            🧺 <b>Huduma:</b>
            ${order.service}

            <br><br>

            👕 <b>Idadi ya nguo:</b>
            ${order.quantity}

            <br><br>

            📍 <b>Eneo:</b>
            ${order.location}

            <br><br>

            👤 <b>Jina:</b>
            ${order.name}

            <br><br>

            📱 <b>Simu:</b>
            ${order.phone}

            <br><br>

            Tafadhali hakiki taarifa zako kabla ya kutuma oda.

            <br><br>

            <button
                onclick="sendOrderToWhatsApp()"
                style="
                    width:100%;
                    padding:13px;
                    border:none;
                    border-radius:12px;
                    background:#25D366;
                    color:#fff;
                    font-weight:700;
                    cursor:pointer;
                    font-family:inherit;
                "
            >
                📲 Tuma Oda WhatsApp
            </button>

        `, "bot");

    }


    /* =========================================
       SEND ORDER TO WHATSAPP
    ========================================= */

    window.sendOrderToWhatsApp = function () {

        const whatsappNumber = "255683433406";

        const message = `
PASI MFALME - ODA

Huduma: ${order.service}

Idadi ya nguo: ${order.quantity}

Eneo: ${order.location}

Jina: ${order.name}

Simu: ${order.phone}
        `;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    };


    /* =========================================
       QUICK BUTTONS
    ========================================= */

    window.aiQuickMessage = function (message) {

        aiInput.value = message;

        sendMessage();

    };


});
