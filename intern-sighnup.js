function f1(){
    var fname=document.getElementById("t1").value;
    const t8=   document.getElementById("t8").value;
    var phno=document.getElementById("t3").value;
    var address=document.getElementById("t4").value;
    var username=document.getElementById("t5").value;
    var pass=document.getElementById("t6").value;
    var rpass=document.getElementById("t7").value;
    
    
    if(fname==""){
        alert("enter correct first name");
        focus("t1");
    }
    if(phno == ""|| phno < "10"||phno == "2f-"){
        alert("enter correct phone number");
        focus("t3");
    }
    if(address==""||address < "5"){
        alert("Incorrect Address");
        focus("t4");
    }
    if(username==""){
        alert("enter correct username");
        focus("t5");
    }
    if(pass==""||pass<8){
        alert("enter correct password");
        focus("t6");
    }
    if(rpass==""||rpass!=pass){
        alert("Re-Type correct password");
        focus("t7");
    }
    
    else
    {
        alert(t8);
    }
};
    
    