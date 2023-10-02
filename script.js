

function makebuble(){
var bubleCount=``;
for(var i=0;i<=159;i++){
    var a=Math.floor(Math.random()*10);
   bubleCount+= ` <div id="buble">${a}</div>`;
}
document.querySelector("#pnlbtm").innerHTML=bubleCount;
}

var timer=60;
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
        <input type="button" value="Play Again" onClick="window.location.reload()">
        <div>`

        }

       
    }, 1000);
    
}
var hit=0;
function hited(){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#hitter").textContent=hit;
}
var score=0;
function updateScore(){
    score+=10;
document.querySelector("#scoreval").textContent=score;
}
function less(){
    score-=10;
document.querySelector("#scoreval").textContent=score;

}
function changecolor(){

}


makebuble();
countTimer();
hited();
document.querySelector("#pnlbtm").addEventListener("click",function(dls){
    var get=Number(dls.target.textContent);
    if(hit==get){
        
        updateScore();
        hited();
        makebuble();
        dls.target.style.backgroundColor="green";
    }
    else if(hit>get||hit<get){
        less();
        dls.target.style.backgroundColor="red";
    }


    
    

});

