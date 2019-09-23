var cwidth = 400; //largura da tela
var cheight = 300; // altura da tela
var dicex = 100; // posição horizontal do dado
var dicey = 100; // posição vertical do dado
var dicewidth = 100; // largura do dado
var diceheight = 100; // altura do dado
var dotrad = 6; // o raio de um ponto
var ctx; // o contexto da tela
var dx; // posicionamento horizontal para cada uma das faces do dado
var dy; // posicionamento vertical para cada uma das faces do dado

var ponto1 = document.querySelector("#point1");
var ponto2 = document.querySelector("#point2");
var play1 = document.querySelector("#player1");
var play2 = document.querySelector("#player2");
var result = document.querySelector("#result");
var soma = 0;
var lance = 0;
var secreto = 0;

function resultado(soma, lance) {
  if (lance % 2 == 1) {
    ponto1.innerHTML = soma;
  } else if (lance % 2 == 0) {
    ponto2.innerHTML = soma;
  }
}

function throwTwice(secreto) {
  //lançamento dos dois dados
  var ch = 1 + Math.floor(Math.random() * 6); //define o valor de da face do dado entre 1 e 6
  dx = dicex;
  dy = dicey;
  drawface(ch);
  soma = ch;
  dx = dicex + 180; //ajusta dx para a segunda face do dado,
  var ch = 1 + Math.floor(Math.random() * 6);
  drawface(ch);
  soma += ch;
  lance += 1;
  resultado(soma, lance);
  console.log("soma", soma);
  console.log("secreto", secreto);
}

function emptyDice() {
  //Inicia o jogo com o dado vazio
  player1 = prompt("Digite o nome do jogador 1: ");
  player2 = prompt("Digite o nome do jogador 2: ");
  play1.innerHTML = player1;
  play2.innerHTML = player2;
  var secreto = 1 + Math.floor(Math.random() * 6);
  console.log("Número secreto", secreto);
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 5; // largura da linha é 5
  ctx.clearRect(dx, dy, dicewidth, diceheight); // limpa a face do dado depois da primeira jogada
  ctx.strokeRect(dx, dy, dicewidth, diceheight); // contorno da face do dado
  ctx.fillStyle = "#009966";
  newDx = dx - 180;
  ctx.clearRect(newDx, dy, dicewidth, diceheight); // limpa a face do dado depois da primeira jogada
  ctx.strokeRect(newDx, dy, dicewidth, diceheight); // contorno da face do dado
  ponto1.innerHTML = ""; //zera os pontos
  ponto2.innerHTML = "";
}

function drawface(n) {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 5; // largura da linha é 5
  ctx.clearRect(dx, dy, dicewidth, diceheight); // limpa a face do dado depois da primeira jogada
  ctx.strokeRect(dx, dy, dicewidth, diceheight); // contorno da face do dado
  var dotx;
  var doty;
  ctx.fillStyle = "#009966";
  console.log(n);

  switch (n) {
    case 1:
      draw1();
      break;
    case 2:
      draw2();
      break;
    case 3:
      draw2();
      draw1();
      break;
    case 4:
      draw4();
      break;
    case 5:
      draw4();
      draw1();
      break;
    case 6:
      draw4();
      draw2mid();
      break;
  }
}

function draw1() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dx + 0.5 * dicewidth; //posicionamento horizontal do ponto do dado
  doty = dy + 0.5 * diceheight; // posicionamento vertical do ponto do dado
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw2() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw4() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw2mid() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}
