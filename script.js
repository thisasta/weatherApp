async function fetchData() {
    await navigator.geolocation.getCurrentPosition(async (pos) => {
        const crd = pos.coords;

        var apiKey = "3967ca70c1324e499f974004231607";
        var resp = await fetch('http://api.weatherapi.com/v1/current.json?q=' + crd.latitude + ',' + crd.longitude + '&key=' + apiKey);
        var data = await resp.json();
        var temperature = data['current']['temp_c'];
        var loc = data['location']['name'];

        console.log(temperature);
        console.log(loc);
        console.log(data);

        if (data['current']['is_day'] === 1) {
            document.querySelector('#time').src = "img/icons8-partly-cloudy-day-100.png";
        }else {
            document.querySelector('#time').src = "img/icons8-night-100.png";
        }

        document.querySelector('#city').innerText = loc;
        document.querySelector('#temperature').innerText = temperature + '°';
    })
}

fetchData();

