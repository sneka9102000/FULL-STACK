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
  let emailVal = validateEmail();
  let passwordVal = validatePassword();
  let confirmPasswordVal = confirmPassword();
  let firstNameVal = firstname();
  console.log(emailVal, passwordVal, confirmPasswordVal, firstNameVal);
  if (emailVal && passwordVal && confirmPasswordVal && firstNameVal) {
    return true;
  }else {
    return false;
  }
}


function validateEducation() {
  let year = valiYearOfPassout();
  let graduation=graduationValidation();
  // console.log(graduation+"ss")
  if (year&&graduation === true) {
    return true
  }else {
    return false
  }
}


function validateTeam() {
  let teamval = teamValidation();
  let check = checkBoxValidation();
  if (teamval && check === true) {
    printThankyou();
    return true;
  }else {
    return false;
  }
}


function checkBoxValidation() {
  let tandc = document.getElementById("terms");
  if (tandc.checked === false) {
    console.log("Check the Terms and Conditions")
    document.getElementById("termsError").innerHTML="Check the Terms and Conditions"
    return (false)
  }else {
    document.getElementById("termsError").innerHTML=""
    console.log("true");
    return true
  }
}


function teamValidation() {
  let teamName = document.getElementById("practise")
  if (teamName.options[teamName.selectedIndex].value === "Practice") {
    // console.log()
    document.getElementById("practiseError").innerHTML="Select a Team"
    return false;

  }else {
    document.getElementById("practiseError").innerHTML=""
    console.log("true")
    return true;
  }
}


function valiYearOfPassout() {
  const yearOfPassing=/^(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
  // console.log(yearOfPassing.test(document.getElementById("yearofpass").value))
  if (document.getElementById("yearofpass").value === "") {
    console.log("Enter year of passout")
    document.getElementById("yopError").innerText="Year of Passing Required";
    return false
  }
  else if(yearOfPassing.test(document.getElementById("yearofpass").value)==false){
    
    document.getElementById("yopError").innerText="Enter in valid format";
    return false;

  }
  else {
    document.getElementById("yopError").textContent=""
    console.log("true")
    return true
  }
}

// function validateState()
// {
//   let formState=document.getElementById("state")
//   if(formState.options[formState.selectedIndex].value=="Choose a state")
//   {
//     console("Select a State");
//     return false;
//   }
//   else{
//     stateCorrect();
//     return true;
//   }
// }

function validationOthers() {
  let dobVal = validateDOB();
  let mobileNoVal = validatePhone();
  console.log(dobVal, mobileNoVal)
  if (dobVal && mobileNoVal === true) {
    return true;
  }else {
    return false;
  }
}


function validateBasicForm() {
  console.log("vali")
  if (validateBasics() === true) {
    updateForms();
    return true;
  }else {
    return false;
  }
}


function validateOtherForm() {
  console.log("other")
  if (validationOthers() === true) {
    updateForms();
    return true;
  }else {
    return false;
  }
}


function validateTeamForm() {
  console.log("Team")
  {
    if (validateTeam() === true) {
      return true;
    }else {
      return false;
    }
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
  }else {
    return false;
  }
}


function validateEmail() {
  console.log("step3")
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  var result = document.getElementById('email').value.match(regex);
  if (!result) {
    document.getElementById('emailError').textContent = "Please enter a proper Email Id";
    return false;
  }else {
    document.getElementById('emailError').textContent = "";

    return true;
  }
}


function validatePassword() {
  console.log("step4")
  const regexpattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#,@,$,%,!]).{8,}$/;
  let password = document.getElementById('password').value
  var result = document.getElementById('password').value.match(regexpattern);
  if (password == "") {
    document.getElementById('passwordError').textContent = " password is Required";
    return false;
  }else if (!result) {
    document.getElementById('passwordError').textContent = "Please enter a valid password";
    return false;
  }else {
    document.getElementById('passwordError').textContent = "";
    return true;
  }
}


function confirmPassword() {
  if (document.getElementById("confirmPassword").value === "") {
    document.getElementById('confirmError').textContent = "Password Confirmation Required";
    return false;
  }else if (document.getElementById('confirmPassword').value === document.getElementById('password').value) {
    document.getElementById('confirmError').textContent = "";
    return true;
  }else {
    document.getElementById('confirmError').textContent = "Please enter the password correctly";
    return false;
  }
}


function firstname() {
  var regName = /^[a-zA-Z]+$/;
  var name = document.getElementById('firstname').value;
  if (!regName.test(name)) {
    document.getElementById('firstError').textContent = "Please enter your first name";
    return false;
  } else {
    document.getElementById('firstError').textContent = "";
    return true;
  }
}


function validatePhone() {
  var phoneno =/^[6789]{1}[\d]{9}$/;
  var pn = document.getElementById('mobilenumber').value.match(phoneno);
  if (!pn) {
    document.getElementById('mobError').textContent = "Please enter a valid phone number";
    return false;
  }else {
    document.getElementById('mobError').textContent = ""
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
  else{
    document.getElementById("graduationError").textContent=""
    return true;
  }
}


// function validateYOE() {
//   var vy = document.getElementById('experience')
//   if (vy > 1) {
//     return true;
//   }else {
//     return false;
//   }
// }



function validateDOB() {
  var dob = document.getElementById('dob').value;
  var dateFormat = new Date(dob);
  var now = new Date();
  var dateDiff = now.getFullYear() - dateFormat.getFullYear();
  if (dateDiff >= 18 && dateDiff <= 60) {
    document.getElementById('dobError').textContent = "";
    return true;
  }else {
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
