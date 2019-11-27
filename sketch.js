var mySong;
var analyzer;
var myImage;
var img;
var img2;


function preload() {
  mySong = loadSound("./assets/TG1_new.mp3");
  myImage = loadImage("./assets/tg1.png");
  img = loadImage("./assets/orchestra.png");
  img2 = loadImage("./assets/orchestradx.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  analyzer = new p5.Amplitude();

  analyzer.setInput(mySong);
}

function draw() {

  background('#0F084B');

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height); //we use height to make it as big as possible

  stroke('#EE6C4D');
  noFill();
  strokeWeight(5);

  arc(windowWidth / 2, windowHeight / 2, volume + 450, volume + 300, 180, 360, OPEN);
  arc(windowWidth / 2, windowHeight / 2, volume + 500, volume + 350, 180, 360, OPEN);

  fill('#26408B');
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, volume + 400);

  imageMode(CENTER);
  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width / 2 + volume, myImage.height / 2 + volume);

  stroke('#EE6C4D');
  noFill();
  strokeWeight(5);


  arc(windowWidth / 2, windowHeight / 2, volume + 450, volume + 300, 0, 180, OPEN);
  arc(windowWidth / 2, windowHeight / 2, volume + 500, volume + 350, 0, 180, OPEN);

  image(img, windowWidth / 6, windowHeight, img.width / 2, img.height / 2 * volume / 12);
  image(img2, windowWidth - windowWidth / 6, windowHeight, img2.width / 2, img2.height / 2 * volume / 12);

  if (mouseIsPressed == true) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    } else {
      mySong.stop();
    }
  }
}
