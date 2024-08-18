let boxes=document.querySelectorAll(".box");
let message=document.querySelector("#msg");
let container=document.querySelector(".msg-container");
let newGamebtn=document.querySelector("#new-btn");
let resetGamebtn=document.querySelector("#reset-btn");




let turnO=true;
let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 const resetGame=()=>{
    turnO=true;
     enableboxes();
    container.classList.add("hide");
 }
 
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();  
    })
})

const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disable=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner) =>{
    message.innerText=`Congrulation,Winner is ${winner}`;
    disable();
   container.classList.remove("hide");
}
 
 const checkWinner=()=>{
    for(let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
       if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            
            showWinner(pos1Val);
        }
       }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetGamebtn.addEventListener("click",resetGame);
