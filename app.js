function Register(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var rpassword = document.getElementById("rpassword")

    var nmsg = document.getElementById("nmsg")
    var emsg = document.getElementById("emsg")
    var pmsg = document.getElementById("pmsg")
    var rpmsg = document.getElementById("rpmsg")


    var error = "";
    if(name.value != ""){
        // Name Pattern
        if(name.value.match(/^[A-z ]{3,12}$/)){
            name.classList.remove("is-invalid")
            name.classList.add("is-valid")
            nmsg.innerHTML = "name Looks good!";
            nmsg.classList.remove("invalid-feedback")
            nmsg.classList.add("valid-feedback")
        } else{
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
            nmsg.innerHTML = "name pattern invalid";
            nmsg.classList.remove("valid-feedback")
            nmsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        name.classList.remove("is-valid")
        name.classList.add("is-invalid")
        nmsg.innerHTML = "name is required";
        nmsg.classList.remove("valid-feedback")
        nmsg.classList.add("invalid-feedback")
        error += "error"
    }



    if(email.value != ""){
        // Name Pattern
        if(email.value.match(/^[A-z0-9\W]+@[A-z]{3,}.[A-z]{2,}$/)){
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
            emsg.innerHTML = "email Looks good!";
            emsg.classList.remove("invalid-feedback")
            emsg.classList.add("valid-feedback")
        } else{
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            emsg.innerHTML = "email pattern invalid";
            emsg.classList.remove("valid-feedback")
            emsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        emsg.innerHTML = "email is required";
        emsg.classList.remove("valid-feedback")
        emsg.classList.add("invalid-feedback")
        error += "error"
    }


    // Password

    if(password.value != ""){
        // Name Pattern
        if(password.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?=.*[0-9]).{8}$/)){
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")
            pmsg.innerHTML = "password Looks good!";
            pmsg.classList.remove("invalid-feedback")
            pmsg.classList.add("valid-feedback")
        } else{
            password.classList.remove("is-valid")
            password.classList.add("is-invalid")
            pmsg.innerHTML = "password pattern invalid";
            pmsg.classList.remove("valid-feedback")
            pmsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
        pmsg.innerHTML = "password is required";
        pmsg.classList.remove("valid-feedback")
        pmsg.classList.add("invalid-feedback")
        error += "error"
    }


    if(rpassword.value != ""){
        // Name Pattern
        if(rpassword.value == password.value){
            rpassword.classList.remove("is-invalid")
            rpassword.classList.add("is-valid")
            rpmsg.innerHTML = "retypepassword match!";
            rpmsg.classList.remove("invalid-feedback")
            rpmsg.classList.add("valid-feedback")
            
        } else{
            rpassword.classList.remove("is-valid")
            rpassword.classList.add("is-invalid")
            rpmsg.innerHTML = "retypepassword Not Match";
            rpmsg.classList.remove("valid-feedback")
            rpmsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        rpassword.classList.remove("is-valid")
        rpassword.classList.add("is-invalid")
        rpmsg.innerHTML = "retypepassword is required";
        rpmsg.classList.remove("valid-feedback")
        rpmsg.classList.add("invalid-feedback")
        error += "error"
    }


    // Account Created Success Logic

    if(error == ""){
        // Set Data Into LocalStorage
        localStorage.setItem("name",name.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        alert("Account Created Successfully")
    }
}



// Function Login

function Login(){
  
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var emsg = document.getElementById("emsg")
    var pmsg = document.getElementById("pmsg")
    


    var error = "";
    if(email.value != ""){
        // Name Pattern
        if(email.value.match(/^[A-z0-9\W]+@[A-z]{3,}.[A-z]{2,}$/)){
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
            emsg.innerHTML = "email Looks good!";
            emsg.classList.remove("invalid-feedback")
            emsg.classList.add("valid-feedback")

            
        } else{
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            emsg.innerHTML = "email pattern invalid";
            emsg.classList.remove("valid-feedback")
            emsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        emsg.innerHTML = "email is required";
        emsg.classList.remove("valid-feedback")
        emsg.classList.add("invalid-feedback")
        error += "error"
    }


    // Password

    if(password.value != ""){
        // Name Pattern
        if(password.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?=.*[0-9]).{8}$/)){
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")
            pmsg.innerHTML = "password Looks good!";
            pmsg.classList.remove("invalid-feedback")
            pmsg.classList.add("valid-feedback")
        } else{
            password.classList.remove("is-valid")
            password.classList.add("is-invalid")
            pmsg.innerHTML = "password pattern invalid";
            pmsg.classList.remove("valid-feedback")
            pmsg.classList.add("invalid-feedback")
            error += "error"
        }
    }else{
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
        pmsg.innerHTML = "password is required";
        pmsg.classList.remove("valid-feedback")
        pmsg.classList.add("invalid-feedback")
        error += "error"
    }

    // Account Created Success Logic
    if(error == ""){
            if(email.value == localStorage.getItem('email') && password.value == localStorage.getItem("password")){
                    location.assign("dashboard.html")
            }else{
                alert("Email Or Password Not Correct")
            }
    }
}



// Show Password


function ShowPassword(){
   var pass = document.getElementById("password")
   
   if(pass.type == "password"){
    pass.type = "text";
   }else{
    pass.type = "password";
   }
}