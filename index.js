function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();
    //var alphaletters= /^[a-zA-Z]*$/;
    var name = document.forms['myForm']["fname"].value;
    if (name.length<4){
        seterror("name", "*Length of username must be atleast of 4 charecter");
        returnval = false;
    }
     else if(!name.value.match(alphaletters)){
         seterror("name","*username nust contains alphabets only");
         returnval = false; 
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
     var emailcharecter =/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
     if (!email.value.match( emailcharecter)){
         seterror("email", "*Email formate do not match");
         returnval = false;
    }

    var citizenship = document.forms['myForm']["fcitizenship"].value;
    if (citizenship.length <= 2){
        seterror("citizenship", "*citizenship must be greater than 2 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}