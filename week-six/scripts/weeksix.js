/*****************************************************************************
 * Local Storage API, Storing and Retrieving Simple Data, Arrays,
 * Associative Arrays, and Objects
 *****************************************************************************/
var store = () => {
  if (typeof(Storage) !== undefined) {
    localStorage.setItem("user", "lbittencourt");
    localStorage.setItem("data", JSON.stringify({
      token: "1",
      roles: ["admin", "manager"]
    }))
    localStorage.setItem("associative", JSON.stringify({
      "usersOnline": 1,
    }))
  } else {
    console.log("Your browser doesn't support Local Storage! :(")
  }
}

var retrieve = () => {
  if (localStorage.user !== undefined) {
    document.getElementById("hello-message").innerHTML = "Hello "
      + localStorage.user + ". Your token is " + JSON.parse(localStorage.data).token
      + " and your roles are: " + JSON.parse(localStorage.data).roles[0] + " and "
      + JSON.parse(localStorage.data).roles[1] + ". Currently, there is "
      + JSON.parse(localStorage.associative)["usersOnline"] + " user online.";
  } else {
    document.getElementById("hello-message").innerHTML = "Hello Stranger";
  }
}

/*****************************************************************************
 * Demonstrate fluency in DOM Manipulation Using createElement, appendChild,
 * insertBefore, removeChild, etc.
 *****************************************************************************/
var addParagraph = () => {
  var para = document.createElement("P");
  para.innerText = "You can create as many paragraphs as you want!";
  document.body.appendChild(para);  
}

var removeParagraph = () => {
  var rep = document.getElementById("change-button");
  document.body.removeChild(rep);
}

var appendToHead = () => {
  var ul = document.getElementById("test-list");
  var newElement = document.createElement("LI");
  newElement.innerText = "Head";
  ul.insertBefore(newElement, ul.childNodes[0]);
}

var appendToTail = () => {
  var ul = document.getElementById("test-list");
  var newElement = document.createElement("LI");
  newElement.innerText = "Tail";
  ul.appendChild(newElement);
}

var popFromList = () => {
  var ul = document.getElementById("test-list");
  var node = document.getElementById("test-list").lastChild;
  ul.removeChild(node);
}

var changeLast = () => {
  var node = document.getElementById("test-list").lastChild;
  var newText = document.createTextNode("Edited");
  node.replaceChild(newText, node.lastChild);
}