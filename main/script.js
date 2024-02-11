document.addEventListener("DOMContentLoaded",function(){

   const startBtn = document.querySelector('#start-button');
   startBtn,this.addEventListener("click",function(){
    
    gameBoard();
   });

   const gameBoard = (() =>{

    let display = document.querySelector("#message-display");

    let gameBoardWrapper = document.createElement("div");
    gameBoardWrapper.classList.add("boardWrapper");

    let boxes = document.createElement("div");
    boxes.classList.add("boxes");

    display.appendChild(gameBoardWrapper);


   })



   
   
});