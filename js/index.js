var text = null;
var password = null;

function encrypt() {
    text = document.getElementById("input").value;
    password = document.getElementById("password").value;
    document.getElementById("result").innerHTML = text;
    document.getElementById("titleresult").innerHTML = "Texto Cifrado";
}

function binary() {
    
}