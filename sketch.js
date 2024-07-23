const DIAMETRO = 550;
const RADIO = DIAMETRO / 2;

let tabla_de_multiplicar = 0;
let tabulación_máxima = 200;
let divisiones_del_circulo = 200;

let color_lineas;

function setup() {
  createCanvas(DIAMETRO + 50, DIAMETRO + 50);
  color_lineas = color(random(150), random(150), random(150), 150);
}

function draw() {
  tabla_de_multiplicar += 0.0005;
  clear();
  push();
  textAlign(LEFT, TOP);
  textSize(20);
  text("x" + tabla_de_multiplicar.toFixed(2), 0, 0);
  pop();
  translate(width / 2, height / 2); //Trasladamos el origen al centro del canvas
  push(); //Guarda las propiedades de dibujo del momento
  stroke("black");
  noFill();
  circle(0, 0, DIAMETRO);
  pop(); //Reestablece las propiedades de dibujo
  push();
  stroke(color_lineas);
  strokeWeight(10);
  for (let i = 0; i < divisiones_del_circulo; i++) {
    let angulo = (2 * PI * i) / divisiones_del_circulo;
    let x = RADIO * cos(angulo);
    let y = RADIO * sin(angulo);
    point(x, y);
    push();
    fill("gray");
    noStroke();
    textAlign(CENTER, CENTER);
    let pos_texto = createVector(x, y);
    pos_texto.add(pos_texto.copy().normalize().mult(15));
    translate(pos_texto.x, pos_texto.y);
    rotate(pos_texto.heading());
    text(i, 0, 0);
    pop();
  }
  pop();
  push();
  stroke(color_lineas);
  for (let i = -tabulación_máxima; i < tabulación_máxima; i++) {
    let producto = i * tabla_de_multiplicar;
    let angulo = (2 * PI * i) / divisiones_del_circulo;
    let x = RADIO * cos(angulo);
    let y = RADIO * sin(angulo);
    let angulo2 = (2 * PI * producto) / divisiones_del_circulo;
    let x2 = RADIO * cos(angulo2);
    let y2 = RADIO * sin(angulo2);
    line(x, y, x2, y2);
  }
  pop();
}
