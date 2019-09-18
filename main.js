var cwidth = 400; //largura da tela
var cheight = 300; // altura da tela
var dicex = 100; // posição horizontal do dado
var dicey = 100; // posição vertical do dado
var dicewidth = 100; // largura do dado
var diceheight = 100; // altura do dado
var dotrad = 6; // o raio de um ponto
var ctx; // o contexto da tela

function init() {
  var ch = 1 + Math.floor(Math.random() * 6); //define o valor de da face do dado entre 1 e 6
  drawface(ch); //função para escrever a jogada do dad0
}

function drawface(n) {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 5; // largura da linha é 5
  ctx.clearRect(dicex, dicey, dicewidth, diceheight); // limpa a face do dado depois da primeira jogada
  ctx.strokeRect(dicex, dicey, dicewidth, diceheight); // contorno da face do dado
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
  dotx = dicex + 0.5 * dicewidth; //posicionamento horizontal do ponto do dado
  doty = dicey + 0.5 * diceheight; // posicionamento vertical do ponto do dado
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw2() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dicex + dicewidth - 3 * dotrad;
  doty = dicey + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw4() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dicex + dicewidth - 3 * dotrad;
  doty = dicey + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dicex + dicewidth - 3 * dotrad;
  doty = dicey + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}

function draw2mid() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  dotx = dicex + dicewidth - 3 * dotrad;
  doty = dicey + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true); //constroi o ponto do dado
  ctx.closePath();
  ctx.fill(); //círculo cheio = ponto do dado
}
