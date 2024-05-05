const passwordInput = document.querySelector("input#password");
const confirmPasswordInput = document.querySelector("input#confirm-password");

function validateConfirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
}

passwordInput.addEventListener("change", validateConfirmPassword);
confirmPasswordInput.addEventListener("change", validateConfirmPassword);
