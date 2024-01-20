const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    // Clear form fields after successful login
    usernameEl.value = '';
    passwordEl.value = '';
  } else {
    const errorMessage = await response.text();
    console.error('Failed to login:', errorMessage);
    alert(`Failed to login. ${errorMessage}`);
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
