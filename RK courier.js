// .....................js code for login page..............

function login() {
    let num = "";
    let number = document.getElementById("number").value;
   
    if (number === "") {
        document.getElementById("enterDigits").innerHTML = "*Please Enter Number..   ";
      
    }
    else {
        let pattern = /^[0-9]\d{9}$/;
        if (pattern.test(number) === false) {
            document.getElementById("enterDigits").innerHTML = "*Please Enter Valid Number..";

        }
    
    }
    let password=document.getElementById("password").value;
    if(password==="Raju"){
        location.href="http://127.0.0.1:5500/Rk%20courier/rk1.html"
    }else{
        let passwordd=document.getElementById("enterPassword").innerHTML = "*Please Enter Password..   ";
    }
    
}


// .............js code for ship page ......................

function myFunction(){
        
    document.getElementById("demo").style.display="block";
    document.getElementById("demo1").style.display="none";
   
}
function myFunction1(){
    document.getElementById("demo").style.display="none";
    document.getElementById("demo1").style.display="block";

}


// js code for pincode ship page 


function pincode() {
    let pin = "";
    let pinnum = document.getElementById("pinnum").value;
   
    if (pinnum === "") {
        document.getElementById("enterPin").innerHTML = "*Please enter pincode..   ";
      
    }
    else {
        let pattern = /^[0-9]\d{5}$/;
        if (pattern.test(pinnum) === false) {
            document.getElementById("enterPin").innerHTML = "*Please enter valid pincode..";

        }
        // else{
        //     location.href="http://127.0.0.1:5500/Rk%20courier/weight.html";
        // }
    
    }
    let pinnum1=document.getElementById("pinnum1").value;
    if(pinnum1==="560066"){
        location.href="http://127.0.0.1:5500/Rk%20courier/weight.html"
    }else{
        let pinnum1=document.getElementById("enterPin1").innerHTML = "*Please enter destination pincode..   ";
    }
}

// function pincode() {
//     let pin1 = "";
//     let pinnum1 = document.getElementById("pinnum1").value;
   
//     if (pinnum1 === "") {
//         document.getElementById("enterPin1").innerHTML = "*Please enter pincode..   ";
      
//     }
//     else {
//         let pattern = /^[0-9]\d{5}$/;
//         if (pattern.test(pinnum1) === false) {
//             document.getElementById("enterPin1").innerHTML = "*Please enter valid pincode..";

//         }
//         else{
//             location.href="http://127.0.0.1:5500/Rk%20courier/weight.html";
//         }
    
//     }
// }

// .................js code for weight page .................

var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }

//.................... js code for pay page..................

// js code for card

let cardpay = document.getElementById("card").value;
    let cardpay1 = document.getElementById("card1").value;
    let cardpay2 = document.getElementById("card2").value;
    let cardpay3 = document.getElementById("card3").value;
function paymoney(){
    
    // console.log(cardpay)
    if(cardpay==="123456789")
    {
        location.href="http://127.0.0.1:5500/Rk%20courier/sucess.html";
    }
    else{
        document.getElementById("cardnum").innerHTML=" please Enter card details";
    }

}
function paymoney(){
    let cardpay1 = document.getElementById("card1").value;
    // console.log(cardpay)
    if(cardpay1==="raju ")
    {
        location.href="http://127.0.0.1:5500/Rk%20courier/sucess.html";
    }
    else{
        document.getElementById("cardnum").innerHTML=" please Enter card details";
    }

}
function paymoney(){
    let cardpay2 = document.getElementById("card2").value;
    // console.log(cardpay)
    if(cardpay2==="1122")
    {
        location.href="http://127.0.0.1:5500/Rk%20courier/sucess.html";
    }
    else{
        document.getElementById("cardnum").innerHTML=" please Enter card details";
    }

}
function paymoney(){
    let cardpay3 = document.getElementById("card3").value;
    // console.log(cardpay)
    if(cardpay3==="111")
    {
        location.href="http://127.0.0.1:5500/Rk%20courier/sucess.html";
    }
    else{
        document.getElementById("cardnum").innerHTML=" please enter card details";
    }

}

// js code for upi

function paymoney1(){
    let cardpay4 = document.getElementById("card4").value;
    // console.log(cardpay)
    if(cardpay4==="9740744074@ybl")
    {
        location.href="http://127.0.0.1:5500/Rk%20courier/sucess.html";
    }
    else{
        document.getElementById("cardnum1").innerHTML=" please enter valid UPI ID";
        document.getElementById("cardnum2").innerHTML=" id must contain @ybl or @ibl";
    }
}

// .......................js code for track page.......................

function tracknum(){
    let validation = document.getElementById("input").value;
    if(validation==="93363546")
    {
      location.href="http://127.0.0.1:5500/Rk%20courier/track%20history.html"
    }
    else{
      document.getElementById("ermessage").innerHTML="Enter valid number";
    }
      
  }
