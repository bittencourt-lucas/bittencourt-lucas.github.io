var touchBox = () => {
  var box = document.getElementById("mobilebox");
  box.style.background = "blue";
  box.style.webkitTransition = "background 2s ease";
  box.style.transition = "background 2s ease";
}

var releaseBox = () => {
  var box = document.getElementById("mobilebox");
  box.style.background = "red";
}

var welcomeMessage = () => {
  alert("Welcome to Week Eight!");
}