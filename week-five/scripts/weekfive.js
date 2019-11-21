// Request a local JSON file
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj)
            document.getElementById("message").innerHTML =
                obj.message + " My name is " + obj.name + ", and I'm currently taking " +
                obj.class + " taught by " + obj.instructor + " at " + obj.university;
        }
    };
    xhttp.open("GET", "assets/test.json", true);
    xhttp.send();
}

// Request a JSON from an API
function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("users").innerHTML = "<br><b>These are users in Github:</b></br>";
            obj.forEach(user => {
                document.getElementById("users").innerHTML += ("<br>" + user.login + "</br>");
            })
        } else {
            document.getElementById("users").innerHTML = "<br>Something went wrong!</br>"
        }
    };
    xhttp.open("GET", "https://api.github.com/users", true);
    xhttp.send();
}