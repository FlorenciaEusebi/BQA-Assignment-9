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