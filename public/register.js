const form = document.getElementById('registerForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
        messageEl.textContent = data.message;
        messageEl.className = 'message success';
        // This is the redirect logic
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    } else {
        messageEl.textContent = data.message;
        messageEl.className = 'message error';
    }
});