/* ================= BRIGHT FUTURE ACADEMY ================= */

/* Smooth scrolling for navigation links */
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

/* Join button click action */
const joinButton = document.querySelector('#joinBtn');

if (joinButton) {
    joinButton.addEventListener('click', function() {
        const admissionSection = document.querySelector('#admission');

        if (admissionSection) {
            admissionSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
