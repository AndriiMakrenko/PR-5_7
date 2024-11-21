document.addEventListener('DOMContentLoaded', function () {
  const authModal = document.getElementById('authModal');
  const authButton = document.getElementById('authButton');
  const logoutButton = document.getElementById('logoutButton');
  const closeAuthButton = document.getElementById('closeAuth');
  const logInForm = document.getElementById('logInForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginName = document.getElementById('loginName');
  const userLogin = document.getElementById('userLogin');


  authButton.addEventListener('click', function () {
      if (!localStorage.getItem('username')) {
          authModal.style.display = 'block';
          document.body.style.overflow = 'hidden'; 
      }
  });

  closeAuthButton.addEventListener('click', function () {
      closeModal();
  });

 
  window.addEventListener('click', function (event) {
      if (event.target === authModal) {
          closeModal();
      }
  });

  
  function closeModal() {
      authModal.style.display = 'none';
      document.body.style.overflow = ''; 
      resetInputStyles(); 
      resetInputFields(); 
  }

 
  logInForm.addEventListener('submit', function (event) {
      event.preventDefault();

      let hasError = false;

      
      if (usernameInput.value.length < 4 || usernameInput.value.length > 16) {
          usernameInput.style.borderColor = 'red'; 
          usernameInput.setCustomValidity('Будь ласка, введіть логін від 4 до 16 символів.');
          hasError = true;
      } else {
          usernameInput.style.borderColor = '';
          usernameInput.setCustomValidity('');
      }


      if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
          passwordInput.style.borderColor = 'red'; 
          passwordInput.setCustomValidity('Пароль повинен бути від 6 до 20 символів.');
          hasError = true;
      } else {
          passwordInput.style.borderColor = ''; 
          passwordInput.setCustomValidity('');
      }

      if (hasError) {
          return; 
      }

     
      localStorage.setItem('username', usernameInput.value);


      authButton.style.display = 'none';
      logoutButton.style.display = 'block';
      userLogin.style.display = 'block';
      loginName.textContent = usernameInput.value;

      closeModal();
  });


  logoutButton.addEventListener('click', function () {
      localStorage.removeItem('username');
      authButton.style.display = 'block';
      logoutButton.style.display = 'none';
      userLogin.style.display = 'none';
  });


  const username = localStorage.getItem('username');
  if (username) {
      authButton.style.display = 'none';
      logoutButton.style.display = 'block';
      userLogin.style.display = 'block';
      loginName.textContent = username;
  }


  usernameInput.addEventListener('input', function () {
      usernameInput.style.borderColor = '';
  });

  passwordInput.addEventListener('input', function () {
      passwordInput.style.borderColor = '';
  });

  function resetInputStyles() {
      usernameInput.style.borderColor = '';
      passwordInput.style.borderColor = '';
  }

  
  function resetInputFields() {
      usernameInput.value = ''; 
      passwordInput.value = ''; 
  }
});
