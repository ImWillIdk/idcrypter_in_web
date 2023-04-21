var text = null;
var text2 = text;

function encrypt() {
    text = document.getElementById("text").value;
    document.getElementById("result").innerHTML = text2;
    document.getElementById("titleresult").innerHTML = "Texto Cifrado";
}

function decrypt() {
    text = document.getElementById("text").value;
    document.getElementById("result").innerHTML = text2;
    document.getElementById("titleresult").innerHTML = "Texto Descifrado";
}

