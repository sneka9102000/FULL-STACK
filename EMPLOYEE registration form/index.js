const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

function updateForms() {
  formStepsNum++;
  updateFormSteps();
  updateProgressbar();
  return true;
}

function validateBasics() {
  console.log("clicked")
  let emailValidation = validateEmail();
  let passwordValidation = validatePassword();
  let confirmPasswordValidation = confirmPassword();
  let firstNameValidation = firstname();
  if (emailValidation && passwordValidation && confirmPasswordValidation && firstNameValidation) {
    return true;
  } else {
    return false;
  }
}

function validateEducation() {
  let year = validateYearOfPassout();
  let graduation=graduationValidation();
  if (year&&graduation === true) {
    return true
  } else {
    return false
  }
}

function validateTeam() {
  let teamval = teamValidation();
  let check = checkBoxValidation();
  if (teamval && check === true) {
    printThankyou();
    return true;
  } else {
    return false;
  }
}

function checkBoxValidation() {
  let termsandcond = document.getElementById("terms");
  if (termsandcond.checked === false) {
    document.getElementById("termsError").innerHTML="Check the Terms and Conditions"
    return (false)
  } else {
    document.getElementById("termsError").innerHTML=""
    console.log("true");
    return true
  }
}

function teamValidation() {
  let teamName = document.getElementById("practise")
  if (teamName.options[teamName.selectedIndex].value === "Practice") {
    document.getElementById("practiseError").innerHTML="Select a Team"
    return false;

  } else {
    document.getElementById("practiseError").innerHTML=""
    return true;
  }
}

function validateYearOfPassout() {
  const yearOfPassing=/^(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
  if (document.getElementById("yearofpass").value === "") {
    console.log("Enter year of passout")
    document.getElementById("yearError").innerText="Year of Passing Required";
    return false
  } else if(yearOfPassing.test(document.getElementById("yearofpass").value)==false){
    
    document.getElementById("yearError").innerText="Enter in valid format";
    return false;

  } else {
    document.getElementById("yearError").textContent=""
    console.log("true")
    return true
  }
}

function validationOthers() {
  let dobVal = validateDOB();
  let mobileNoVal = validatePhone();
  if (dobVal && mobileNoVal === true) {
    return true;
  } else {
    return false;
  }
}

function validateBasicForm() {
  if (validateBasics() === true) {
    updateForms();
    return true;
  } else {
    return false;
  }
}

function validateOtherForm() {
  if (validationOthers() === true) {
    updateForms();
    return true;
  } else {
    return false;
  }
}

function validateTeamForm() {
  if (validateTeam() === true) {
    return true;
  } else {
    return false;
  }
}

function validateWorkForm() {
  updateForms();
}

function validateEducationForm() 
{
  if (validateEducation() === true) {
    updateForms();
    return true;
  } else {
    return false;
  }
}

function validateEmail() {
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  let result = document.getElementById('email').value.match(regex);
  if (!result) {
    document.getElementById('emailError').textContent = "Please enter a proper Email Id";
    return false;
  } else {
    document.getElementById('emailError').textContent = "";
    return true;
  }
}

function validatePassword() {
  const regexpattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#,@,$,%,!]).{8,}$/;
  let password = document.getElementById('password').value
  let result = document.getElementById('password').value.match(regexpattern);
  if (password == "") {
    document.getElementById('passwordError').textContent = " password is Required";
    return false;
  } else if (!result) {
    document.getElementById('passwordError').textContent = "Please enter a valid password";
    return false;
  } else {
    document.getElementById('passwordError').textContent = "";
    return true;
  }
}

function confirmPassword() {
  if (document.getElementById("confirmPassword").value === "") {
    document.getElementById('confirmError').textContent = "Password Confirmation Required";
    return false;
  } else if (document.getElementById('confirmPassword').value === document.getElementById('password').value) {
    document.getElementById('confirmError').textContent = "";
    return true;
  } else {
    document.getElementById('confirmError').textContent = "Please enter the password correctly";
    return false;
  }
}

function firstname() {
  const regName = /^[a-zA-Z]+$/;
  let name = document.getElementById('firstname').value;
  if (!regName.test(name)) {
    document.getElementById('firstnameError').textContent = "Please enter your first name";
    return false;
  } else {
    document.getElementById('firstnameError').textContent = "";
    return true;
  }
}

function validatePhone() {
  const phoneno =/^[6789]{1}[\d]{9}$/;
  let phonenumber = document.getElementById('mobilenumber').value.match(phoneno);
  if (!phonenumber) {
    document.getElementById('mobilenumberError').textContent = "Please enter a valid phone number";
    return false;
  } else {
    document.getElementById('mobilenumberError').textContent = ""
    return true;
  }
}

function graduationValidation()
{
  if(document.getElementById("sslc").checked==false&&document.getElementById("hsc").checked==false&&document.getElementById("ug").checked==false&&document.getElementById("pg").checked==false)
  {
    document.getElementById("graduationError").textContent="Select a Graduation";
    console.log("clicked")
    return false;
  }
  else {
    document.getElementById("graduationError").textContent=""
    return true;
  }
}

function validateDOB() {
  let dob = document.getElementById('dob').value;
  let dateFormat = new Date(dob);
  let now = new Date();
  let dateDiff = now.getFullYear() - dateFormat.getFullYear();
  if (dateDiff >= 18 && dateDiff <= 60) {
    document.getElementById('dobError').textContent = "";
    return true;
  } else {
    document.getElementById('dobError').textContent = "Please select the correct dob";
    return false;

  }
}

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function printThankyou() {
  let form = document.getElementById("form")
  let final = document.getElementById("final");
  form.style.display = "none";
  final.style.display = "block";
}
