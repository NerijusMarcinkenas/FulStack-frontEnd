const token = sessionStorage.getItem("token");

if (!token) {
    alert("Please login!");
    window.location = "index.html";
}
else {
    fetch("https://nerijausfullstackdemoapi.azurewebsites.netWeatherForecast", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(respones => respones.json())
        .then(result => {
            const container = document.querySelector('#weather-container');
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                const weatherParagraph = document.createElement('p');
                weatherParagraph.innerHTML = `<b>${element.date}</b> temperature : <b>${element.temperatureC} C</b> weather will be <b> ${element.summary}</b>`;
                container.append(weatherParagraph);
            }
        })
        .catch(error => alert(error));
}