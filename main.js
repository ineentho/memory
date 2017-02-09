//Funktioner för att gerera bilder och randomisera dessa


//Array med länkar till alla bilder som ska användas
//Sparas på det här viset eftersom de ska genereras i slumpmässigordning
//innan de läggs till i html-filen
var bilder = [
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

var antalKlick = 0;

var antalPar = 0;

//variabler som lagrar ljud
var snd = new Audio("correct.mp3");
var snd2 = new Audio("wrong.mp3");


//Diverse funktioner som används i "parhittandet"

//Döljer det par vars namn skickas in
function toggleClass(className) {
    snd.play();
    $("." + className).fadeToggle("fast");
    antalPar++;
}

//Återställer alla variabler
function resetKlicks() {
    klassKlick[0] = 0;
    klassKlick[1] = 0;
    klassKlick[2] = 0;
    klassKlick[3] = 0;
    klassKlick[4] = 0;
    
    for(var i = 0; i < 5; i++) {
        $("#" + idKlick[i]).css("box-shadow", "none");
    }
    
    idKlick[0] = 0;
    idKlick[1] = 0;
    idKlick[2] = 0;
    idKlick[3] = 0;
    idKlick[4] = 0;
    
    antalKlick = 0;
    
}

$("#resetKlick").click(function() {
    resetKlicks();
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
    
    for(var i = 0; i < antalKlick-1; i++) {
        
        if(idKlick[antalKlick-1] == idKlick[i]) {
            return false;
        }
    }
    return true;
}



//När man klickar på en bild körs funktionen
$("img").click(function() {
        
    //Sätter en effekt på bilder man klickat på
    $(this).css("box-shadow", "0 5px orange");
    
    
    //kollar om det finns ett värde i variablerna, tilldelar annas värde ifrån det man klickat på --------------------------
    
    
    //Kollar vid första klicket
    if(klassKlick[0] == 0) {
        klassKlick[0] = $(this).attr("class"); 
        idKlick[0] = $(this).attr("id");
        
        antalKlick ++;
    } 
    
    //Kollar vid andra klicket
    else if(klassKlick[1] == 0) {
        klassKlick[1] = $(this).attr("class");
        idKlick[1] = $(this).attr("id");
        
        antalKlick ++;
    }
    
    //Kollar vid tredje klicket
    else if(klassKlick[2] == 0) {
        klassKlick[2] = $(this).attr("class");
        idKlick[2] = $(this).attr("id"); 
        
        antalKlick ++;
    }
    
    //Kollar vid fjärde klicket
    else if(klassKlick[3] == 0) {
        klassKlick[3] = $(this).attr("class");
        idKlick[3] = $(this).attr("id");
        
        antalKlick++;
    }
  
    //Kollar vid femte klicket
    else if(klassKlick[4] == 0) {
        klassKlick[4] = $(this).attr("class"); 
        idKlick[4] = $(this).attr("id");
        
        antalKlick++;
    } 
    
    //Kollar om det finns några par ----------------------------------------------------------------------------------
    
     //Om alla bilder man klickat på har samma klass men olika ID, dvs är ett par
    if(allSameClass() == true && differentId() == true) {

        //kollar vilken klass bilderna man klickat på har, om alla bilder i paret klickats på, göms paret
        //(kollar så att parets klass finns på lika många ställen i arrayen som antalet bilder i paret,
        //t.ex. om ett par har tre bilder så kollas den tredje variabeln om den har rätt klass)
        if(klassKlick[1] == "1") {
            toggleClass("1");
            resetKlicks();
        }           
        if(klassKlick[3] == "2") {
            toggleClass("2");
            resetKlicks();                
        } 
        if(klassKlick[4] == "3") {
            toggleClass("3");
            resetKlicks();
        }
        if(klassKlick[2] == "4") {
            toggleClass("4");
            resetKlicks();
        } 
        else if(klassKlick[1] == "5") {          
            toggleClass("5");
            resetKlicks();          
        }
        else if(klassKlick[1] == "6") {
            toggleClass("6");
            resetKlicks();  
        }
        else if(klassKlick[3] == "7") {
            toggleClass("7");
            resetKlicks();
        }
        else if(klassKlick[1] == "8") {
            toggleClass("8");
            resetKlicks();
        }
    }  
    
    //Om bilden som klickas på inte hör ihop med den tidigare
    else {
        
        //tar bort klick-effekten eftersom bilden inte hör ihop
        $(this).css("box-shadow", "none");
        
        //hämtar id't ifrån det senaste klicket
        var latestClick = $(this).attr("id");
        
        //Nedanför kollas vilken variabel som håller det senaste id't,  och tar sedan bort det värdet
        if(idKlick[0] == latestClick) {
            klassKlick[0] = 0;
            idKlick[0] = 0;
            antalKlick --;
        }
        if(idKlick[1] == latestClick) {
            klassKlick[1] = 0;
            idKlick[1] = 0;
            antalKlick --;
        }
        if(idKlick[2] == latestClick) {
            klassKlick[2] = 0;
            idKlick[2] = 0;
            antalKlick --;
        }
        if(idKlick[3] == latestClick) {
            klassKlick[3] = 0;
            idKlick[3] = 0;
            antalKlick --;
        }
        if(idKlick[4] == latestClick) {
            klassKlick[4] = 0;
            idKlick[4] = 0;
            antalKlick --;
        }
        snd2.play();
        alert("De där bilderna hör inte ihop...");
    }
});
