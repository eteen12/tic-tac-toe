document.addEventListener("DOMContentLoaded",function(){

    let board = ['', '', '', '', '', '', '', '', ''];
    let gameStarted = false;
    let currentPlayer = 'X';

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
        if(board[clickedCellIndex] === '' && gameStarted && currentPlayer){
            board[clickedCellIndex]='X';
            let xElement = document.createElement('div');
            xElement.textContent = 'X';
            xElement.classList.add('playerX');
            event.target.appendChild(xElement);

            currentPlayer='O';
            computerMove();
            checkWin('X');
        }
    }

    function computerMove(){
        
        let emptyCells = board.reduce((acc,value,index) =>{
            if(value === ''){
                acc.push(index);
            }
            return acc;
        },[])

        if(emptyCells.length >0){
            let randomIndex =Math.floor(Math.random()*emptyCells.length);
            let computerIndex = emptyCells[randomIndex];

            board[computerIndex] = '0';
            let oElement = document.createElement('div');
            oElement.textContent = '0';
            oElement.classList.add('computer');

            document.querySelector(`[data-index="${computerIndex}"]`).appendChild(oElement);

            currentPlayer = 'X';
            checkWin('0');
        }
    }
    function checkWin(player) {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const gameStatus = document.querySelector('.h2-status');
        

        const isWinner = winCombos.some(combo => combo.every(index => board[index] === player));

        if(isWinner){
            gameStatus.textContent = `Player ${player} wins!`
        }
        else if (board.every(cell => cell !== '')) {
            gameStatus.textContent = 'It\'s a tie!';
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
    function reset(){
        let resetBtn = document.querySelector('.reset');
        let resetBtnWrapper = document.querySelector('.reset-wrapper');

        resetBtnWrapper.style.display='flex';
        resetBtnWrapper.style.justifyContent = 'center';
        resetBtnWrapper.style.alignItems = 'center';

        resetBtn.addEventListener("click",function(){
            resetBoard();
        })
    }
    document.addEventListener("click",reset)
    function resetBoard(){
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        const cells = document.getElementsByClassName('cell');
        for(let cell of cells){
            cell.innerText = '';
        }
        const gameStatus = document.querySelector('.h2-status');
        gameStatus.textContent = '';
    }
   



   
   
});