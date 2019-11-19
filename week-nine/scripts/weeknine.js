/******************************************************************************
* Designing, Defining, and Triggering CSS3 Transforms without
* Custom Libraries (Thought Library)
******************************************************************************/
var size = 1;

var increaseSize = function() {
  size = size + 1;
  document.getElementById("resize").style.transform = 'scale(' + size + ')';
}

var decreaseSize = function() {
  // If it turns negative, the image will be inverted, as in any other
  // scaling function
  size = size - 1;
  document.getElementById("resize").style.transform = 'scale(' + size + ')';
}

/******************************************************************************
* HTML5 Tags - Video, Audio, and Canvas
******************************************************************************/
var canvas, ctx;
var counter = 1;

window.onload = function() {
    document.getElementById("myCanvas").addEventListener("click",
      changeColor = () => {
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        // Create red gradient
        if (counter == 1) {
          var grd = ctx.createLinearGradient(0, 0, 200, 0);
          grd.addColorStop(0, "red");
          grd.addColorStop(1, "green");
          counter++;
        }
        // Create green gradient
        else if (counter == 2) {
          var grd = ctx.createLinearGradient(0, 0, 200, 0);
          grd.addColorStop(0, "green");
          grd.addColorStop(1, "blue");
          counter++;
        }
        // Create blue gradient
        else if (counter == 3) {
          var grd = ctx.createLinearGradient(0, 0, 200, 0);
          grd.addColorStop(0, "blue");
          grd.addColorStop(1, "red");
          counter = 1;
        }

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 240, 297);
    })
}