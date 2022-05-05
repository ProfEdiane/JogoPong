function preload (){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3")
  
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
let xBolinha = 300;
let yBolinha = 200 ;
let diametro = 20;
let raio= diametro/2;
let velocidadexBolinha= 5;
let velocidadeyBolinha = 5;

let hit = false; 

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente= 585;
let yRaqueteOponente= 150;
let velocdadeyraquete; 

let MeusPontos = 0;
let PontosOponente = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;



function draw() {
  background(0);
  Bolinha();
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteOponente,yRaqueteOponente);
  MovimentoMinhaRaquete();
  MovimentoRaqueteOponente();
  Colisão(xRaquete, yRaquete);
  Colisão (xRaqueteOponente, yRaqueteOponente);
  Placar();
  MarcarPontos();
  
  
  
function Bolinha(){
  circle(xBolinha, yBolinha, diametro);
  yBolinha += velocidadeyBolinha;
  xBolinha += velocidadexBolinha;
  
  if (yBolinha - raio> 0) {
    velocidadeyBolinha *= -1
      };
  if (yBolinha + raio < height) {
    velocidadeyBolinha *= -1
      };
  if (xBolinha -raio < 0) {
    velocidadexBolinha *= -1
      };
  if (xBolinha + raio > width) {
    velocidadexBolinha *= -1
      };
}
  
  function MostraRaquete(x,y){
    rect(x, y, comprimentoRaquete, alturaRaquete);
  }
  
  function MovimentoMinhaRaquete(){
    if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
  }
  
function MovimentoRaqueteOponente (){
 //velocidadeyRaquete= yBolinha- yRaqueteOponente -alturaRaquete/2 -70; 
 // yRaqueteOponente += velocidadeyRaquete;
  
  if (keyIsDown(87)) {
    yRaqueteOponente -= 5;
  }

  if (keyIsDown(83)) {
    yRaqueteOponente += 5;
  }
}
  
 function Colisão(x,y){
   hit = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
   if (hit){
     velocidadexBolinha *=-1;
     raquetada.play();
   }
 }
   function Placar(){
     textAlign (CENTER);
     textSize(32);
     fill (color(255,140,0));
     rect (150,10,40,40);
     fill(255);
     text (MeusPontos, 170, 40);
     fill (color(255,140,0));
     rect (450,10,40,40);
     fill(255);
     text (PontosOponente, 470,40);
   
 }
   function MarcarPontos(){
     if(xBolinha<10) {
       PontosOponente ++;
       ponto.play();
     }
     if (xBolinha>590) {
       MeusPontos ++; 
       ponto.play();
     }
   }
  
  
  
  

}