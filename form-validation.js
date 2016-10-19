function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  if(userEntered.length >= 6) {
    document.getElementById("usernameGroup").classList.add("has-success");
    }
    <script>
    console.log(herehere);
    </script>
  //Show message that there is an error with the username...
  else {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters with no space.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    }
  var passEntered = document.getElementById("pass").value;
  if(passEntered.length >6 || <20) {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if(passEntered.text " "){
    document.getElementById("passwordError").innerHTML="Password may have no spaces.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
    //Show message that there is an error with the password...
  if (passEntered.length <6||>20){
    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters and not be your username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
   }
  if(passEntered.text "password","PASSWORD"){
    document.getElementById("passwordError").innerHTML="Do not use PASSWORD or password as your password, please.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
   }
}
