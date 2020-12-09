// all the code within this block 
document.addEventListener("DOMContentLoaded", ()=> {
    // getting access to inputed form 
    const form = document.getElementById("form");
    // getting access to inputed username
    const username = document.getElementById("username");
    // getting access to inputed email id
    const email = document.getElementById("emailid");
    // getting access to inputed mobile number
    const phoneno = document.getElementById("mobnumber");
    // getting access to inputed password 
    const password = document.getElementById("password");
    // getting access to inputed confirmed password
    const cPassword = document.getElementById("confirmpassword");
    
    //to prevent the default behaviour of browser . it basically automatically submits the form . so , to prevent that I've used this
    form.addEventListener("submit" , (event) => {
        event.preventDefault();
        validate();
    }) 
    
    //check srate and count are equal . if , equal it submits the form else not . 
    //which means that there is class form-control success applied to all input feilds
    const sendData = (usernameVal , sRate , count) => {
        if(sRate === count){
            alert("Registration Successfull");
            // used sweet alert to get the advance alert message 
            swal("Welcome! " + usernameVal, "Registration Successfull", "success");
            //used location.href . so onclick of submit button data recieved from user is taken to page called checking1.html or we can use this to send data to backend as well , if we working with it .
            location.href = `checking1.html?username=${usernameVal}`
        }
    }
    
    //function to check that all the input feild are having parent element of class form-control success or not 
    // or basically all input feild are having green borders or not
    const successMessage = (usernameVal) => {
        //getting access to div of class form-control
        let finalchecking = document.getElementsByClassName('form-control');
        // checks how many input feild are there and then minus 1 cause index are 0 based
        var count = finalchecking.length - 1;
        // for loop
        for (var i = 0 ; i < finalchecking.length ; i++){
            //if all the input feilds contains class of form-control success then
            if(finalchecking[i].className === "form-control success"){
                // srate 0 + i . and the i would be 4 . in case of 5 , loop condition is false so , it won't execute 
                var sRate = 0 + i;
                console.log(sRate);
                //invoked other function send data with three parameters 
                sendData(usernameVal , sRate , count);
            }else{
                return false;
            }
        }
    }

    //more email validation
    const isEmail = (emailVal) => {
        // checking if email contains @ symbol or not
        var atsymbol = emailVal.indexOf("@");
        //if @ symbol is at the start of text then return false .
        //return false cause we don't want the form to be submitted
        if(atsymbol < 1) return false;
        // checks if last digit of email is . or no
        var dot = emailVal.lastIndexOf(".");
        //after @ symbol there should be atleast two characters else return false
        if(dot <= atsymbol + 2) return false;
        // dot should'nt be at last . if there at last , then return false
        if(dot === emailVal.length - 1) return false;
        return true;
    
    }

    const validate = () => {
    // trimming value of username
    const usernameVal = username.value.trim();
    // trimming value of email
    const emailVal = email.value.trim();
    // trimming value of phone number
    const phonenoVal = phoneno.value.trim();
    // trimming value of password
    const passwordVal = password.value.trim();
    // trimming value of confirm password
    const cPasswordVal = cPassword.value.trim();
        
    //validate username
    //if null then , set error message
    if (usernameVal === ""){
        setErrorMsg(username , "UserName can't be blank");
    // else if length is less than equal to 2 then , set error message
    }else if(usernameVal.length <= 2){
        setErrorMsg(username , "UserName should be min 3 character long!");
    //else set success message
    }else{
        setSuccessMsg(username);
    } 
        
    //validate email id
    //if null then , set error message
    if (emailVal === ""){
        setErrorMsg(email , "email can't be blank");
    // else if invoked another function isEmail 
    //if isEmail not equal to emailval then , set error message
    }else if(!isEmail(emailVal)){
         setErrorMsg(email , "Not a valid Email!");
    // else set success message
    }else{
        setSuccessMsg(email);
    }
        
    //validate phone 
    //if null then , set error message
    if (phonenoVal === ""){
        setErrorMsg(phoneno , "Phone No can't be blank");
    // if phone number not equal to 10 then , set error message
    }else if(phonenoVal.length != 10){
        setErrorMsg(phoneno , "Not a valid Phone Number");
    //else set success message
    }else{
        setSuccessMsg(phoneno);
    }
        
    //validate password 
    //if null then , set error message
    if (passwordVal === ""){
        setErrorMsg(password , "Password can't be blank");
    // if password is less than or equal to 7 then set error message . 
    // should be greater than 7 digit or character
    }else if(passwordVal.length <= 7){
        setErrorMsg(password , "Should be atleast 7 Character long!");
    // else set success message
    }else{
        setSuccessMsg(password);
    }
        
    //validate confirm password 
    //if null then , set error message
    if (cPasswordVal === ""){
        setErrorMsg(cPassword , "Confirm Password can't be blank");
    // else if confirm password is not equal to password then set error message
    }else if(cPasswordVal != passwordVal ){
        setErrorMsg(cPassword , "Password is not matching!");
    // else set success message
    }else{
        setSuccessMsg(cPassword);
    }  
    
    //invoked function called successMessage with one parameter
    successMessage(usernameVal);
    
}
    
    // error message function
    function setErrorMsg(input, errormessage) {
        
        // get's the parent element (form-control)
        const formcontrol = input.parentElement;
        // selecting small element inside of parent (form-control) 
        // but we have assign it a name called formcontrol
        const small = formcontrol.querySelector("small");
        // changing class name of form-control to form-control error . 
        formcontrol.className = "form-control error";
        //displaying a error message in small element
        small.innerText = errormessage;
        
    }
    
    // success message function
    function setSuccessMsg(input){
        // get's the parent element (form-control)
        const formcontrol = input.parentElement;
        // changing class name of form-control to form-control success  .
        formcontrol.className = "form-control success";
    }
    
})