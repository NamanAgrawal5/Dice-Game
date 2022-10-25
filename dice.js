var rand1=Math.floor(Math.random() *6) +1;
var randomimage="dice"+rand1+".png";
var source1="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",source1);
var rand2=Math.floor(Math.random() *6) +1;
var randomimage2="dice"+rand2+".png";
var source2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",source2);
if(rand1>rand2){
    document.querySelector("h1").innerHTML = "Player 1 wins😎";
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML = "Player 2 wins 😈";
}
else{
    document.querySelector("h1").innerHTML = "Tie 🙂";
}