
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
    const board = ['','','','','','','','',''];

    


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
            field.addEventListener('click',Mark);
            field.classList.add('fieldX');
            fieldRow.appendChild(field);
            }
        }
}
function Mark(){
    
    let field=document.querySelectorAll('#board>div>div');
       
        if(this.classList.contains('fieldX')){
            this.classList.add('fieldMarkX');
            this.classList.remove('fieldX');
            GameBoard[this.getAttribute('id').slice(-1)]='1';
                
                field.forEach(elem=>{
                    if(GameBoard[elem.getAttribute('id').slice(-1)]===''){
                    elem.classList.remove('fieldX')
                    elem.classList.add('field0')
                    }
                    })
            }   
            
        if(this.classList.contains('field0')){
            this.classList.add('fieldMark0');
            this.classList.remove('fieldX');
            GameBoard[this.getAttribute('id').slice(-1)]='0';
        

                field.forEach(elem=>{
                    if(GameBoard[elem.getAttribute('id').slice(-1)]===''){
                    elem.classList.remove('field0')
                    elem.classList.add('fieldX')
                    }
                    }) 
        }
        
   }



GameBoard
createBaord();






  //gameBoard[1]=3;
  //console.log(gameBoard)




  