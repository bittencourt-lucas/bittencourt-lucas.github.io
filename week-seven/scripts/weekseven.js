// This will trigger an animation featuring a transition
var transitionState = false;
var magicTransition = function() {
  if (!transitionState) {
    document.getElementById("magicTransition").style.background = "grey";
    document.getElementById("magicTransition").style.textAlign = "center";
    document.getElementById("magicTransition").style.color = "black";
    document.getElementById("magicTransition").style.paddingTop = "75px";
    document.getElementById("magicTransition").style.paddingBottom = "75px";
    transitionState = true;
  }
  else {
    document.getElementById("magicTransition").style.height = "50px";
    document.getElementById("magicTransition").style.background = "white";
    document.getElementById("magicTransition").style.color = "white";
    document.getElementById("magicTransition").style.paddingTop = "0px";
    document.getElementById("magicTransition").style.paddingBottom = "0px";

    transitionState = false;
  }

}