window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var errorMsg = document.getElementById("errormsg");
    //alert("ok");
    // var firstname = document.forms["myForm"]["firstname"];
    // var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    // var birthday = document.forms["myForm"]["bday"];
    // var email = document.forms["myForm"]["email"];
    // var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var repeatPassword = document.forms["myForm"]["repeat-password"];
    // // alert(gender.value);

    // if(firstname.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert firstname";
    //     return false;
    // }
    // else if(lastname.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert lastname";
    //     return false;
    // }
    // else if(gender.value.length == 0)
    // {
    //     errorMsg.innerText = "please select gender";
    //     return false;
    // }
    // else if(birthday.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert birthday";
    //     return false;
    // }
    // else if(email.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert email";
    //     return false;
    // }
    // else if(username.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert username";
    //     return false;
    // }
    // else if(password.value.length == 0)
    // {
    //     errorMsg.innerText = "please insert password";
    //     return false;
    // }
    // else if(repeatPassword.value.length == 0)
    // {
    //     errorMsg.innerText = "please retype password";
    //     return false;
    // }
    // else if(password.value != repeatPassword.value)
    // {
    //     errorMsg.innerText = "password do not match";
    //     return false;
    // }

    const form = document.forms[0];
    for(let i = 0; i < form.length; i++)
    {
        if(form.elements[i].value == 0)
        {
            errorMsg.innerText = "please fill in the blanks";
            return false;
        }
    }

    if(gender.value.length == 0)
    {
        errorMsg.innerText = "please select gender";
        return false;
    }

    if(password.value != repeatPassword.value)
    {
        errorMsg.innerText = "password do not match";
        return false;
    }

    alert("register complete");
}