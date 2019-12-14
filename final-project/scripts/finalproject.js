console.log('Client side JS is loaded')

const getWeather = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/aefe3d980fec4447cc130acb2827083c/-7.118669,-34.848297", true);
  xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
          var obj = JSON.parse(xhttp.responseText);
          console.log(obj)
      }
  };
  xhttp.send();
}

weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + encodeURIComponent(search.value)).then(res => {
        res.json().then(data => {
            if (data.error) messageOne.textContent = data.error
            else {
                messageOne.textContent = data.location
                messageTwo.textContent =
                    data.summary +
                    ' The temperature is ' +
                    data.temperature +
                    'F, and there is ' +
                    data.precipProbability +
                    '% chance of raininig.'
            }
        })
    })
})