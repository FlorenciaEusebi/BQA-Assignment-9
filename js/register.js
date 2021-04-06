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