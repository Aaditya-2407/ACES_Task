const form = document.getElementById('loginForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
      
        window.location.href = '/Dashboard.html';
    } else {
        messageEl.textContent = data.message;
        messageEl.className = 'message error';
    }
});