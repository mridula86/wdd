function validateForm(){

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirmPassword").value;

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("phoneError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("confirmError").innerHTML="";

    let valid=true;

    if(name==""){
        document.getElementById("nameError").innerHTML="Name is required";
        valid=false;
    }

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        document.getElementById("emailError").innerHTML="Enter a valid email";
        valid=false;
    }

    let phonePattern=/^[0-9]{10}$/;

    if(!phone.match(phonePattern)){
        document.getElementById("phoneError").innerHTML="Enter a valid 10-digit phone number";
        valid=false;
    }

    if(password.length<6){
        document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
        valid=false;
    }

    if(password!=confirm){
        document.getElementById("confirmError").innerHTML="Passwords do not match";
        valid=false;
    }

    if(valid){
        alert("Registration Successful!");
    }

    return valid;
}