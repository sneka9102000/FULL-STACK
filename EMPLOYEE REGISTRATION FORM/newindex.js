const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

function updateForms()
{
  formStepsNum++;
  updateFormSteps();
  updateProgressbar();
  return true;
}
   
function validateBasics()
{
  console.log("clicked")
  let emailVal=validateEmail();
  let passwordVal=validatePassword();
  let confirmPasswordVal=confirmPassword();
  let firstNameVal=firstname();
  console.log(emailVal,passwordVal,confirmPasswordVal,firstNameVal);
  if(emailVal&&passwordVal&&confirmPasswordVal&&firstNameVal==true)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function validateEducation()
{
  let gradVal=valiGraduation();
  let yopo=valiYearOfPassout();
  if(gradVal&&yopo==true)
  {
    return true
  }
  else
  {
    return false
  }
}
function validateTeam()
{
  let teamval=teamValidation();
  let check=chcekBoxValidation();
  if(teamval&&check==true)
  {
    printThankyou();
    return true;
  }
  else
  {
    return false;
  }
}
function chcekBoxValidation()
{
  let tandc=document.getElementById("terms");
  if(tandc.checked==false)
  {
    console.log("Check the Terms and Conditions")
    return(false)
  }
  else
  {
    console.log("true");
    return true
  }
}
function teamValidation()
{
  let teamName=document.getElementById("practise")
  if(teamName.options[teamName.selectedIndex].value=="Practise")
  {
    console.log("Select a Team")
    return false;
    
  }
  else
  {
    console.log("true")
    return true;
  }
}
function valiYearOfPassout()
{
  if(document.getElementById("yearofpass").value=="")
  {
    console.log("Enter year of passout")
    return false
  }
  else
  {
    console.log("true")
    return true
  }
}
function validationOthers()
{
  let dobVal=validateDOB();
  let mobileNoVal=validatePhone();
  console.log(dobVal,mobileNoVal)
  if(dobVal&&mobileNoVal==true)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function validateBasicForm()
{
  console.log("vali")
  if(validateBasics()==true)
  {
    updateForms();
    return true;
  }
  else
  {
    return false;
  }
}
function validateOtherForm()
{
  console.log("other")
  if(validationOthers()==true)
  {
    updateForms();
    return true;
  }
  else
  {
    return false;
  }
}
function validateTeamForm()
{
  console.log("Team")
  {
    if(validateTeam()==true)
    {
      return true;
    }
    else{
      return false;
    }
  }
}
function validateWorkForm()
{
  updateForms();
}
function validateEducationForm()
{
  if(validateEducation()==true)
  {
    updateForms();
    return true
  }
  else
  {
    return false;
  }
}
function validateEmail(){
  console.log("step3")
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
	            var result = document.getElementById('email').value.match(regex);
	            if(!result) {
                document.getElementById('emailerror').textContent="Please enter a proper Email Id";
                return false;
                }
              else{
                document.getElementById('emailerror').textContent="";
               
                return true;
              }
}
function validatePassword(){
  console.log("step4")
  const regexpattern= /^[a-zA-Z]{6,16}$/;
  let password=document.getElementById('password').value
  var result = document.getElementById('password').value.match(regexpattern);
  if(password=="")
  {
    document.getElementById('passworderror').textContent=" password is Required";
    return false;
  }
	            else if(!result) {
                document.getElementById('passworderror').textContent="Please enter a valid password";
                return false;
	            }
              else{
                document.getElementById('passworderror').textContent="";
                return true;
              }
}
function confirmPassword()
{
  if(document.getElementById("confirmPassword").value=="")
  {
    document.getElementById('confirmerror').textContent="Password Confirmation Required";
    return false;
  }
  else if(document.getElementById('confirmPassword').value === document.getElementById('password').value){
    return true;
  }
  else{
    document.getElementById('confirmerror').textContent="Please enter the password correctly";
    return false;
  }
}
  

function firstname()
{
  var regName = /^[a-zA-Z]+$/;
  var name = document.getElementById('firstname').value;
  if(!regName.test(name)){
    document.getElementById('firsterror').textContent="Please enter your first name";  
    return false;
  }
  else{
    return true;
  }
}
function validatePhone(){
  var phoneno = /^\d{10}$/;
  var pn = document.getElementById('mobilenumber').value.match(phoneno);
  if(!pn) {
    document.getElementById('moberror').textContent="Please enter a valid phone number";  
    return false;
  }

  else{
    document.getElementById('moberror').textContent=""
    return true;
 }  
}

function validateDOB()
{
    var dob=document.getElementById('dob').value;
    var dateFormat = new Date(dob);
    var now = new Date ();
    var dateDiff =  now.getFullYear() - dateFormat.getFullYear();
      if(dateDiff>=18 && dateDiff <=60)
      {
        return true;
      }
      else{
        document.getElementById('doberror').textContent="Please select the correct dob";  
        return false;

      }
}

function valiGraduation()
{
  let graduate=document.getElementById("graduation")
  if(graduate.options[graduate.selectedIndex].value=="Choose a graduation")
  {
    console.log("Select a Graduation")
    return false;
    
  }
  else
  {
    console.log("true")
    return true;
  }
}
function validateGraduation()
{
  let graduation=document.getElementById("experience").value
  if(graduation=="")
  {
    console.log("false")
    return false;
  }
  else
  {
    console.log("true")
    return true;
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
function printThankyou()
{
  let form=document.getElementById("form")
  let final=document.getElementById("final");
  form.style.display="none";
  final.style.display="block"

}