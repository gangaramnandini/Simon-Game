let gameseq=[];
let userseq=[];
let colors=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btn=document.querySelector(".btn");
document.addEventListener("keypress",function(){
    if(started==false)
    {
        started=true;
        levelup();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*colors.length);
    let randColor=colors[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randColor);
    console.log(randbtn);
    console.log(randIdx);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game Over! your  score was <b> ${level} </b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}