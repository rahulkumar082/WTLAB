
function checkfname(){
    var fname = document.getElementById("firstName").value;
    if((/^[0-9]+$/).test(fname)){
        alert("Warning : Please Enter alphabets only");
        document.getElementById("firstName").innerHTML="";
    }    
}
function checklname(){
    var lname = document.getElementById("lastName").value;
    if((/^[0-9]+$/).test(lname)){
        alert("Warning : Please Enter alphabets only");
        document.getElementById("lasttName").innerHTML="";
    }    
}
function dateTake(){
    var dob = document.getElementById("dateob").value;
}
function mobNum(){
    var mob = document.getElementById("mobileNum").value;
    if(mobileNum.length>10){
        alert("Warning: Wrong Mobile number");
        document.getElementById("mobNum").innerHTML="";
    }
    if((/^[a-zA-Z]+$/).test(mob)){
        alert("Warning: Alphabets in Mobile Number")
        document.getElementById("mobNum").innerHTML="";
    }
}

function submitThis(){
    dateTake();
    var email = document.getElementById("emailId").value;
    if((email.includes('co')||email.includes('com')||email.includes('@')))
        alert("Submitted");
    else{
    alert("Incorrect Email Address");
    document.getElementById("emailId").innerHTML="";
}

}