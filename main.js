const signUpComponent = document.getElementById('sign_up_component');
const successComponent = document.getElementById('success_component');



function success() {
    const emailInput = document.getElementById('email');
    const gradient = document.getElementById('gradient');
    const emailDisplay = document.getElementById('email_display');

    gradient.style.display = "none";

    emailDisplay.textContent = emailInput.value;

    signUpComponent.style.display = "none";
    successComponent.style.display = "flex";

    window.scrollTo(0, 0);
}


function dismiss() {
    location.reload();
}


function checkValid() {
    const email = document.getElementById('email');
    const emailValue = email.value;
    const pattern = /@.*\.com/;

    if (pattern.test(emailValue)) {
        console.log('valid email');
        success();
    } else {
        console.log('invalid email');
        const invalidText = document.getElementById('invalid_text');
        invalidText.style.display = "inline";

        email.style.borderColor = "tomato";
        email.style.color = "tomato";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 10%)";
    }
}


