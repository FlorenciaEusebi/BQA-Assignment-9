var validateDiv = document.querySelector(".validateDom");
var validContent = "Register form content results:";

 var validateDom = function () {
   if (document.querySelector (".registerForm")) {
     validateDiv.append(validContent + " " + "Form exists." + " ");
   }
   else {
     validateDiv.append(validContent + " " + "Form is non-existent." + " ");
   }
 }

var numberOfFields = function () {
  var fields = document.querySelectorAll("input");
  var fieldsNumber = fields.length;
  if (fieldsNumber = 4) {
    validateDiv.append (validContent + " " + "Fields exist." + " ");
  }
  else {
    validateDiv.append(validContent + " " + "Fields are non-existent." + " ");
  }
}

var inputsRequired = function () {
  var input = document.querySelectorAll(".registerInput").required;
  if (input = true) {
    validateDiv.append(validContent + " " + "Fields are required." + " ");
  }
  else {
      validateDiv.append(validContent + " " + "Not all fields are required." + " ");
    }
}

var labelsAssociated = function () {
  var input = document.querySelectorAll(".registerInput").name;
  var labels = document.querySelectorAll("labels").for;
  if (inputs === labels) {
    validateDiv.append(validContent + " " + "Inputs are associated." + " ")
  }
  else {
      validateDiv.append(validContent + " " + "Inputs are not associated." + " ");
    }
}

var buttonContent = function () {
  var resetButton = document.querySelector("#myResetButton").nodeValue;
  var submitButton = document.querySelector(".myButton").nodeValue;
  var resetValue = "Clear";
  var submitValue = "Register";
  if ((submitButton = submitValue) && (resetButton = resetValue)) {
      validateDiv.append(validContent + " " + "Button content is OK" + " ");
  }
  else {
      validateDiv.append(validContent + " " + "Button content is not OK" + " ");
  }
}

var anchorTag = function () {
  var anchor = document.querySelector("a").href;
  var hrefExists = "login.html";
  if (anchor = hrefExists) {
      validateDiv.append(validContent + " " + "Anchor tag exists" + " ");
  }
  else {
      validateDiv.append(validContent + " " + "Anchor tag is non-existent" + " ");
  }
}

var finalValidation = function () {
  if ((validateDom = true) && (numberOfFields = true) && (inputsRequired = true) &&
  (labelsAssociated = true) && (buttonContent = true) && (anchorTag = true)) {
      validateDiv.textContent = validContent + " " + "Successful register validation.";
  }
}

function validateRegisterForm(){
  var email = document.myRegisterForm.email.value;
  var fullName = document.myRegisterForm.fullName.value;
  var password = document.myRegisterForm.password.value;
  var confirmPassword = document.myRegisterForm.confirmPassword.value;
  if (email == null || email ==""){
    Error1.innerHTML = "Email is required.";
    return false;
  } else {
    Error1.innerHTML = "";}
  if (fullName == null || fullName ==""){
    Error2.innerHTML = "Full name is required.";
    return false;
  } else {
    Error2.innerHTML = "";}
  if (password == null || password ==""){
    Error3.innerHTML = "Password is required.";
    return false;
  } else {
    Error3.innerHTML = "";}
  if (confirmPassword == null || confirmPassword ==""){
    Error4.innerHTML = "Please confirm password.";
    return false;
  } else {
    Error4.innerHTML = "";}
  if (confirmPassword != password){
    Error5.innerHTML = "Password does not match.";
    return false;
  } else {
    Error5.innerHTML = "";}
  if (confirmPassword = password || password != null || fullName != null || email != null || confirmPassword!= null){
    Success.innerHTML = "Success";
    return false;
  } else {
    Success.innerHTML = "";}
}