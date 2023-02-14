//create a constructor for the users
function User(email,pass,fname,lname,age,gender,phone,payment,color){
    this.email=email;
    this.password=pass;
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;  
}
function validation(user){
    let valid=true;

    if(user.email==""){
        //if I get here it means that the email is empty
        valid=false;
        $("#txtEmail").addClass("alert-error");
    }
    if(user.color=="#000000"){
        valid=false;
        $("#selColor").addClass("alert-error");
    }
    if(user.payment==""){
        valid=false;
        $("#selPayment").addClass("alert-error");
    }
    return valid;
}
function register(){
    //get the values from the form
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();
    //create the user using the constructor
    let newUser = new User(inputEmail,inputPassword,inputFname,inputLname,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    if(validation(newUser)){
        saveUser(newUser); //this fn is under storeManager
    }
    //clear the form
    $("input").val("");
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init;