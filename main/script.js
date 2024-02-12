document.addEventListener("DOMContentLoaded",function(){

    let board = ['', '', '', '', '', '', '', '', ''];
    let gameStarted = false;

    function elements(){

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
            cell.setAttribute('data-index', i);
            gameBoard.appendChild(cell);
        }

       

    };
    function player1(event){
        let clickedCellIndex = event.target.getAttribute('data-index');
        if(board[clickedCellIndex] === '' && gameStarted){
            board[clickedCellIndex]='X';
            event.target.textContent = 'X';
        }
    }
    document.addEventListener('click', player1);

    let startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener("click",function(){
        if(!gameStarted){
            elements();
            document.querySelector('.gameWrapper').style.display='flex';
            gameStarted = true;
        }
       
    })
   



   
   
});