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


//lagrar klass & ID hos den bild man klickar på
var klassKlick = [ 0, 0, 0, 0];
var idKlick = [ 0, 0, 0, 0];

var antalPar = 0;


//Diverse funktioner som används i "parhittandet"

//Återställer alla variabler
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
    var bool;
    
    for(var i = 1; i < klassKlick.length; i++) {
        
        if(klassKlick[i] == 0) {
            break;
        }
        else if (klassKlick[0] != klassKlick[i]) {
            bool = false;
        }
        else {
            bool = true;
        }
    }
    return bool;
};

//Kollar så att alla ID skiljer sig åt
function differentId() {
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
    
    return bool;
}

function toggleClass(className) {
    $("." + className).fadeToggle("fast");
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
        
        //Kollar efter paret med klass 1
        if(klassKlick[0] == "1") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("1");
                resetKlicks();
            }           
            
        }
    }
    else if(klassKlick[2] == 0) {
        klassKlick[2] = $(this).attr("class");
        idKlick[2] = $(this).attr("id");
        alert(klassKlick[2]);

    }
    else if(klassKlick[3] == 0) {
        klassKlick[3] = $(this).attr("class");
        idKlick[3] = $(this).attr("id");
        alert(klassKlick[3]);
        
        //Kollar efter paret med klass 2
        if(klassKlick[0] == "2") {
            
            
            if(allSameClass() == true && differentId() == true) {
                toggleClass("2");
                resetKlicks();
                
            }     
            else {
                resetKlicks();
                alert("Du hittade inte alla par...");
            }
        }
    }
});