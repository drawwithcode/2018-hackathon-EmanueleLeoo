var mySong;
var analyzer;
var myImage;
var volume;

function preload(){
  // put preload code here
  mySong = loadSound("./assets/HelloDolly.mp3");
  myImage = loadImage("./assets/Armstrong.png");
}

function setup() {
  // put setup code her
  createCanvas(windowWidth, windowHeight);

  mySong.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  frameRate(20);

}

function draw() {
  // put drawing code here

 volume = analyzer.getLevel();
 volume = map(volume, 0, 1, 50, width/2);

if(mouseX > width/2 - height/6 && mouseY > height/2 - height/6 && mouseX < width/2 + height/6 && mouseY < height/2 + height/6){
  background(0, 42, 79);
  imageMode(CENTER);
  image(myImage, width/2, height/2, volume + height/3, volume + height/3);
  if(mySong.isPlaying() == false){
   mySong.play();
 }

       fill('white');
       textSize(35);
       textFont('Helvetica');
       textStyle(BOLD);
       text('TIENI PREMUTO PER VEDERE LA MAGIA DELLA MUSICA', width/8, height/8);

 if(mouseIsPressed){

   for(var x = 0; x < width + 10; x += height/70)
   {
     fill(random(0, 275), random(13, 230), random(13, 145));
     stroke('#111111');
     strokeWeight(3);
     ellipse(x, height - height/20 - volume * random(0, 0.5), height/100 + volume/6);
     textSize(35);
     textFont('Helvetica');
     textStyle(BOLD);
     text('TIENI PREMUTO PER VEDERE LA MAGIA DELLA MUSICA', width/8, height/8);
   }

   myImage.filter("invert");

  ellipseMode(CENTER);

  push();
  translate(width/2, height/2);

  rotate(frameCount*3);

  translate(cos(frameCount*8)*5,height/4);
  noFill();
  stroke(252, 0, 244);
  strokeWeight(5);
  ellipse(height/4, 0, volume * 2);

  noStroke();
  fill(255, 240, 30, 90);
  ellipse(height/4, 0, cos(frameCount*8)*175, sin(frameCount*8)*175);
  pop();
 }
}

else{
  background(119, 191, 255);
  mySong.pause();
  fill(252, 0, 244);
  stroke('black');
  strokeWeight(6);
  rect(width/2 - height/6, height/2 - height/6, height/3, height/3);
  fill('black');
  noStroke();
  triangle(width/2 - height/20, height/2 - height/20, width/2 - height/20, height/2 + height/20, width/2 + height/18, height/2);
 }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
