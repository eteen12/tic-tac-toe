document.addEventListener("DOMContentLoaded",function(){

    const Gameboard = (()=>{
        let gameboard = ["","","","","","","","",""]

        function render() {
            let boardHTML = "";
            gameboard.forEach((square,index) =>{
                boardHTML += `<div class ="square" id="square-${index}">${index}</div>`

            })
            document.querySelector("#gameboard").innerHTML = boardHTML;
        }
    })();

    const startBtn = document.querySelector("#start-button");
    startBtn.addEventListener("click", ()=>{
        Game.start();

        return {
            render,
        }
    })

    const createPlayer = (name,mark) => {
        return
    }

    const Game =(() =>{

        let players = [];
        let currentPlayerIndex;
        let gameOver;

        const start = () => {
            players = [
                createPlayer(document.querySelector("#player1").value,"X"),
                createPlayer(document.querySelector("#player2").value,"0")
            ];//now we are going to create a factory
            currentPlayerIndex = 0;
            gameOver = false;
            Gameboard.render();
        }
        return{
            start,
        }
    })();

   
});