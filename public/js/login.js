document.addEventListener('DOMContentLoaded', function() {
  const loginFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        const errorMessage = await response.json();
        console.error('Failed to login:', errorMessage.message);
        alert(`Failed to login. ${errorMessage.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An unexpected error occurred. Check the console for details.');
    }
  };

  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
});
