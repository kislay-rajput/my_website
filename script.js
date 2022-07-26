function validatefirstname(){
    var fname=document.getElementById("fname").value;
    var re1=/^[a-zA-Z\s\-]{2,15}$/;
    if(re1.test(fname))
    {
        document.getElementById("firstnamePrompt").style.color="Green";
        document.getElementById("firstnamePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("firstnamePrompt").style.color="red";
        document.getElementById("firstnamePrompt").innerHTML="<strong>Enter 2 to 15 characters";
        return false;
    }
}
function validatelastname()
{
    var lname=document.getElementById("lname").value;
    var re2=/^[a-zA-Z\s\-]{2,15}$/;
    if(re2.test(lname))
    {
        document.getElementById("lastnamePrompt").style.color="Green";
        document.getElementById("lastnamePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("lastnamePrompt").style.color="red";
        document.getElementById("lastnamePrompt").innerHTML="<strong>Enter 2 to 15 characters";
        return false;
    }
}
function validateemail()
{
    var email=document.getElementById("email").value;
    var re3=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,20})?$/;
    if(re3.test(email))
    {
        document.getElementById("emailPrompt").style.color="Green";
        document.getElementById("emailPrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("emailPrompt").style.color="red";
        document.getElementById("emailPrompt").innerHTML="<strong>use abc123@gmail.com</strong>";
    }
}
function validatephone()
{
    var phno=document.getElementById("phone").value;
    var re4=/^\d{3}-\d{3}-\d{4}$/;
    if(re4.test(phno))
    {
        document.getElementById("phonePrompt").style.color="Green";
        document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else{
        document.getElementById("phonePrompt").style.color="Red";
        document.getElementById("phonePrompt").innerHTML="<strong>Use xxx-xxx-xxxx</strong>";
        return false;
    }
}
function display()
{
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var username=fname+" "+lname;

    document.getElementById("register").innerHTML="Hello and Welcome "+username+", You are registered successfully";

}