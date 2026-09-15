/* ================= BRIGHT FUTURE ACADEMY ================= */


/* ================= SMOOTH SCROLLING ================= */

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const targetId =
            this.getAttribute('href');

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

console.log(
    "Welcome to Bright Future Academy"
);


/* ================= JOIN BUTTON ================= */

const joinButton =
    document.querySelector('#home button');

if (joinButton) {

    joinButton.addEventListener(
        'click',
        function(event) {

            event.preventDefault();

            const admissionSection =
                document.querySelector('#admission');

            if (admissionSection) {

                admissionSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        }
    );

}


/* ================= FEES DROPDOWN ================= */

function toggleFee(feeId, button) {

    const feeBox =
        document.getElementById(feeId);

    if (!feeBox) {
        return;
    }


    /* Check if selected fee is already open */

    const isOpening =
        !feeBox.classList.contains('active');


    /* Close all fee details */

    document.querySelectorAll(
        '.fee-details'
    ).forEach(function(box) {

        box.classList.remove('active');

    });


    /* Reset all icons */

    document.querySelectorAll(
        '.plus-icon'
    ).forEach(function(icon) {

        icon.textContent = "⭕";

    });


    /* Open selected fee */

    if (isOpening) {

        feeBox.classList.add('active');

        button.querySelector(
            '.plus-icon'
        ).textContent = "❌";

    }

}