document.addEventListener("DOMContentLoaded",function(){

    let board = ['', '', '', '', '', '', '', '', ''];

    const elements =(()=>{

        let gameWrapper = document.createElement('div');
        gameWrapper.classList.add('gameWrapper');

        let gameBoard = document.createElement('div');
        gameBoard.classList.add('gameBoard');

        let gameHtml = document.querySelector('.gameBoard-HTML');

        gameHtml.appendChild(gameWrapper);
        gameWrapper.appendChild(gameBoard);

        for(let i = 0; i < board.length; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            board[i]=i;
            gameBoard.appendChild(cell);
        }

        gameHtml.style.display= "none";

    })();
   



   
   
});