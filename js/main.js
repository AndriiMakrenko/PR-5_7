document.addEventListener('DOMContentLoaded', function () {
    // Open modal when 'Війти' button is clicked (only if not already logged in)
    document.getElementById('authButton').addEventListener('click', function() {
      if (!localStorage.getItem('username')) {
        document.getElementById('authModal').style.display = 'block';
      }
    });
  
    // Close modal when close button is clicked
    document.getElementById('closeAuth').addEventListener('click', function() {
      document.getElementById('authModal').style.display = 'none';
    });
  
    // Handle form submission
    document.getElementById('logInForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
  
      if (!username) {
        document.getElementById('username').classList.add('input-error');
        alert('Будь ласка, введіть логін!');
        return;
      }
  
      // Save login info in LocalStorage
      localStorage.setItem('username', username);
  
      // Change button text and visibility after login
      document.getElementById('authButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
      document.getElementById('userLogin').style.display = 'block';
      document.getElementById('loginName').textContent = username;
  
      // Close modal
      document.getElementById('authModal').style.display = 'none';
    });
  
    // Handle logout
    document.getElementById('logoutButton').addEventListener('click', function() {
      // Clear LocalStorage
      localStorage.removeItem('username');
  
      // Reset button visibility
      document.getElementById('authButton').style.display = 'block';
      document.getElementById('logoutButton').style.display = 'none';
      document.getElementById('userLogin').style.display = 'none';
    });
  
    // Check if user is already logged in on page load
    const username = localStorage.getItem('username');
    if (username) {
      document.getElementById('authButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
      document.getElementById('userLogin').style.display = 'block';
      document.getElementById('loginName').textContent = username;
    }
  });
  