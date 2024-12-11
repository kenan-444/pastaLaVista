document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#toggleMode');

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (document.body.classList.contains('darkMode')) {
            document.body.classList.remove('darkMode');
            document.body.classList.add('lightMode');
            toggleButton.textContent = '🌙 Mode Sombre';
        } else {
            document.body.classList.remove('lightMode');
            document.body.classList.add('darkMode');
            toggleButton.textContent = '☀️ Mode Clair';
        }
    });

    const reservationForm = document.querySelector(".form");
    
    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();


        const successMessage = document.createElement("p");
        successMessage.textContent = "Merci pour votre réservation et à bientôt!";
        successMessage.style.fontWeight = "bold";
        reservationForm.appendChild(successMessage);

        reservationForm.reset();
    });
});