// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});

document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });


// ==========================
// HEADER SCROLL
// ==========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 25) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ==========================
// ENQUIRY TO WHATSAPP
// ==========================

const enquiryForm =
    document.getElementById("enquiryForm");

enquiryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const phone =
            document
                .getElementById("phone")
                .value
                .trim();

        const business =
            document
                .getElementById("business")
                .value
                .trim();

        const websiteType =
            document
                .getElementById("websiteType")
                .value;

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        const whatsappMessage = `Hi Webzo Studio,

I would like to enquire about a website.

Name: ${name}
Phone: ${phone}
Business: ${business || "Not provided"}
Website Type: ${websiteType}

Requirements:
${message}

Please share more details about the website development process.`;


        const encodedMessage =
            encodeURIComponent(
                whatsappMessage
            );


        const whatsappURL =
            `https://wa.me/919566572867?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


// ==========================
// BACK TO TOP
// ==========================

const topButton =
    document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }
);


// ==========================
// CURRENT YEAR
// ==========================

document.getElementById("year").textContent =
    new Date().getFullYear();
