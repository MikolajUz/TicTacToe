const Player = (name, marker, type)=>{
    return{name, marker, type};
}

const GameBoard = (()=>{
    const board = ['','','','','','','','',''];

const leftPlr=document.getElementById('leftPlr');
const leftMark=document.getElementById('leftMark');
const rightPlr=document.getElementById('rightPlr');
const rightMark=document.getElementById('rightMark');
const rightName=document.getElementById('rightName');
const leftName=document.getElementById('leftName');
const start=document.getElementById('start');
const reset=document.getElementById('reset');

let PlayerOne = Player('','','');
let PlayerTwo = Player('','','');

function leftMarkEventLis(){
    if(leftMark.textContent==='X'){
        leftMark.textContent='0'
        rightMark.textContent='X'
    }
    else{
        leftMark.textContent='X'
        rightMark.textContent='0'
    }
  
    
}

function rightMarkEventLis(){
    if(rightMark.textContent==='X'){
        rightMark.textContent='0'
        leftMark.textContent='X'
    }
    else{
        rightMark.textContent='X'
        leftMark.textContent='0'
    } 
  
}

function leftPlrEventLis(){
    if(leftPlr.textContent==='CPU')(leftPlr.textContent='HUMAN')
    else(leftPlr.textContent='CPU')

}

function rightPlrEventLis(){
    if(rightPlr.textContent==='CPU')(rightPlr.textContent='HUMAN')
    else(rightPlr.textContent='CPU')

}

function turnOffButtons(){
    leftPlr.removeEventListener('click',leftPlrEventLis);
    rightPlr.removeEventListener('click',rightPlrEventLis);
    leftMark.removeEventListener('click',leftMarkEventLis);
    rightMark.removeEventListener('click',rightMarkEventLis);
    start.removeEventListener('click',startF);
    rightName.disabled=true;
    leftName.disabled=true;
}

function turnOnButtons(){
    leftPlr.addEventListener('click',leftPlrEventLis);
    rightPlr.addEventListener('click',rightPlrEventLis);
    leftMark.addEventListener('click',leftMarkEventLis);
    rightMark.addEventListener('click',rightMarkEventLis);
    start.addEventListener('click',startF);
    rightName.disabled=false;
    leftName.disabled=false;
}

function clearPlr(){
    PlayerTwo.name='';
    PlayerTwo.marker='';
    PlayerTwo.type='';
    PlayerOne.name='';
    PlayerOne.marker='';
    PlayerOne.type='';
}
function loadPlr(){
    PlayerOne.type=leftPlr.textContent;
    PlayerTwo.type=rightPlr.textContent;
    PlayerOne.marker=leftMark.textContent;
    PlayerTwo.marker=rightMark.textContent;
    PlayerOne.name=leftName.value;
    PlayerTwo.name=rightName.value;
}


turnOnButtons();
reset.addEventListener('click',resetF);


function startF(){

    if(leftName.value==='' || rightName.value==='') Score.alertMessage('Please put all names');
    else{
        if(leftName.value.length>24 || rightName.value.length>24 ) Score.alertMessage('Please put shorter names');
        else{
            if(leftPlr.textContent==='CPU' && rightPlr.textContent==='CPU' ) Score.alertMessage('Please put at least one human player');
            else{
            loadPlr();
            turnOffButtons();
            if(leftPlr.textContent==='CPU' && rightPlr.textContent==='HUMAN'){
                GameBoard.createBoard(MarkCPUvsHUM);
            }
            if(leftPlr.textContent==='HUMAN' && rightPlr.textContent==='CPU'){
                GameBoard.createBoard(MarkHUMvsCPU);
            }   
            if(leftPlr.textContent==='HUMAN' && rightPlr.textContent==='HUMAN'){
                GameBoard.createBoard(MarkHUMvsHUM);

            }
            }
        }

    }
}

function resetF(){
    GameBoard.board.forEach((elem,index)=>{
        GameBoard.board[index]='';
    });
    let field=document.querySelectorAll('#board>div>div');
    field.forEach(elem=>elem.remove());
    field=document.querySelectorAll('#board>div');
    field.forEach(elem=>elem.remove());
    clearPlr();
    turnOnButtons();  
    
}
    

const createBoard = (Mark) => {
    
    let board=document.getElementById('board');
    let idCount=0;
    for(j=0;j<3;j++){
        let fieldRow=document.createElement('div');
        board.appendChild(fieldRow);
        
            for(i=0;i<3;i++){
            let field=document.createElement('div');
            field.setAttribute('id',`field${idCount++}`);
            field.addEventListener('click',Mark);

            if(GameBoard.PlayerOne.type==='HUMAN' && GameBoard.PlayerTwo.type==='HUMAN'){
            field.classList.add(`field${GameBoard.PlayerOne.marker}`)
            }
            if(GameBoard.PlayerOne.type==='HUMAN' && GameBoard.PlayerTwo.type==='CPU'){
                field.classList.add(`field${GameBoard.PlayerOne.marker}`)
            }
            if(GameBoard.PlayerOne.type==='CPU' && GameBoard.PlayerTwo.type==='HUMAN'){
                field.classList.add(`field${GameBoard.PlayerTwo.marker}`)
            }
            fieldRow.appendChild(field);
        
            }
        }
}

function MarkCPUvsHUM(){
        let signCPU=GameBoard.PlayerOne.marker;
        let signPlr=GameBoard.PlayerTwo.marker;
        
        this.classList.remove(`field${signPlr}`);
        this.classList.add(`fieldMark${signPlr}`);
        this.removeEventListener('click',MarkCPUvsHUM);
        GameBoard.board[this.getAttribute('id').slice(-1)]=signPlr;


        if(!Score.allCellCheck())cpuChoice();

        function cpuChoice(){

            let board=document.querySelectorAll('#board>div>div');
            let array=[];
            
            board.forEach(elem=>{
                if(!(elem.classList.contains(`fieldMark${signPlr}`) || elem.classList.contains(`fieldMark${signCPU}`))){
                    array.push(elem.getAttribute('id'));
                }
            });
            
            let cell=document.getElementById(`${array[Math.floor(Math.random()*array.length)]}`);
            GameBoard.board[cell.getAttribute('id').slice(-1)]=`${signCPU}`;
            cell.classList.remove(`field${signPlr}`);
            cell.classList.add(`fieldMark${signCPU}`);
            cell.removeEventListener('click',MarkCPUvsHUM);

         }

        Score.checkWinner();
   }

   function MarkHUMvsCPU(){

    
    let signPlr=GameBoard.PlayerOne.marker;
    let signCPU=GameBoard.PlayerTwo.marker;
    
    this.classList.remove(`field${signPlr}`);
    this.classList.add(`fieldMark${signPlr}`);
    this.removeEventListener('click',MarkHUMvsCPU);
    GameBoard.board[this.getAttribute('id').slice(-1)]=signPlr;

    if(!Score.allCellCheck())cpuChoice();

    function cpuChoice(){

        let board=document.querySelectorAll('#board>div>div');
        let array=[];
        
        board.forEach(elem=>{
            if(!(elem.classList.contains(`fieldMark${signPlr}`) || elem.classList.contains(`fieldMark${signCPU}`)) ){
                array.push(elem.getAttribute('id'));
            }
        });
        
        let cell=document.getElementById(`${array[Math.floor(Math.random()*array.length)]}`);
        GameBoard.board[cell.getAttribute('id').slice(-1)]=`${signCPU}`;
        cell.classList.remove(`field${signPlr}`);
        cell.classList.add(`fieldMark${signCPU}`);
        cell.removeEventListener('click',MarkHUMvsCPU);

     }

    Score.checkWinner();
}



function MarkHUMvsHUM(){

    let field=document.querySelectorAll('#board>div>div');
    
        if(this.classList.contains('fieldX')){
            this.classList.add('fieldMarkX');
            this.classList.remove('fieldX');
            GameBoard.board[this.getAttribute('id').slice(-1)]='X';
                      
                field.forEach(elem=>{
                    if(GameBoard.board[elem.getAttribute('id').slice(-1)]===''){
                    elem.classList.remove('fieldX')
                    elem.classList.add('field0')
                    }
                    })
            }      
            
        if(this.classList.contains('field0')){
            this.classList.add('fieldMark0');
            this.classList.remove('fieldX');
            GameBoard.board[this.getAttribute('id').slice(-1)]='0';
        

                field.forEach(elem=>{
                    if(GameBoard.board[elem.getAttribute('id').slice(-1)]===''){
                    elem.classList.remove('field0')
                    elem.classList.add('fieldX')
                    }
                    }) 
        }

        Score.checkWinner();     
   }

    return {board, createBoard,leftName,PlayerOne,PlayerTwo,resetF };

  })();



