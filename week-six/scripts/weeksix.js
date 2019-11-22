/*****************************************************************************
 * Local Storage API, Storing and Retrieving Simple Data, Arrays,
 * Associative Arrays, and Objects
 *****************************************************************************/
var store = () => {
  if (typeof(Storage) !== undefined) {
    localStorage.setItem("user", "lbittencourt");
    localStorage.setItem("data", {
      token: "1",
      roles: ["admin", "manager"]
    })
    localStorage.setItem("associative", {
      "usersOnline": 1,
    })
  } else {
    console.log("Your browser doesn't support Local Storage! :(")
  }
}

var retrieve = () => {
  if (localStorage.user !== undefined) {
    document.getElementById("hello-message").innerHTML = "Hello "
      + localStorage.user;
  } else {
    document.getElementById("hello-message").innerHTML = "Hello Stranger";
  }
}