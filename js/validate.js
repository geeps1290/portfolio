/* =====================
    Form Validation
===================== */

// Get elements from the DOM

const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const email = document.getElementById('eMail');
const fname = document.getElementById('fname');
const subject = document.getElementById('subject');
const phone = document.getElementById('pnumber');
const errorElement = document.getElementById('error');

// Assign phone and email regEx variables

const regEx_Phone = /(?:(\(?(?:0(?:0|11)\)?[\s-]?\(?|\+?)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|\(?0)((?:\d{5}\)?[\.\s-]?\d{4,5})|(?:\d{4}\)?[\.\s-]?(?:\d{3}[\.\s-]?\d{3}))|(?:\d{4}\)?[\.\s-]?(?:\d{5}))|(?:\d{3}\)?[\.\s-]?\d{3}[\.\s-]?\d{3,4})|(?:\d{2}\)?[\.\s-]?\d{4}[\.\s-]?\d{4}))(?:[\s-]?((?:x|ext[\.\s]*|\#)\d{3,4})?)/;
const regEx_Email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z{2,5}])/;

// Set boolean to keep track of valid input fields

let isFormValid = false;
let isValidationOn = false;

// ======= Required Field and Regex Validation ======= //

const validateInputs = () => {
    if(!isValidationOn) return;

    fname.classList.remove("notValid");
    fname.nextElementSibling.classList.add("hidden");
    email.classList.remove("notValid");
    email.nextElementSibling.classList.add("hidden");
    subject.classList.remove("notValid");
    subject.nextElementSibling.classList.add("hidden");
    phone.classList.remove("notValid");
    phone.nextElementSibling.classList.add("hidden");
    isFormValid = true;

    if (!fname.value) {
        fname.nextElementSibling.classList.remove("hidden")
        fname.classList.add("notValid")
        isFormValid = false;
    }
    if (!email.value) {
        email.nextElementSibling.classList.remove("hidden")
        email.classList.add("notValid")
        isFormValid = false;
    }
    if (!subject.value) {
        subject.nextElementSibling.classList.remove("hidden")
        subject.classList.add("notValid")
        isFormValid = false;
    }
    if (!regEx_Phone.test(phone.value) && phone.value != "") {
        phone.nextElementSibling.classList.remove("hidden")
        phone.classList.add("notValid")
        isFormValid = false;
    }
    if (!regEx_Email.test(email.value)) {
        email.nextElementSibling.classList.remove("hidden")
        email.classList.add("notValid")
        isFormValid = false;
    }

};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove('hidden');
    }
})

fname.addEventListener('input', () => {
    validateInputs();
})

email.addEventListener('input', () => {
    validateInputs();
})

subject.addEventListener('input', () => {
    validateInputs();
})

phone.addEventListener('input', () => {
    validateInputs();
})