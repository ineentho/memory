//Funktioner för att gerera bilder och randomisera dessa


//Array med länkar till alla bilder som ska användas
//Sparas på det här viset eftersom de ska genereras i slumpmässigordning
//innan de läggs till i html-filen
var bilder = [
    "<img class='1' id='colors1' src='bilder/g0000.gif'>",
    "<img class='1' id='colors2' src='bilder/g0000.png'>",
    "<img class='2' id='resample1' src='bilder/resample1.png'>",
    "<img class='2' id='resample2' src='bilder/resample2.png'>",
    "<img class='2' id='resample3' src='bilder/resample3bilineal.png'>",
    "<img class='2' id='resample4' src='bilder/resampling4bicubic.png'>"
];

//hämtar elementet som bilderna ska läggas in i 
var bildContainer = document.getElementById("bilder");

//funktion för att randomisera innehållet i arrayen
//inspirerat ifrån http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray() {
    for (var i = bilder.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = bilder[i];
        bilder[i] = bilder[j];
        bilder[j] = temp;
    }
    return bilder;
}

//funktion för att skriva ut bilderna till html-filen
function printBilder() {
    for(var i = 0; i < bilder.length; i++) {
        j = bildContainer.innerHTML += bilder[i];
    }
};

//laddar funktionerna ovanför så att de körs när sidan laddas
window.onload = shuffleArray(bilder);
window.onload = printBilder(bilder);


//---------------------------------------------------------------------------



//Funktioner för funktionaliteten i spelet


//inspiration till funktionen som gör att man kan klicka på alla bilder och skicka dess class
//http://stackoverflow.com/questions/964119/how-to-get-the-class-of-the-clicked-element


//lagrar klassen hos den bild man klickar på
var klassKlick = [ 0, 0, 0, 0];
var idKlick = [ 0, 0, 0, 0];

var antalPar = 0;

function resetKlicks() {
    klassKlick[0] = 0;
    klassKlick[1] = 0;
    klassKlick[2] = 0;
    klassKlick[3] = 0;
    
    idKlick[0] = 0;
    idKlick[1] = 0;
    idKlick[2] = 0;
    idKlick[3] = 0;
}

//Kollar så att alla klasser är samma
function allSameClass() {
    alert("allSameClass");
    alert(klassKlick[0] + " " + klassKlick[1] + " " + klassKlick[2] + " " + klassKlick[3]);
    var bool;
    
    for(var i = 0; i < klassKlick.length - 1; i++) {
        
        if(klassKlick[i] == 0 || klassKlick[i + 1] == 0) {
            break;
        }
        else if (klassKlick[i] != klassKlick[i + 1]) {
            bool = false;
        }
        else {
            bool = true;
        }
    }
    alert(bool);
    return bool;
};


function differentId() {
    alert("differentID");
    alert(idKlick[0] + " " + idKlick[1] + " " + idKlick[2] + " " + idKlick[3]);
    var bool;
    
    for(var i = 1; i < idKlick.length; i++) {
        
        if(idKlick[i] == 0) {
            break;
        }
        else if (idKlick[0] == idKlick[i]) {
            bool = false;
        }
        else {
            bool = true;
        }
    }
    
    alert(bool);
    return bool;
}


//När man klickar på en bild körs funktionen
$("img").click(function() {
    
    //kollar om det finns ett värde i variablerna och tilldelar klassens värde
    if(klassKlick[0] == 0) {
        klassKlick[0] = $(this).attr("class"); 
        idKlick[0] = $(this).attr("id");
        alert(klassKlick[0]);
    } 
    else if(klassKlick[1] == 0) {
        klassKlick[1] = $(this).attr("class");
        idKlick[1] = $(this).attr("id");
        alert(klassKlick[1]);
        
        //Kollar efter just det här paret
        if(allSameClass() == true && differentId() == true
           && klassKlick[0] == "1") {
            
            $("." + klassKlick[0]).fadeToggle("fast");
            
            resetKlicks();
        }
    }
    else {
        resetKlicks();
    }
//    else if(klassKlick3 == 0) {
//        klassKlick3 = $(this).attr("class");
//        idKlick3 = $(this).attr("id");
//
//    }
//    else if(klassKlick4 == 0) {
//        klassKlick4 = $(this).attr("class");
//        idKlick4 = $(this).attr("id");
//        
//        if(klassKlick1 == "2" && klassKlick2 == "2" && klassKlick3 == "2" && klassKlick4="2" &&
//           idKlick1 !=)
//
//    }
});
    //Om variablerna är lika försvinner paret
//    if(x != 0 && y != 0) {
//        if(x == y && a != b) {
//            $("." + x).fadeToggle("fast");
//            
//            x = 0;
//            y = 0;
//            
//            //Håller koll på hur många par du hittat
//            par += 1;
//            
//            if(par == 3) {
//                alert("Du hittade alla par!");
//            }
//            
//        }
//        //annars återställs variablerna
//        else {
//            x = 0;
//            y = 0;
//            
//            alert("Bilderna var inte ett par...")
//        }
//    }
//});