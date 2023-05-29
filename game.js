const dino = document.getElementById("dino");
const cactus1= document.getElementById("cactus1");
const cactus2= document.getElementById("cactus2");
const cactus3= document.getElementById("cactus3");
let score=document.getElementById("score");
let highscore=document.getElementById("highscore");
let gameover=document.getElementById("gameover");
let backgroundsong=document.getElementById("backgroundsong");
let jumpaudio=document.getElementById("jumpaudio");
let diedsound=document.getElementById("diedsound");
let pointsound=document.getElementById("pointsound");



function jump(){
    if(dino.classList!="jump"){
        dino.classList.add("jump");
        setTimeout(function (){
            dino.classList.remove("jump");
        },300);
    }
}

function jump2(){
    if(dino.classList!="jump2"){
        dino.classList.add("jump2");
        setTimeout(function (){
            dino.classList.remove("jump2");
        },300);
    }
}
document.addEventListener("keydown",(e)=>{
    if(e.key=="4"){
        jump();
    }
    if(e.key=="6"){
        jump2();
    }
    
}); 


    //adding background song
    document.addEventListener("keydown",(e)=>{
        if(e.key=="spacebar"){
            backgroundsong.play();
        }
        if(e.key=="4"){
            jumpaudio.play();
        }
    })
let score1=0;
let h=0;
let timeinterval=4;
let isAlive = setInterval((e)=>{
    gameover.style.display="none";
    score1++;
    cactus1.classList.add("move");
    score.innerHTML=`Score::<b>${score1}</b>`;
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top")); 
    let cactus1Left= parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"));

    let cactus2Left= parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
    let cactus3Left= parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));

    if((cactus1Left<30 && cactus1Left>0 && dinoTop>=220 )||(cactus2Left<40 && cactus2Left>0 && dinoTop>=220 )||(cactus3Left<30 && cactus3Left>0 && dinoTop>=220))
    { 

    diedsound.play();
    // set score =0
    if(score1>=h){
        h=score1-1;
    }

    console.log(h);
    highscore.innerHTML=`HighScore::<b>${h}</b>`;  
    score1=0;
    // gameover.style.display="block ";
    alert("OUT..Game over...Reload the Game! ");
    cactus1.classList.remove("move");
    }

},10);
if (isAlive){
    if(timeinterval>2.5){
        setInterval((e)=>{
            timeinterval-=0.5;
            cactus1.style.animationDuration=`${timeinterval}s`;
        },20000);
    }
}




