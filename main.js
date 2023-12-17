var userNames =["--Frank Sinatra" , "--Elbert Hubbard", "--Nelson Mandela" , "--Wayne Gretzy" , "--Epictetus"]
var text =["The best revenge is massive success." , "Do not take life too seriously. You will not get out alive." , "Resentment is like drinking poison and waiting for your enemies to die." ,
"You miss 100% of the shots you don't take." , "It's not what happens to you, but how you react to it that matters."]
function randomcode(){

var num = Math.floor( Math.random() * userNames.length );
document.getElementById('inner').innerHTML=text[num];
document.getElementById('innera').innerHTML=userNames[num];
// console.log( userNames[num] )
// console.log( text[num] )

// var button = document.getElementById("button")
// alert(userNames[num] +"     "+text[num] )
// 
}
// randomcode()