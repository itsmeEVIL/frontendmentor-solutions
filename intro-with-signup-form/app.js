const inputFirstName = document.querySelector(".form__signup__input-first");
const inputLastName = document.querySelector(".form__signup__input-last");
const inputEmail = document.querySelector(".form__signup__input-email");
const inputPassword = document.querySelector(".form__signup__input-password");
const inputSubmit = document.querySelector(".form__signup__input-submit");

inputSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const inputFirstNameValue = inputFirstName.value.trim();
    const inputLastNameValue = inputLastName.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const inputPasswordValue = inputPassword.value.trim();

    if (!inputFirstNameValue) {
        setErrorFor(inputFirstName, "First Name cannot be empty");
        inputFirstNameSuccess = false;
    } else {
        setSuccessFor(inputFirstName);
        inputFirstNameSuccess = true;
    }

    if (!inputLastNameValue) {
        setErrorFor(inputLastName, "Last Name cannot be empty");
        inputLastNameSuccess = false;
    } else {
        setSuccessFor(inputLastName);
        inputLastNameSuccess = true;
    }

    if (!inputEmailValue) {
        setErrorFor(inputEmail, "Email cannot be empty");
        inputEmailSuccess = false;
    } else if (!isEmail(inputEmailValue)) {
        setErrorFor(inputEmail, "Looks like this is not an email");
        inputEmailSuccess = false;
    } else {
        setSuccessFor(inputEmail);
        inputEmailSuccess = true;
    }

    if (!inputPasswordValue) {
        setErrorFor(inputPassword, "Password cannot be empty");
        inputPasswordSuccess = false;
    } else {
        setSuccessFor(inputPassword);
        inputPasswordSuccess = true;
    }

    if (
        inputFirstNameSuccess &&
        inputLastNameSuccess &&
        inputEmailSuccess &&
        inputPasswordSuccess
    ) {
        inputFirstName.value = "";
        inputLastName.value = "";
        inputEmail.value = "";
        inputPassword.value = "";
        inputFirstName.blur();
        inputLastName.blur();
        inputEmail.blur();
        inputPassword.blur();
    }
}

function setErrorFor(input, message) {
    const inputParent = input.parentElement;
    const successLogo = inputParent.querySelector(
        ".form__signup__input__success__logo"
    );
    const errorLogo = inputParent.querySelector(
        ".form__signup__input__error__logo"
    );
    const errorMessage = inputParent.querySelector(
        ".form__signup__input__error__message"
    );

    input.classList.add("form__signup__input__error");
    input.classList.remove("form__signup__input__success");
    errorLogo.classList.add("opacity");
    successLogo.classList.remove("opacity");
    errorMessage.classList.add("opacity", "top");
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const inputParent = input.parentElement;
    const successLogo = inputParent.querySelector(
        ".form__signup__input__success__logo"
    );
    const errorLogo = inputParent.querySelector(
        ".form__signup__input__error__logo"
    );
    const errorMessage = inputParent.querySelector(
        ".form__signup__input__error__message"
    );

    input.classList.remove("form__signup__input__error");
    input.classList.add("form__signup__input__success");
    errorLogo.classList.remove("opacity");
    successLogo.classList.add("opacity");
    errorMessage.classList.remove("opacity", "top");
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
