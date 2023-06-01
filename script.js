
const leftPlr=document.getElementById('leftPlr');
const leftMark=document.getElementById('leftMark');
const rightPlr=document.getElementById('rightPlr');
const rightMark=document.getElementById('rightMark');
const start=document.getElementById('start');
const reset=document.getElementById('reset');

leftPlr.addEventListener('click', event=>{
    if(leftPlr.textContent==='CPU')(leftPlr.textContent='HUMAN')
    else(leftPlr.textContent='CPU')
});

rightPlr.addEventListener('click', event=>{
    if(rightPlr.textContent==='CPU')(rightPlr.textContent='HUMAN')
    else(rightPlr.textContent='CPU')
});

leftMark.addEventListener('click', event=>{
    if(leftMark.textContent==='X'){
        leftMark.textContent='O'
        rightMark.textContent='X'
    }
    else{
        leftMark.textContent='X'
        rightMark.textContent='O'
    }
});

rightMark.addEventListener('click', event=>{
    if(rightMark.textContent==='X'){
        rightMark.textContent='O'
        leftMark.textContent='X'
    }
    else{
        rightMark.textContent='X'
        leftMark.textContent='O'
    }
});
start.addEventListener('click',startF);
reset.addEventListener('click',resetF);


function startF(){
    console.log('start');
}

function resetF(){
    console.log('reset');
}

const GameBoard = (()=>{
    //const board = new Array(9);
    const 
    const board = [0,1,2,3,4,5,6,7,8];
    return board;

  })();

const Player = (name, marker)=>{
    return{name, marker};
}

const Score = (()=>{

    //funkcja co sprawdza linie

    //funkjca co sprawdz czy wsztstkie pola sa uzupelnione

    //funkcja co trzyma wynik  i sprawdza warunki wyniku rundy

    return{      }
})();

function createBaord(){
    let board=document.getElementById('board');
    let idCount=0;
    for(j=0;j<3;j++){
        let fieldRow=document.createElement('div');
        board.appendChild(fieldRow);
        
            for(i=0;i<3;i++){
            let field=document.createElement('div');
            field.setAttribute('id',`field${idCount++}`);
            field.classList.add('field');
            

            fieldRow.appendChild(field);
            }
        }
}


createBaord();






  //gameBoard[1]=3;
  //console.log(gameBoard)