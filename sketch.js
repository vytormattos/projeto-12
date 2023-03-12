var caminho;
var caminhoImg;

var joao;
var joaoImg;

var leftBoundary;
var rightBoundary;

var i;

function preload() {

  //coloca as animações do joao
  joaoImg = loadAnimation("Runner-1.png", "Runner-2.png");

  //coloca as animações do caminho
  caminhoImg = loadImage("path.png");

}

function setup() {

  createCanvas(400, 400);

  //cria os sprites e da animações a elas
  caminho = createSprite(200, 400, 50, 50);
  caminho.addImage(caminhoImg);
  caminho.scale = 1.2;

  joao = createSprite(200, 250, 70, 70);
  joao.addAnimation("movimento", joaoImg);
  joao.scale = 0.08;

  //cria o limite a esquerda
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //cria um limite à direita
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;


}

function draw() {

  //deixa o fundo cinza
  background("gray");

  //faz a movimentação com o mouse
  joao.x = World.mouseX;

  //cria a colisao nas bordas
  edges = createEdgeSprites();
  joao.collide(edges[3]);

  // colidir o menino com os limites invisíveis da esquerda e da direita
  joao.collide(rightBoundary);
  joao.collide(leftBoundary);

  //código para redefinir o fundo
  if (caminho.y > 400) {
    caminho.y = height / 2;
  }

  caminho.velocityY = 4;
  if (caminho.x < 0) {
    caminho.x = caminho.width / 2;
  }

  //cria os sprites
  drawSprites();
}
