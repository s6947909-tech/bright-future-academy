/* ================= BRIGHT FUTURE ACADEMY ================= */


/* Smooth scrolling */

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


/* Join button */

const joinButton = document.querySelector('#home button');

if (joinButton) {

    joinButton.addEventListener('click', function() {

        const admissionSection =
            document.querySelector('#admission');

        if (admissionSection) {

            admissionSection.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

}


/* Admission Form */

const admissionForm =
    document.querySelector('#admissionForm');

const formMessage =
    document.querySelector('#formMessage');

if (admissionForm) {

    admissionForm.addEventListener('submit', function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your application has been submitted.";

        admissionForm.reset();

    });

}
