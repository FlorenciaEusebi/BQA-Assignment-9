 var validateDiv = document.querySelector(".validateDom");
 var validContent = "Login form content results:";

 var validateDom = function () {
   if (document.querySelector (".loginForm")) {
     validateDiv.append(validContent + " " + "Form exists." + " ");
   }
   else {
     validateDiv.append(validContent + " " + "Form is non-existent." + " ");
   }
 }

var numberOfFields = function () {
  var fields = document.querySelectorAll("input");
  var fieldsNumber = fields.length;
  if (fieldsNumber = 2) {
    validateDiv.append (validContent + " " + "Fields exist." + " ");
  }
  else {
    validateDiv.append(validContent + " " + "Fields are non-existent." + " ");
  }
}

var inputsRequired = function () {
  var input = document.querySelectorAll(".loginInput").required;
  if (input = true) {
    validateDiv.append(validContent + " " + "Fields are required." + " ");
  }
  else {
      validateDiv.append(validContent + " " + "Not all fields are required." + " ");
    }
}

var labelsAssociated = function () {
  var input = document.querySelectorAll(".loginInput").name;
  var labels = document.querySelectorAll("labels").for;
  if (inputs === labels) {
    validateDiv.append(validContent + " " + "Inputs are associated." + " ")
  }
  else {
      validateDiv.append(validContent + " " + "Inputs are not associated." + " ");
    }
}

var buttonContent = function () {
  var submitButton = document.querySelector(".myButton").nodeValue;
  var submitValue = "Log in";
  if (submitButton = submitValue) {
      validateDiv.append(validContent + " " + "Button content is OK" + " ");
  }
  else {
      validateDiv.append(validContent + " " + "Button content is not OK" + " ");
  }
}

var anchorTag = function () {
  var anchor = document.querySelector("a").href;
  var hrefExists = "register.html";
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
      validateDiv.textContent = validContent + " " + "Successful login validation.";
  }
}

function validateLoginForm(){
  var email = document.forms ["myLoginForm"]["email"];
  var password = document.forms["myLoginForm"]["password"];
    if (email.value == "") {
      errorL1.innerHTML = "Email is required.";
      email.focus();
      return false;
    }
    if (password.value == "") {
        errorL2.innerHTML= "Please enter your password.";
        password.focus();
        return false;
    }
    if (password != null || email != null){
        successL.innerHTML = "Success";
        return false;
    }
    else {
        successL.innerHTML = "";
      }
        return true;
}