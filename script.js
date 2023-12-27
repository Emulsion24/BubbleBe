
//create no of bubble
function makebuble(){
var bubleCount=``;
for(var i=0;i<=159;i++){
    var a=Math.floor(Math.random()*10);
   bubleCount+= ` <div id="buble">${a}</div>`;
}
document.querySelector("#pnlbtm").innerHTML=bubleCount;
}
//add timer to the game
var timer=10;
function countTimer(){
    var time=setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else
        {
        clearInterval(time);
        document.querySelector("#pnlbtm").innerHTML=`<div id="gameover"><h1>Game Over<h1>
        <input type="button" value="Play Again" id="playagain" onClick="window.location.reload()">
        <div>`
        
        }
    }, 1000);
    
}
//genarate target number
var hit=0;
function hited(){
    if (timer!=0){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#hitter").textContent=hit;
    }
    else
    document.querySelector("#hitter").textContent=0;
}
//add score
var score=0;
function updateScore(){
    score+=10;
document.querySelector("#scoreval").textContent=score;
}
//deduct score
function less(){
    score-=10;
document.querySelector("#scoreval").textContent=score;

}

makebuble();
countTimer();
hited();
//check the hitted value with target value
document.querySelector("#pnlbtm").addEventListener("click",function(dls){
    var get=Number(dls.target.textContent);
    if(hit==get){
        dls.target.style.backgroundColor="#39e75f";
        setTimeout(() => {
        
        updateScore();
        hited();
        makebuble();
        
        },100);
    }
    else if(hit>get||hit<get){
        less();
        dls.target.style.backgroundColor="red";
    }
    
});

