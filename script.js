// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("show");

        if (nav.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("show");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Please fill in your name, email and message.";

            return;
        }


        const subject =
            "New Project Enquiry - " +
            (service || "Website Enquiry");


        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " +
            (phone || "Not provided") +
            "\n" +
            "Service: " +
            (service || "Not selected") +
            "\n\n" +
            "Message:\n" +
            message;


        const mailto =
            "mailto:hragency0777@gmail.com" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);


        formMessage.textContent =
            "Opening your email app...";


        window.location.href = mailto;

    });

}
