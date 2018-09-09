//imagenes
let pajarito;
//indica el estado de la imagen a mostrar
let esta, state;
//posicion
let posx, posy;

function setup() {
  createCanvas(800, 800);
  pajarito = [];
  pajarito[0] = loadImage("image/birdQuieto.png");
  pajarito[1] = loadImage("image/bird1.png");
  pajarito[2] = loadImage("image/bird2.png");
  pajarito[3] = loadImage("image/bird3.png");

  esta = 0;
  posx = width / 2;
  posy = height / 2;
}

function draw() {
  background(255);
  image(pajarito[esta], posx, posy);


}





function keyPressed() {

  switch (keyCode) {
    case RIGHT_ARROW:
      esta++;
      posx += 2;
      if (esta == 3) {
        esta = 1;
      }
  }
}

/*  let mvx =posx - mouseX;
let mvy= 0
if(mvx >0){
  esta =2;
  posx -=3;
}else{
  if(mvx < 0){
    esta = 2;
    posx += 2;
}else{
esta = 0;*/