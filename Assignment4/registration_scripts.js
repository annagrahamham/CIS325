 document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
     let isValid = true; 
  
     //clear error messages
    document.getElementById('fnameError').innerText = '';
    document.getElementById('lnameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('numPasswordError').innerText = '';
    document.getElementById('upperPasswordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('numberError').innerText = '';

    //Validation checks
     const fname = document.getElementById('fname').value;
    if (fname.trim() === '') {
      document.getElementById('fnameError').innerText = 'First name is required.';
      isValid = false;
    }
      const lname = document.getElementById('lname').value;
    if (lname.trim() === '') {
      document.getElementById('lnameError').innerText = 'Last name is required.';
      isValid = false;
    }

        const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = 'Invalid email.';
      isValid = false;
    }

     const password = document.getElementById('password').value;
    if (password.length < 8) {
      document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
      isValid = false;
    }
    const numCheck = /\d/;
    if(!numCheck.test(password)){
      document.getElementById('numPasswordError').innerText = 'Password must contain at least one number.';
      isValid = false;
    }
    const upperCheck = /[A-Z]/;
    if(!upperCheck.test(password)){
      document.getElementById('upperPasswordError').innerText = 'Password must contain at least one uppercase letter.';
      isValid = false;
     }
     const cpassword = document.getElementById('confirmPassword').value;
    if (password !== cpassword) {
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
      isValid = false;
    }

    const age = document.getElementById('age').value;
    if (age < 18) {
      document.getElementById('ageError').innerText = 'You must be 18 or older to register.';
      isValid = false;
    }
    
    const number = document.getElementById('number').value;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (number && !phonePattern.test(number)) {
      document.getElementById('numberError').innerText = 'Phone number must be in the format XXX-XXX-XXXX.';
      isValid = false;
    }
    if (isValid) {
      alert('Submitting form...');
      //JSON object creation and storage
      const formData = {fname: fname, lname: lname, email: email, password: password, age: age, number: number}; 
      console.log(formData);
      form.submit();  
     
    }
  });
});
