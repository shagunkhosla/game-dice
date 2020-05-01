var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
console.log(randomnumber1);
console.log(randomnumber2);

var diceimage="dice"+randomnumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",diceimage);

var diceimage1="dice"+randomnumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",diceimage1);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomnumber1< randomnumber2)
{
  document.querySelector("h1").textContent="Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent="It's a Draw!";
}


//
// if(randomnumber1===1)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice1.png")
// }
// else if(randomnumber1===2)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice2.png")
// }
// else if(randomnumber1===3)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice3.png")
// }
// else if(randomnumber1===4)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice4.png")
// }
// else if(randomnumber1===5)
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice5.png")
// }
// else
// {
//   document.querySelector(".dice .img1").setAttribute("src","images/dice6.png")
// }
//
// if(randomnumber2===1)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice1.png")
// }
// else if(randomnumber2===2)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice2.png")
// }
// else if(randomnumber2===3)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice3.png")
// }
// else if(randomnumber2===4)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice4.png")
// }
// else if(randomnumber2===5)
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice5.png")
// }
// else
// {
//   document.querySelector(".dice .img2").setAttribute("src","images/dice6.png")
// }
