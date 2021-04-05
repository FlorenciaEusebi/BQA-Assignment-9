function validateLoginForm(){
  var email = document.myLabelForm.email.value;
  var password = document.myLabelForm.password.value;
  if (email == null || email ==""){
    ErrorL1.innerHTML = "Email is required";
    return false;
  } else {
    ErrorL1.innerHTML = "";}
  if (password == null || password ==""){
    ErrorL2.innerHTML = "Password is required";
    return false;
  } else {
    ErrorL2.innerHTML = "";}
  if (password != null || email != null){
    SuccessL.innerHTML = "Success";
    return false;
  } else {
    SuccessL.innerHTML = "";}
}