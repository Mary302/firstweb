// saving the name of the user

function Save(){
    var info =document.getElementById("namee").value;
    var temp = localStorage.getItem("MyData");
    if (temp) {
        localStorage.setItem("MyData", info)
    } else {
        localStorage.setItem("MyData", info)

    }
    console.log(temp);
}
// getting user's name
function Get(){
    console.log(localStorage.getItem("MyData"))
}
// saving the age of the user
function SaveAge(){
    var agy =document.getElementById("age").value;
    var temp2 = localStorage.getItem("MyAge");
    if (temp2 == null) {
        localStorage.setItem("MyAge", agy)
    } else {
        localStorage.setItem("MyAge", agy)
    }
    console.log(temp2);
}
// getting user's age
function GetAge(){
    console.log(localStorage.getItem("MyAge"))
}

function SavePhone() {
var tel =document.getElementById("phone").value;
var temp3 = localStorage.getItem("MyPhone");
if (temp3 == null){
    localStorage.setItem("MyPhone", tel)
} else 
   localStorage.setItem("MyPhone", tel)
}

function GetPhone(){
    console.log(localStorage.getItem("MyPhone"))
}

function Fenalle() {
    var res =document.getElementById("result");
    res.innerHTML += `Hello ${localStorage.getItem("MyData")}, your age is: ${localStorage.getItem("MyAge")}, and the number is: ${localStorage.getItem("MyPhone")}`
}