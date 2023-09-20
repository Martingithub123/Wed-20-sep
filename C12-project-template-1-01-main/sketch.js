var path, boy, leftBoundary,rightBoundary;
var pathImg,jackImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  jackImg = loadAnimation("Runner-1.png","Runner-2.png")
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(800,800);
  path = createSprite(200,200)
  path = addImage(pathImg)
  path.scale = 1.2;
  path.velocityY = 4;
 
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite(180,340,30,30)
boy = addAnimation(jackImg)
boy.scale = 0.08;
  
//crie um limite à esquerda

leftBoundary=createSprite(0,0,100,800);
leftBoundary = false


//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita

rightBoundary=createSprite(410,0,100,800);
rightBoundary = false

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX  
  // mover o menino com o mouse usando mouseX
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}