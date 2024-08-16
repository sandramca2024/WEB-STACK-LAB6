document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');

    function validateFullName() {
        const name = fullNameInput.value.trim();
        const nameRegex = /^[A-Za-z ]{3,}$/;
        const nameError = document.getElementById('nameError');

        if (nameRegex.test(name)) {
            fullNameInput.style.borderColor = 'lightgreen';
            nameError.textContent = '';
            return true;
        } else {
            fullNameInput.style.borderColor = 'red';
            nameError.textContent = 'Name must be at least 3 characters and contain only letters and spaces.';
            return false;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('emailError');

        if (emailRegex.test(email)) {
            emailInput.style.borderColor = 'lightgreen';
            emailError.textContent = '';
            return true;
        } else {
            emailInput.style.borderColor = 'red';
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const passwordError = document.getElementById('passwordError');

        if (passwordRegex.test(password)) {
            passwordInput.style.borderColor = 'lightgreen';
            passwordError.textContent = '';
            return true;
        } else {
            passwordInput.style.borderColor = 'red';
            passwordError.textContent = 'Password must be at least 8 characters long and contain both letters and numbers.';
            return false;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        if (password === confirmPassword) {
            confirmPasswordInput.style.borderColor = 'lightgreen';
            confirmPasswordError.textContent = '';
            return true;
        } else {
            confirmPasswordInput.style.borderColor = 'red';
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        }
    }

    function validateDOB() {
        const dob = new Date(dobInput.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const dobError = document.getElementById('dobError');

        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age >= 18) {
            dobInput.style.borderColor = 'lightgreen';
            dobError.textContent = '';
            return true;
        } else {
            dobInput.style.borderColor = 'red';
            dobError.textContent = 'You must be at least 18 years old.';
            return false;
        }
    }

    function validateForm() {
        const isNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDOBValid = validateDOB();
        
        submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDOBValid);
    }

    fullNameInput.addEventListener('input', validateFullName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDOB);
    form.addEventListener('input', validateForm);

    form.addEventListener('submit', (event) => {
        if (!validateFullName() || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !validateDOB()) {
            event.preventDefault();
        }
    });
});
