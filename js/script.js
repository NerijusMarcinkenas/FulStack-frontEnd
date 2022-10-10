document.querySelector("#login").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login submit');
    const loginRequest = {
        userName: event.target.name.value,
        password: event.target.password.value
    };

    fetch("https://nerijausfullstackdemoapi.azurewebsites.net/api/Auth/Login", {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(loginRequest)
    })
        .then(response => response.json())
        .then(result => {
            if (result.errorMessage) {
                alert(result.errorMessage);
                return;
            }
            sessionStorage.setItem('token', result.token);
            window.location = "weather.html";
        }).catch(error => console.log(error));
});