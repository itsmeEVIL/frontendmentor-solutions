const formInput = document.querySelector(".main__form__input");
const formSubmit = document.querySelector(".main__form__submit");
const errorLogo = document.querySelector(".main__form__error__logo");
const errorText = document.querySelector(".main__form__error__text");

formSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const formInputValue = formInput.value.trim();

    // if input is empty
    if (!formInputValue) {
        handleError("Email cannot be empty");
    }

    // if input isn't empty
    if (formInputValue) {
        // if email isn't valid
        if (!checkEmail(formInputValue)) {
            handleError("Please provide a valid email");
        }

        // if email is valid
        if (checkEmail(formInputValue)) {
            handleSuccess();
        }
    }
});

function handleError(errorMessage) {
    formInput.classList = "main__form__input input--error";
    errorLogo.classList = "main__form__error__logo logo--error";
    errorText.classList = "main__form__error__text text--error";
    errorText.innerText = errorMessage;
}

function handleSuccess() {
    formInput.classList = "main__form__input ";
    errorLogo.classList = "main__form__error__logo";
    errorText.classList = "main__form__error__text";

    formInput.value = "";
    formInput.blur();
}

function checkEmail(emailAddress) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailAddress
    );
}
