var zahl = 0;

function countUp() {
    if (zahl < 10) {
        zahl ++;
        document.getElementById("counterOut").innerHTML = "Zahl: " + zahl;
    } else {
        alert("Zähl Limit erreicht!");
    }
}

function countDown() {
    zahl --;
    document.getElementById("counterOut").innerHTML = "Zahl: " + zahl;
}

//Aufgabe 2
var visibility = "visible";


function changeImageVisibility() { 
    document.getElementById("Aufg2Img").style.transition = "opacity 500ms";
    if (visibility == "visible") {
        visibility = "hidden";
        document.getElementById("Aufg2Img").style.opacity = 0;
        document.getElementById("Aufg2Bt").innerHTML = "Einblenden";
    } else {
        visibility = "visible";
        document.getElementById("Aufg2Img").style.opacity = 1;
        document.getElementById("Aufg2Bt").innerText = "Ausblenden";
    }
}
