document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Registration successful!');
            registrationForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Message sent!');
            contactForm.reset();
        });
    }
});

function bookAppointment() {
    alert('Appointment booked successfully!');
}

function loadHealthRecords() {
    alert('Loading health records...');
}
