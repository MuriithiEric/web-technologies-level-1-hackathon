document.addEventListener('DOMContentLoaded', function() {
    var passwordField = document.getElementById('password');
    var showPasswordCheckbox = document.getElementById('showPasswordCheckbox');
  
    showPasswordCheckbox.addEventListener('change', function() {
      if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    });
  });
  