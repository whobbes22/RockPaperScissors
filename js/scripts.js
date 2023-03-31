// non UI stuff




// UI Logic
window.addEventListener("load", function(){
  const rock1 = document.querySelector("#rock");
  rock1.addEventListener("click", chooseRock);
  const paper1 = document.querySelector("#paper");
  paper1.addEventListener("click", choosePaper);
  const scissor1 = document.querySelector("#scissor");
  scissor1.addEventListener("click", chooseScissor);
  // const form2 = document.querySelector("#sub2");
  // form2.addEventListener("submit", choseHero);
});

function chooseRock (event){
  event.preventDefault();
  const rock = document.querySelector("#rock").value;
  playGame(rock);
}

function choosePaper (event){
  event.preventDefault();
  const paper = document.querySelector("#paper").value;
  playGame(paper);
}
function chooseScissor (event){
  event.preventDefault();
  const scissor = document.querySelector("#scissor").value;
  playGame(scissor);
}
      
function playGame(hero){
  console.log("hi my hero is " + hero);
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