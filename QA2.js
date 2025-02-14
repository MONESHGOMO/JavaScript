/* 
function favorite(fActor,fPlayer,fMovi) {
    
    console.log("Favorite Actor:" + fActor);
    console.log("Facorite player : " + fPlayer);
    console.log("Favorite movi : " + fMovi);

}


favorite("Kamal","Virat","MS Dhoni")  
 */


function favorite(favoriteActor, favoritePlayer, favoriteMovi) {
    
    console.log("Favorite Actor :" + favoriteActor);
    console.log("Facorite player : " + favoritePlayer);
    console.log("Favorite movi : " + favoriteMovi);
}

var favoriteActor = "vijay";
var favoritePlayer = "MS Dhoni";
var favoriteMovi = "Sita Ramam";


favorite(favoriteActor, favoritePlayer, favoriteMovi);


var length = 10;
var breadth = 15;

function area(length, breadth) {
    return length * breadth;
}

var solution = area(length, breadth);
console.log("Area value is : " + solution);