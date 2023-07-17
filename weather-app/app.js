window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let temperatureSection = document.querySelector('.temperature')
    const temperatureSpan = document.querySelector('.temperature span')



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=9e144ba509bbf1b1531a7a80992e67f0`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    const { icon, description } = data.weather[0]
                    const { temp } = data.main;
                    // // set dom element fro the api
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description.toUpperCase();
                    locationTimezone.textContent = data.name;
                    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                   
                    //formula for fareheit
                    farenheit= temp*9/5 + 32
                    //to change temperature to degree/farenheit
                    temperatureSection.addEventListener("click",()=>{
                        if (temperatureSpan.textContent==='C'){
                            temperatureSpan.textContent='F'
                            temperatureDegree.textContent=Math.floor(farenheit)
                        }else{
                            temperatureSpan.textContent='C'
                            temperatureDegree.textContent=temp
                        }
                    })

                })

        });




    }


})





