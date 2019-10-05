class Weather {
    constructor (robot) {
        this.homeCitySet = false; //set to true when home city is set via the DOM
        this.cityImg = "";
        this.homeCity = "Check the Weather";
        this.robot = robot;
        
        $('#searchWeatherModal').click(() => this.showHomeCityModal());
        $('#addListeners').click(() => this.addListeners());
    
        //setup the weather event listeners
        this.weatherEventListeners = [];
    }


    showHomeCityModal() {

        console.log('show homeCity Modal');
        
        this.robot.addModal('Search a City', 'mk1CityInput', 'Home City', 'Enter a City');

      $("#mk1SettingsForm").submit((event) => {
        event.preventDefault(); //standard practice see here: https://api.jquery.com/submit/

        $(function () {
            $('#modalForm').modal('toggle');
         });

        //set the home city
        this.homeCity = $('#mk1CityInput').val();
        this.homeCitySet = true;
        console.log("Robot home city set to: " + this.homeCity);



        //remove the settings 
        $("#mk1Settings").remove();

        this.robot.roboSystemsCheck(); //see if all infomation has been collected
    })
}

    /**
     * Add/Update the Robots hometown weather
     */
    showHomeTownWeather() {
        //get the weather
        this.getCityBackground(this.homeCity)
            .then(
                (cityIMG) => {
                    console.log(cityIMG);
                    console.log(cityIMG.urls.regular);
                    this.cityImg = cityIMG.urls.regular;
                },
                (err) => {
                    console.log('bad request' + err);
                }
            );

        this.getWeather(this.homeCity)
            .then((weather) => {
                console.log(weather);
                const icon = this.getWeatherIconFromResult(weather);

                $('#roboDisplay').children().remove();

                //show the weather on the DOM        
                this.robot.roboDisplay.append(`
        <div class="col-12" id="mk1StatusJumbo">    
            <div class="jumbotron">
                <h1 class="display-4"><span class="currentRoboName">${this.robot.profile.roboName}</span> knows where he lives!</h1>
                <p class="lead">This element is added directly in the "showHomeTownWeather" function!</p>
                <hr class="my-4">
                <p>
                <span class="currentRoboName">${this.robot.profile.roboName}</span> lives in ${weather.name} and the temperature is ${weather.main.temp}°C. It looks something like this outside: ${icon}
                </p>
                <img width="100%" src="${this.cityImg}">
                
            </div>
        </div>`);

            })
            .catch((err) => console.log(err));
    }

    async getWeather(cityToSearch) {
        const weatherPromise = await $.ajax({ url: `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=c0241f6d3761550c2fc7e047e3b31358&units=metric` });

        //notify robo widgets and anything else wanting to know when the robot has new weather information
        this.notifyWeatherListeners(weatherPromise, this.getWeatherIconFromResult(weatherPromise));

        return weatherPromise;
    }

    /***
     * returns the Icon
     * weatherResult is the weather Object returned by the getWeather function
     */
    getWeatherIconFromResult(weatherResult) {
        const url = `https://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`;

        return `<img src="${url}">`;
    }

    async getCityBackground(city) {
        const url = await $.ajax({ url: `https://api.unsplash.com/photos/random?client_id=9d9324b414180e071c71590443b1c33e77e688835a8cdb90c8df7914cf2dc53a&query=${city}` });
        console.log(url);

        return url

    }

    addWeatherListener(widgetCallbackFunction) {
        this.weatherEventListeners.push(widgetCallbackFunction);
    }

    notifyWeatherListeners(weather, icon) {
        for (let i = 0; i < this.weatherEventListeners.length; i++) {
            this.weatherEventListeners[i](weather, icon);
        }
    }

    addListeners() {

        if ($('#listeners').children().length > 0) {
            $('#listeners').children().remove();
        }
        else {

        $('#listeners').append(`
        <div class="jumbotron">
            <h1 class="display-4">Robo Widgets with Callbacks</h1>
            <p class="lead">These three widges recieve callbacks from <span class="currentRoboName">Robot MK-1</span>
                when ever the weather information is
                updated</p>
            <hr class="my-4">

            <div class="row mt-5" id="widgets">
                <div class="col-4">
                    <div class="card border-default">
                        <div class="card-body">
                            <h5 class="card-title"><span class="currentRoboName">Robot MK-1</span>'s Weather Widget 1
                            </h5>
                            <hr>
                            I track all the locations the Robot has lived and the weather in each city!
                            <ul class="list-group" id="RoboWeatherResults1"></ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-default">
                        <div class="card-body">
                            <h5 class="card-title"><span class="currentRoboName">Robot MK-1</span>'s Weather Widget 2
                            </h5>
                            <hr>
                            I also track all the locations the Robot has lived and the weather in each city!
                            <ul class="list-group" id="RoboWeatherResults2"></ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card border-default">
                        <div class="card-body">
                            <h5 class="card-title"><span class="currentRoboName">Robot MK-1</span>'s Weather Widget 3
                            </h5>
                            <hr>
                            Another widhet tracking all the locations the Robot has lived and the weather in each
                            city!!!
                            <ul class="list-group" id="RoboWeatherResults3"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
        
    }
    }

}