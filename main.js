//inspiration till funktionen som gör att man kan klicka på alla bilder och skicka dess class
//http://stackoverflow.com/questions/964119/how-to-get-the-class-of-the-clicked-element


//lagrar klassen hos den bild man klickar på
var x = 0;
var y = 0;

var a = 0;
var b = 0;

var par = 0;

//När man klickar på en bild körs funktionen
$("img").click(function() {
    
    //kollar om det finns ett värde i variablerna och tilldelar klassens värde
    if(x == 0) {
        x = $(this).attr("class"); 
        a = $(this).attr("id");
    } 
    else if(y == 0) {
        y = $(this).attr("class");
        b = $(this).attr("id");
    }
    
    //Om variablerna är lika försvinner paret
    if(x != 0 && y != 0) {
        if(x == y && a != b) {
            $("." + x).fadeToggle("fast");
            
            x = 0;
            y = 0;
            
            //Håller koll på hur många par du hittat
            par += 1;
            
            if(par == 3) {
                alert("Du hittade alla par!");
            }
            
        }
        //annars återställs variablerna
        else {
            x = 0;
            y = 0;
            
            alert("Bilderna var inte ett par...")
        }
    }
});