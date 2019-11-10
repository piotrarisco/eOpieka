


//function populate(){
//    let button
//    
//    
//    let link = document.createElement("a");
//    link.setAttribute("href", "#" + buttonId);
//}

//animacja wifi
var pause = 1500;
wifiAnimation();
function wifiAnimation(){
    document.getElementById("wifi2").style.display = "none";
    document.getElementById("wifi3").style.display = "none";
    document.getElementById("wifi4").style.display = "none";
    setTimeout('document.getElementById("wifi2").style.display = "block";', pause);
    setTimeout('document.getElementById("wifi3").style.display = "block";', pause*2);
    setTimeout('document.getElementById("wifi4").style.display = "block";', pause*3);
    setTimeout('wifiAnimation();', pause*4);
}





function showHide(elem) {
        var descId = "desc" + elem.getAttribute("id").replace("button", "");        
        var x = document.getElementById(descId);
        if (x.className.indexOf("showHide") == -1) {
        x.className += " showHide";
        } else { 
        x.className = x.className.replace(" showHide", "");
        }
    }