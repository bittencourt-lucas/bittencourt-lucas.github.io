console.log('Client side JS is loaded')

function geocode(address, callback) {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGNhZmllaXIiLCJhIjoiY2p5c3dtb2dhMDBnNTNlcG5iNzRhanFpNyJ9.5cuLfCK53msUaKGdlZDMqw&limit=1'
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let body = JSON.parse(xhttp.responseText);
            if (body.features.length !== 0) {
                callback({
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                });
            } else {
                console.log('Unable to find location. Try another search.');
            }
        } else if (xhttp.status !== 200) {
            console.log('Unable to connect to location services!');
        }
    };
    xhttp.send();
}

function getWeather(latitude, longitude, callback) {
    var xhttp = new XMLHttpRequest();
    let url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/aefe3d980fec4447cc130acb2827083c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    xhttp.open("GET", url);
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var obj = JSON.parse(xhttp.responseText);
            console.log(obj)
        }
    };
    xhttp.send();
}

function wrapper() {
    geocode('Alaska', ({ location, latitude, longitude } = {}) => {
        getWeather(latitude, longitude)
    })
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