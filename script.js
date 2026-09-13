/* ================= BRIGHT FUTURE ACADEMY ================= */


/* ================= SMOOTH SCROLLING ================= */

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


/* ================= WELCOME MESSAGE ================= */

console.log("Welcome to Bright Future Academy");


/* ================= JOIN BUTTON ================= */

const joinButton =
    document.querySelector('#home button');

if (joinButton) {

    joinButton.addEventListener('click', function(event) {

        event.preventDefault();

        const admissionSection =
            document.querySelector('#admission');

        if (admissionSection) {

            admissionSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

}
