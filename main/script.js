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