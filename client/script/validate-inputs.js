let ALL_INPUT_VALID;

const form = document.getElementById('form');
const studentID = document.getElementById('studentID');
const studentFirstName = document.getElementById('studentFirstName');
const studentLastName = document.getElementById('studentLastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const grades = document.getElementById('grades');
const year = document.getElementById('year');
const teacher = document.getElementById('teacher');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
    ALL_INPUT_VALID = false;
  }
}

// Check mobile is valid
function checkMobile(input) {
  const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Mobile is not valid');
    ALL_INPUT_VALID = false;
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
      ALL_INPUT_VALID = false;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    ALL_INPUT_VALID = false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    ALL_INPUT_VALID = false;
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm() {
  if (!checkRequired([studentID, studentFirstName, studentLastName, phone, email, grades, year, teacher])) {
    checkLength(studentID, 1, 10);
    checkLength(studentFirstName, 3, 50);
    checkLength(studentLastName, 2, 50);
    checkLength(grades, 1, 6);
    checkLength(year, 1, 4);
    checkLength(teacher, 1, 20);
    checkEmail(email);
    checkMobile(phone);
  }
}


// Event listeners
form.addEventListener('submit', function (e) {
  ALL_INPUT_VALID = true;
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
  if (ALL_INPUT_VALID) {
    let formData = {
      studentID: studentID.value,
      studentFirstName: studentFirstName.value,
      studentLastName: studentLastName.value,
      phone: phone.value,
      email: email.value,
      grades: grades.value,
      year: year.value,
      teacher: teacher.value
    }
    console.log(`All input is valid. Send data to server: 
      ${JSON.stringify(formData)}`);

    sendForm(formData).then(
        result => {
          console.log(`Response from server: ${result}`);
        }).catch(err => {
      console.log(`Error occurred: ${err}`)
    });
  } else {
    console.log("At least one validation failed. No data sent to BZZ.");
  }

});