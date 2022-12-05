
let canvasid = document.getElementById ("canvas");
let ctx=canvasid.getContext("2d");
let x = 50;
let y = 20;
let dx = 5;
let dy = 5;
let bolaR = 20;
const rqtWidth = 100;
const rqtHeight = 40;
let rqtX=canvasid.width/2;
let rqtY=canvasid.height-rqtHeight;
let esq = 37;
let dir = 39;
let movrqt = 7;

document.addEventListener ("keydown",tecla);;
function tecla(e){
  let rqtLenght=rqtX+rqtWidth;
  let key=e.keyCode;
    if(key===esq&&rqtX>5){
    rqtX=rqtX-movrqt;
    }
    if(key===dir&&rqtLenght<canvasid.width-3){
    rqtX=rqtX+movrqt;
    }
    }
function rqt () {
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect (rqtX,rqtY,rqtWidth,rqtHeight);
  ctx.closePath();
}   
function bola () {
  ctx.beginPath();
  ctx.arc(x,y,bolaR,0,Math.PI*2);
  ctx.fillStyle="blue";
  ctx.fill();                                           
  ctx.closePath();
}

function mexeBola(){
  
ctx.clearRect(0,0,canvasid.width,canvasid.height);
rqt();
   bola();
   if (x+dx>canvasid.width-bolaR||x+dx<bolaR) {
    dx = -dx;
  }
  if (y>canvasid.height-bolaR-rqtHeight&&x>=rqtX&&x<=rqtX+rqtWidth||
  y<bolaR) {
    dy = -dy;
}
 if (y+bolaR===canvasid.height+5&&x<rqtX||y+bolaR===canvasid.height+5&&x>rqtX) {
  endgame();
}
x += dx;
y += dy;
}
setInterval (mexeBola,30);
function endgame () {
 alert ("perdeu!!");
 x=50;
 y=20;
 }