const Score = (()=>{


    let Winner='';

    const allCellCheck = ()=>{
        Winner=3;
        GameBoard.board.forEach(elem=>{
            if(elem==='')Winner=elem;
        })
        return Winner;
    }
   
    
    const lineCheck = ()=>{   
        Winner='';
        if (GameBoard.board[0]===GameBoard.board[1] && GameBoard.board[0]===GameBoard.board[2] && GameBoard.board[0]!=='') Winner=GameBoard.board[0];
        if (GameBoard.board[3]===GameBoard.board[4] && GameBoard.board[3]===GameBoard.board[5] && GameBoard.board[3]!=='') Winner=GameBoard.board[3];
        if (GameBoard.board[6]===GameBoard.board[7] && GameBoard.board[6]===GameBoard.board[8] && GameBoard.board[6]!=='') Winner=GameBoard.board[6];
        if (GameBoard.board[0]===GameBoard.board[3] && GameBoard.board[0]===GameBoard.board[6] && GameBoard.board[0]!=='') Winner=GameBoard.board[0];
        if (GameBoard.board[1]===GameBoard.board[4] && GameBoard.board[1]===GameBoard.board[7] && GameBoard.board[1]!=='') Winner=GameBoard.board[1];
        if (GameBoard.board[2]===GameBoard.board[5] && GameBoard.board[2]===GameBoard.board[8] && GameBoard.board[2]!=='') Winner=GameBoard.board[2];
        if (GameBoard.board[0]===GameBoard.board[4] && GameBoard.board[0]===GameBoard.board[8] && GameBoard.board[0]!=='') Winner=GameBoard.board[0];
        if (GameBoard.board[2]===GameBoard.board[4] && GameBoard.board[2]===GameBoard.board[6] && GameBoard.board[2]!=='') Winner=GameBoard.board[2];     
        return Winner;
    }



    function alertMessage(alertmessage){

            let body=document.querySelector('body');
            let message=document.createElement('div');
            let container=document.querySelector('container');
            container.classList.add('alertMessStyle');
           
            message.textContent=`${alertmessage}`;
            message.classList.add('alertWindow');
            body.appendChild(message);

            function clear(){
                message.remove();
                container.classList.remove('alertMessStyle')
                GameBoard.resetF();
            }
            setTimeout(clear, 1000);
            

    }

    const checkWinner = ()=>{
        
        if(Score.lineCheck){
        if(Score.lineCheck()===`${GameBoard.PlayerOne.marker}`&& Score.lineCheck()!=='' ) {
            alertMessage(`Player ${GameBoard.PlayerOne.name} won!`);
            return;
            }
        else{
        if(Score.lineCheck()===`${GameBoard.PlayerTwo.marker}` && Score.lineCheck()!==''){
            alertMessage(`Player ${GameBoard.PlayerTwo.name} won!`);
            return;
            }
        }
        }
                
                if(allCellCheck()==3){
                alertMessage('Tie!');
                }
            
        return Winner;
    }

    return {lineCheck,allCellCheck,checkWinner,Winner,alertMessage };
})();












  