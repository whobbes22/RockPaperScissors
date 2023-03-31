window.addEventListener("load", function(){
  const form = document.querySelector("#rock");
  form.addEventListener("submit", playGame);
  // const form2 = document.querySelector("#sub2");
  // form2.addEventListener("submit", choseHero);
})

function playGame(event){
  event.preventDefault();
  const chosenHero = document.querySelector("#rock").value;
  const chosenHero2 = document.querySelector("#paper").value;
  console.log(chosenHero,chosenHero2);
}


function opponentPlays(){
  // random number between 0 and 100
  const score = Math.round(Math.random()*100);  

  if(score < 33){
    return "rock";
  } else if( score < 66){
    return "paper";
  } else {
    return "scissor"
  }
}