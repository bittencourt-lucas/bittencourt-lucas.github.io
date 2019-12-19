function loading() {
    document.getElementById('loading').style.content = ' ';
    document.getElementById('loading').style.borderRadius = '50%';
    document.getElementById('loading').style.border = '3px solid #888888';
    document.getElementById('loading').style.borderColor = '#888888 transparent';
    document.getElementById('loading').style.animation = 'loading-animation 1.2s linear infinite';
    document.getElementById('loading').style.webkitAnimation = 'loading-animation 1.2s linear infinite';
}

function loadingFinished() {
    document.getElementById('loading').style.content = ' ';
    document.getElementById('loading').style.borderRadius = '';
    document.getElementById('loading').style.border = '';
    document.getElementById('loading').style.borderColor = '';
    document.getElementById('loading').style.animation = '';
    document.getElementById('loading').style.webkitAnimation = '';
}

function geocode(address, callback) {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGJpdHRlbmNvdXJ0IiwiYSI6ImNqc2MybzJpNzBnZHo0NGp4bXVxaGYyZTYifQ.i9iG9fz-t7e9W0Yu4r_QhQ&limit=1'
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
                    place: body.features[0].place_name
                });
            } else {
                let messageOne = document.getElementById('message-1');
                messageOne.innerHTML = 'Unable to find location. Try another search.';
            }
        } else if (xhttp.status !== 200) {
            let messageOne = document.getElementById('message-1');
            messageOne.innerHTML = 'Unable to connect to location services!';
        }
    };
    xhttp.send();
}

function getWeather(location, latitude, longitude) {
    var xhttp = new XMLHttpRequest();
    let url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/aefe3d980fec4447cc130acb2827083c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    xhttp.open("GET", url);
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var body = JSON.parse(xhttp.responseText);
            let messageOne = document.getElementById('message-1');
            let messageTwo = document.getElementById('message-2');
            loadingFinished();
            messageOne.innerHTML = `${location}`;
            messageTwo.innerHTML = `${body.daily.data[0].summary} 
            The temperature is ${body.currently.temperature}F, and there is 
            ${body.currently.precipProbability * 100.0}% chance of raining.`;
        }
    };
    xhttp.send();
}

function wrapper() {
    loading();
    const location = document.getElementById("location").value;
    geocode(location, ({ latitude, longitude, place } = {}) => {
        getWeather(place, latitude, longitude);
    })
}