// Contact Form Validation
let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all required fields.");

        }

        else {

            alert("Thank you for contacting Bright Future Tutoring!");

        }

    });

}


// FAQ Accordion
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        }

        else {

            panel.style.display = "block";

        }

    });

}

// Image Gallery Lightbox
let images = document.getElementsByClassName("gallery-image");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {

    for (let i = 0; i < images.length; i++) {

        images[i].addEventListener("click", function () {

            lightbox.style.display = "block";
            lightboxImg.src = this.src;

        });

    }

    lightbox.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

}

// Tutoring Cost Calculator
let calculateBtn = document.getElementById("calculateBtn");

if (calculateBtn) {

    calculateBtn.addEventListener("click", function () {

        let subject = document.getElementById("subject").value;
        let sessions = document.getElementById("sessions").value;

        let total = subject * sessions;

        document.getElementById("result").innerHTML =
            "Total Cost: R" + total;

    });

}

// Dark Mode
let darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}

// Live Date and Time
let dateTime = document.getElementById("dateTime");

if (dateTime) {

    setInterval(function () {

        let now = new Date();

        dateTime.innerHTML = now.toLocaleString();

    }, 1000);

}
// Automatic Slideshow
let slideshow = document.getElementById("slideshow");

if (slideshow) {

    let pictures = [
        "images/tutoring for teenagers.avif",
        "images/black tutor in board.jpg",
        "images/download (1).jpg",
        "images/tutor assistance.jpg"
    ];

    let index = 0;

    setInterval(function () {

        index++;

        if (index >= pictures.length) {

            index = 0;

        }

        slideshow.src = pictures[index];

    }, 3000);

}