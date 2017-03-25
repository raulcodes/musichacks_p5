// Adapted from Learning Processing by Daniel Shiffman
// http://www.learningprocessing.com
// Doorbell sample by Corsica_S via freesound.org,
// Creative Commons BY 3.0

// A sound file object
var bassDrum;

// A doorbell object (that will trigger the sound)
var doorbell;



function setup() {
  createCanvas(800, 200);

  // Load the sound file.
  // We have included both an MP3 and an OGG version.
  soundFormats('mp3');
  bassDrum = loadSound('assets/drum.mp3');

  // Create a new doorbell
  doorbell = new Doorbell(width/2, height/2, 64);
  d2 = new Doorbell(width/4, height/2, 64);
  d3 = new Doorbell(600, height/2, 64);
}

function draw() {
  var teal = color(93, 247, 226);
  background(teal);
  // Show the doorbell
  doorbell.display(mouseX, mouseY);
  d2.display(mouseX, mouseY);
  d3.display(mouseX, mouseY);
}

// function mousePressed() {
//   // If the user clicks on the doorbell, play the sound!
//   if (doorbell.contains(mouseX, mouseY)) {
//     dingdong.play();
//   }
// }

// A Class to describe a "doorbell" (really a button)
var Doorbell = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;

  var i = 0;

  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      if (i == 0) {
          bassDrum.play();
      }
      // console.log("passed " + i);
      i++;
      return true;
    } else {
      if (i >= 1) {
        i = 0;
      }
      return false;
    }
  };

  // Show the doorbell (hardcoded colors, could be improved)
  this.display = function(mx, my) {
    var c = color(120, 0, 235);
    var white = color(255, 255, 255);
    var teal = color(93, 247, 226);
    if (this.contains(mx, my)) {
      fill(c);
    } else {
      fill(teal);
    }
    stroke(c);
    strokeWeight(15);
    ellipse(x, y, r, r);
  };
};
