document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init("gBGUWAEKgUiiZt5aP");

    // Getting elements
    const form = document.getElementById('contactForm');
    const helpType = document.getElementById('helpType');
    const descriptionField = document.getElementById('description');
    
    if (!form || !helpType || !descriptionField) {
        console.error("One or more elements were not found in the DOM.");
        return;
    }

    let isValid = false;

    function validateForm() {
        isValid = form.checkValidity();

        if (isValid === false) {
            descriptionField.style.borderColor = 'red';
            alert("Please fill out all the fields.");
        } else if (isValid === true) {
            descriptionField.style.borderColor = 'orange';
            alert("Your message is being sent.");
        }
    }

    function processFormData(e) {
        e.preventDefault();

        // Validating form 
        validateForm();

        if (isValid === true) {
            const templateParams = {
                message: helpType.value,
                description: descriptionField.value
            };

            emailjs.send('service_e3ucovg', 'template_572ozkr', templateParams)
            .then(function(response) {
                descriptionField.style.borderColor = 'green';
                alert("Thank you very much! We will reply to you as soon as possible.");
                console.log('SUCCESS', response.status, response.text);
            }, function(error) {
                alert("Failed to send the message. Please try again later.");
                console.log("FAILED", error);
            });
        }
    }

    // Add event listener
    form.addEventListener('submit', processFormData);
});
