var text = null;
var password = null;
var final_text = null;
var sel = null;

function encrypt() {
    text = document.getElementById("input").value;
    password = document.getElementById("password").value;
    sel = document.getElementById("method").value;
    if (sel == "b64") {
        final_text = btoa(text)
    }
    document.getElementById("result").innerHTML = final_text;
    document.getElementById("titleresult").innerHTML = "Texto Cifrado";
}

function decrypt() {
    text = document.getElementById("input").value;
    password = document.getElementById("password").value;
    sel = document.getElementById("method").value;
    if (sel == "b64") {
        final_text = atob(text)
    }
    document.getElementById("result").innerHTML = final_text;
    document.getElementById("titleresult").innerHTML = "Texto Cifrado";
}

function binary() {
    
}