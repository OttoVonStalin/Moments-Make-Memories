function validateForm() {
    const form = document.getElementById('contactForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    return true; // Proceed with form submission
}