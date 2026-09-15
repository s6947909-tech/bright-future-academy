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

/* ================= FEES ================= */

#fees {
    text-align: center;
    background: linear-gradient(180deg, #ffffff, #f5f9ff);
}

#fees h2 {
    color: #0d47a1;
    font-size: 30px;
    margin-bottom: 8px;
}

.fees-note {
    color: #555;
    margin-bottom: 25px;
}


/* ================= CLASS LIST ================= */

.fee-class-list {
    max-width: 700px;
    margin: 0 auto;
}

.fee-item {
    margin-bottom: 12px;
}


/* ================= CLASS BUTTON ================= */

.class-fee-btn {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 20px;

    background: #eaf3ff;
    color: #0d47a1;

    border: 2px solid #d4e6ff;
    border-radius: 12px;

    font-size: 18px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;
}

.class-fee-btn:hover {
    background: #dcecff;
    transform: translateY(-2px);
}

.plus-icon {
    font-size: 24px;
    line-height: 1;
}


/* ================= FEE DETAILS ================= */

.fee-details {
    display: none;

    margin-top: 8px;
    padding: 18px;

    background: white;

    border: 1px solid #dbe9ff;
    border-radius: 12px;

    box-shadow: 0 4px 12px rgba(13, 71, 161, 0.10);

    text-align: left;

    animation: feeOpen 0.25s ease;
}

.fee-details.active {
    display: block;
}


/* ================= FEE HEADING ================= */

.fee-details h3 {
    margin: 0 0 15px;

    color: #1976d2;

    text-align: center;

    font-size: 20px;
}


/* ================= FEE OPTIONS ================= */

.fee-details p {
    margin: 10px 0;

    padding: 12px;

    background: #f4f8ff;

    border-radius: 8px;

    color: #333;
}


/* ================= DISCOUNT ================= */

.discount-box {
    margin-top: 15px;

    padding: 15px;

    background: #fff8e1;

    border: 2px solid #ffe082;

    border-radius: 10px;

    text-align: center;

    color: #795548;

    font-size: 17px;

    line-height: 1.6;
}

.discount-box span {
    color: #d84315;

    font-size: 18px;

    font-weight: bold;
}


/* ================= ANIMATION ================= */

@keyframes feeOpen {

    from {
        opacity: 0;
        transform: translateY(-8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* ================= BOTTOM NOTICE ================= */

.fee-bottom-notice {
    max-width: 700px;

    margin: 25px auto 0;
}

.fee-bottom-notice p {
    padding: 13px;

    margin: 10px 0;

    border-radius: 10px;
}

.fee-bottom-notice p:first-child {
    background: #e8f5e9;
    color: #1b5e20;
}

.fee-bottom-notice p:nth-child(2) {
    background: #f1f7ff;
    color: #0d47a1;
}

.monthly-note {
    background: #fff3e0;
    color: #e65100;
}


/* ================= MOBILE ================= */

@media (max-width: 600px) {

    #fees {
        padding: 25px 15px;
    }

    #fees h2 {
        font-size: 26px;
    }

    .class-fee-btn {
        padding: 15px 16px;
        font-size: 17px;
    }

    .fee-details {
        padding: 15px;
    }

    .discount-box {
        font-size: 16px;
    }

}