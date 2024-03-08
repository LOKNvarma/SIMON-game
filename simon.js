let gameSqn =[];
let userSqn =[];

let started = false;
let level=0;
let h4 = document.querySelector("h4");
let btns =["blue","orange","yellow","green"];
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
     levelUP();

    }
});

function levelUP(){
    userSqn=[];
    level++;
    h4.innerText = `level ${level}`;

    let btnIdx = Math.floor(Math.random()*3);
    let rdm_color = btns[btnIdx];
    gameSqn.push(rdm_color);
    console.log(gameSqn);
    let rdm_btn = document.querySelector(`.${rdm_color}`);
    flash(rdm_btn);

}

function flash(btn){
 btn.classList.add("flash");
 setTimeout(() => {
    btn.classList.remove("flash");
 }, 200);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn = this;
    btnColor = btn.getAttribute("id");
    userSqn.push(btnColor);
    console.log(userSqn);
    btnflash(btn);
    checkans(userSqn.length-1);
    
}
function checkans(idx){
  
    if(gameSqn[idx] === userSqn[idx]){
        if(gameSqn.length == userSqn.length){
           setTimeout(levelUP,1000);
        }
       
    }else{
        h4.innerHTML = `GAME OVER! . your score is <b> (${level}).. </b> press any key to start `;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },500);
        reset();
    }
}

function btnflash(btn){
    btn.classList.add("greenflash");
    setTimeout(() => {
       btn.classList.remove("greenflash");
    }, 200);
   
   }
   function reset(){
    started=false;
    gameSqn=[];
    userSqn=[];
    level =0;
   }





   