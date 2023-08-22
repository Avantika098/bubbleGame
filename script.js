function makebubble(){
var clutter = "";

for(var i=1;i<=180;i++){
    var rndm = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rndm}</div>`;
}

document.querySelector("#panelbottom").innerHTML=clutter;
}

var timer = 60;
function runtimer(){
   var timeint=setInterval(function (){
    if(timer > 0){
    timer--;
    document.querySelector("#timervalue").textContent=timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector("#panelbottom").innerHTML = `<h1 class="game">ONCE MORE!</h1>`;
    }
   },1000);
}

var rndmht=0;

function getnewhit(){
     rndmht=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= rndmht;
}

var score=0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}


document.querySelector("#panelbottom").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum==rndmht){
        increasescore();
        makebubble();
        getnewhit();
    }
});

var restart;
document.querySelector("#restart").addEventListener("click",function(){
    if(timer==0){
    makebubble();
    getnewhit();
    timer=60;
    runtimer();
    console.log(timer)
    }
    else{
        timer=0;
        runtimer();
        makebubble();
        getnewhit();
    }

})

runtimer();
makebubble();
getnewhit();

