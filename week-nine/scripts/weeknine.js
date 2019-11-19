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
  size = size - 1;
  document.getElementById("resize").style.transform = 'scale(' + size + ')';
}