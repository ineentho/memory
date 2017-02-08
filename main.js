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
    "<img class='2' id='resample4' src='bilder/resampling4bicubic.png'>",
    "<img class='3' id='bitar1' src='bilder/2-bitar.png'>",
    "<img class='3' id='bitar2' src='bilder/4-bitar.bmp'>",
    "<img class='3' id='bitar3' src='bilder/8-bitar.bmp'>",
    "<img class='3' id='bitar4' src='bilder/16-bitar.bmp'>",
    "<img class='3' id='bitar5' src='bilder/24-bitar.bmp'>",
    "<img class='4' id='filformat1' src='bilder/filformat.gif'>",
    "<img class='4' id='filformat2' src='bilder/filformat.jpg'>",
    "<img class='4' id='filformat3' src='bilder/filformat.png'>",
    "<img class='5' id='antiAliasing1' src='bilder/antialiasing.jpg'>",
    "<img class='5' id='antiAliasing2' src='bilder/jagged.jpg'>",
    "<img class='6' id='falseColor1' src='bilder/false-color.jpg'>",
    "<img class='6' id='falseColor2' src='bilder/true-color.jpg'>",
    "<img class='7' id='effects1' src='bilder/jellyfish.jpg'>",
    "<img class='7' id='effects2' src='bilder/jellyfishblur.jpg'>",
    "<img class='7' id='effects3' src='bilder/jellyfishemboss.jpg'>",
    "<img class='7' id='effects4' src='bilder/jellyfishsharp.jpg'>",
    "<img class='8' id='moaire1' src='bilder/moaire.jpg'>",
    "<img class='8' id='moaire2' src='bilder/moaire_fixed2.jpg'>"
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
var klassKlick = [ 0, 0, 0, 0, 0];
var idKlick = [ 0, 0, 0, 0, 0];

var antalPar = 0;

//variabler som lagrar ljud
var snd = new Audio("correct.mp3");
var snd2 = new Audio("wrong.mp3");


//Diverse funktioner som används i "parhittandet"

//Återställer alla variabler
function resetKlicks() {
    klassKlick[0] = 0;
    klassKlick[1] = 0;
    klassKlick[2] = 0;
    klassKlick[3] = 0;
    klassKlick[4] = 0;
    
    for(var i = 0; i < 5; i++) {
        $("#" + idKlick[i]).css("border", "2px solid black");
    }
    
    idKlick[0] = 0;
    idKlick[1] = 0;
    idKlick[2] = 0;
    idKlick[3] = 0;
    idKlick[4] = 0;
    
}

function resetGame() {
    $("img").show();
}

$("#resetGame").click(function() {
    resetGame();
    alert("Spelet är nu återställt");
});

$("#resetKlick").click(function() {
    resetKlicks();
    alert("Dina klick är nu återställda!");
});



//Kollar så att alla klasser är samma
function allSameClass() {
    
    for(var i = 1; i < klassKlick.length; i++) {
        
        if(klassKlick[i] == 0) {
            break;
        }
        else if (klassKlick[0] != klassKlick[i]) {
            return false;
        }
    }
    return true;
};

//Kollar så att alla ID skiljer sig åt
function differentId() {
    
    for(var i = 1; i < idKlick.length; i++) {
        
        if(idKlick[i] == 0) {
            break;
        }
        else if (idKlick[0] == idKlick[i]) {
            return false;
        }
    }
    return true;
}

function toggleClass(className) {
    snd.play();
    $("." + className).fadeToggle("fast");
    antalPar++;
}





//När man klickar på en bild körs funktionen
$("img").click(function() {
        
    $(this).css("border", "2px solid red");
    
    //kollar om det finns ett värde i variablerna och tilldelar klassens värde
    
    //Kollar vid försa klicket ------------------------
    if(klassKlick[0] == 0) {
        klassKlick[0] = $(this).attr("class"); 
        idKlick[0] = $(this).attr("id");
    } 
    
    //Kollar vid andra klicket ----------------------------------------
    else if(klassKlick[1] == 0) {
        klassKlick[1] = $(this).attr("class");
        idKlick[1] = $(this).attr("id");
        
        //Kollar efter paret med klass 1
        if(klassKlick[0] == "1") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("1");
                resetKlicks();
            }           
            
        }
        else if(klassKlick[0] == "5") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("5");
                resetKlicks();
            }           
            
        }
        else if(klassKlick[0] == "6") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("6");
                resetKlicks();
            }           
            
        }
        else if(klassKlick[0] == "8") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("8");
                resetKlicks();
            }           
            
        }
        
        
    }
    
    //Kollar vid tredje klicket -------------------------
    else if(klassKlick[2] == 0) {
        klassKlick[2] = $(this).attr("class");
        idKlick[2] = $(this).attr("id");
        
        if(klassKlick[0] == "4") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("4");
                resetKlicks();
            }                
        }

    }
    
    //Kollar vid fjärde klicket ----------------------------------
    else if(klassKlick[3] == 0) {
        klassKlick[3] = $(this).attr("class");
        idKlick[3] = $(this).attr("id");
        
        //Kollar efter paret med klass 2
        if(klassKlick[0] == "2") {
            
            
            if(allSameClass() == true && differentId() == true) {
                toggleClass("2");
                resetKlicks();                
            } 
            
        }
            
        else if(klassKlick[0] == "7") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("7");
                resetKlicks();
            }
        }
    }
    
    //Kollar vid femte klicket ---------------------------- 
    else if(klassKlick[4] == 0) {
        klassKlick[4] = $(this).attr("class"); 
        idKlick[4] = $(this).attr("id");
        
        if(klassKlick[0] == "3") {
            
            //Om alla klick har samma klass men olika ID är paret godkänt
            if(allSameClass() == true && differentId() == true) {
                toggleClass("3");
                resetKlicks();
            }
            else {
                resetKlicks();
                snd2.play();
                alert("Du hittade inte alla par...");
            }
        }
        else {
            resetKlicks();
            snd2.play();
            alert("Du hittade inte alla par...");
        }
    } 
    
    
    
    
            
});
