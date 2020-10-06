


var randomNumber1=Math.floor(Math.random() * 6) + 1 ;

var randomNumber=Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage="dice" + randomNumber + ".png";

var randomDiceImage1="dice" + randomNumber1 + ".png";

var randomDiceSource="images/"+randomDiceImage;
var randomDiceSource1="images/"+randomDiceImage1;
document.querySelector(".img1").setAttribute("src",randomDiceSource);

document.querySelector(".img2").setAttribute("src",randomDiceSource1);

if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="Player two Winner";
    
}
else if(randomNumber==randomNumber1)
{
 document.querySelector("h1").innerHTML="It's tie";

}

else{
document.querySelector("h1").innerHTML="Player one winner";


}

