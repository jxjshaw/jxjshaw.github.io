


var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password"),
    btn = document.getElementById("enter")
    ;

function validatePassword(){
  if(password.value != "aviato") {

    alert("password incorrect ");

  } else {
        $('#login').css('display', 'none');
        $('.project-image').css('display', 'table');
        $('.project-image').css('opacity', '1');


  }
}

password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;
