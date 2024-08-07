document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('strength-text');
    const strengthBarFill = document.getElementById('strength-bar-fill');
    const passwordForm = document.getElementById('password-form');

    const checkPasswordStrength = (password) => {
        let strength = 0;

        if (password.length >= 8) strength += 20;
        if (/[A-Z]/.test(password)) strength += 20; // the slashes are called regular expressions
        if (/[a-z]/.test(password)) strength += 20; // it checks how many and adds the strength
        if (/[0-9]/.test(password)) strength += 20;
        if (/[@$!%*?&]/.test(password)) strength += 20;

        return strength;
    };

    const updateStrengthDisplay = (strength) => {
        let strengthLevel = '';
        if (strength >= 80) {
            strengthLevel = 'Strong';
            strengthBarFill.style.backgroundColor = 'green';
        } else if (strength >= 60) {
            strengthLevel = 'Moderate';
            strengthBarFill.style.backgroundColor = 'orange';
        } else if (strength >= 40) {
            strengthLevel = 'Weak';
            strengthBarFill.style.backgroundColor = 'red';
        } else {
            strengthLevel = 'Very Weak';
            strengthBarFill.style.backgroundColor = 'darkred';
        }
        strengthText.textContent = strengthLevel;
        strengthBarFill.style.width = strength + '%';
    };

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);
        updateStrengthDisplay(strength);
    });
});
