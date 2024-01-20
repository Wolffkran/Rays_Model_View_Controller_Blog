document.addEventListener('DOMContentLoaded', function() {
  const signupFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

    try {
      const response = await fetch('/api/user', {
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
        const errorMessage = await response.text();
        console.error('Failed to sign up:', errorMessage);
        alert(`Failed to sign up. ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An unexpected error occurred. Check the console for details.');
    }
  };

  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
});
