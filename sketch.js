var mySong;
var analyzer;
var myImage;
// var button;


function preload() {
  mySong = loadSound("./assets/TG1_new.mp3");
  myImage = loadImage("./assets/tg1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer (inoltra l'input all'analizzatore di volume)
  analyzer.setInput(mySong);

  // button = createButton('Play');
  // button.position(windowWidth/6, windowHeight/6);
  // button.mousePressed(changeBG);

}

function draw() {

  background('#120A8F');

  if (mouseIsPressed == true) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    } else {
      mySong.stop();
    }
  }

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height); //we use height to make it as big as possible


  stroke('#B0E0E6');
  noFill();
  strokeWeight(5);

  arc(windowWidth / 2, windowHeight / 2, volume + 450, volume + 300, 180, 360, OPEN);
  arc(windowWidth / 2, windowHeight / 2, volume + 500, volume + 350, 180, 360, OPEN);



  // if (mySong.isPlaying() == true) {
  //   arc(windowWidth / 2, windowHeight / 2, 450 + frameCount * 4, 300 + frameCount * 4, 180, 360, OPEN);
  //   arc(windowWidth / 2, windowHeight / 2, 500 + frameCount * 4, 350 + frameCount * 4, 180, 360, OPEN);
  // }

  fill('#003399');
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, volume + 400);

  imageMode(CENTER);
  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width, myImage.height);

  stroke('#B0E0E6');
  noFill();
  strokeWeight(5);


  arc(windowWidth / 2, windowHeight / 2, volume + 450, volume + 300, 0, 180, OPEN);
  arc(windowWidth / 2, windowHeight / 2, volume + 500, volume + 350, 0, 180, OPEN);

  //arc(windowWidth / 2, windowHeight / 2, 500 + frameCount * 4, 350 + frameCount * 4, 0, 180, OPEN);

}
