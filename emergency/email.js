// (function() {
//     emailjs.init("gBGUWAEKgUiiZt5aP");
//   })();
  
//   //  Getting elements
//   const form = document.getElementById('contactForm');
//   const userMessage = document.getElementById('helpType');
//   const messageContainer = document.querySelector('description');
  
  
// let isValid = false

// const templateParams = {
//   message: userMessage,
//   description : messageContainer
// }

// function validateForm() {
//   // Using Contraint API
//   isValid = form.checkValidity();
//   // Style main message for an error
//   if(isValid === false) {
//       message.textContent ="Please fil out all the fields";
//       message.style.color = 'red';
//       messageContainer.style.borderColor = 'red';
//   } else if(isValid === true) {
//       message.textContent ="Your message is being sent";
//       message.style.color = 'Orange';
//       messageContainer.style.borderColor = 'Orange';
//   }
// }

// function processFormData(e) {
//   e.preventDefault()
  
//   // Validating form 
//   validateForm();

//   // Sending the formdata
//   if(isValid === true) {
//   emailjs.send('service_f9lgjxo', 'template_572ozkr', templateParams)
//   .then(function(response){
//       message.textContent ="Thank you very much we will reply to you as soon as possible";
//       message.style.color = 'green';
//       messageContainer.style.borderColor = 'green';
//       console.log('SUCCES', response.status, response.text);
//   }, function(error){
//       console.log("FAILED", error);
//   })
//   }
// }

// //  Add eventlisteners
// form.addEventListener('submit', processFormData);
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
