


class Murders{
    constructor (robot) {
        this.roboDisplay = $('#roboDisplay');       
        this.nycBorough = "Select NYC Borough";
        this.borough = "";
        this.nycMurders = [];
        this.numOfMurders = 10;
        this.robot = robot;

        $('.policeScanner').click(() => this.getRecentMurders());
        $('#searchMurders').click(() => this.showMap());
    }

    async getRecentMurders() {

        const limit = $('#policeInput').val();
        this.borough = event.target.id;

        if (limit && (limit < 11 || limit > 0)) {
            this.numOfMurders = limit;
        }
        $('#listOfMurders').children().remove();

        const murders = await this.getMurders(this.borough);
        this.nycMurders = murders;
        this.printMurders(this.numOfMurders);

    }

    async getMurders(borough) {
        const murderPromise = await $.ajax({ url: `https://data.cityofnewyork.us/resource/5ucz-vwe8.json?boro=${borough}&statistical_murder_flag=true` });
        console.log('murderPromise:', murderPromise);

        return murderPromise;
    }

    printMurders(num) {
        for (let i = 0; i < num; i++) {

            //console.log(this.nycMurders[i]);
            $('#listOfMurders').append(`<li>${this.nycMurders[i].incident_key}</li>`);
        }

    }

drawMapInDom () {
    this.roboDisplay.append(`
    <div class="container" id="mk1StatusJumbo">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center">Recent New York City Murder Locations</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <input id="policeInput"type="text" placeholder="# of complaints">
            <button id="BROOKLYN" data-boro="BROOKLYN" class="policeScanner btn btn-secondary">Brooklyn</button>
            <button id="MANHATTAN" data-boro="MANHATTAN" class="policeScanner btn btn-primary ">Manhattan</button>
            <button id="QUEENS" data-boro="QUEENS" class="policeScanner btn btn-primary">Queens</button>
            <button id="BRONX" data-boro="BRONX" class="policeScanner btn btn-primary">Bronx</button>
            <button id="STANTEN-ISLAND" data-boro="STATEN ISLAND" class="policeScanner btn btn-primary">Staten Island</button>
        </div>

    </div>
    <div class="row">
        <div id="map" class="col-8">

        </div>
        <div class="col-4">
            <h4 class=" text-center">List of Murders</h4>
            <ul id="listOfMurders">

            </ul>
        </div>
    </div>
</div>`);
}

}

function initMap() {

    // The location of Uluru
    //const uluru = { lat: -25.344, lng: 131.036 };
    //const nycMurder = {lat: data[0].latitude, lng: data[0].longitude};
    const nycMurder = { lat: 40.81254626700007, lng: -73.90126678999997 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        $('#map')[0], { zoom: 11, center: nycMurder });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({ position: nycMurder, map: map });

    var locations = [
        { lat: -31.563910, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.750000, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.773700, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438000 },
        { lat: -43.999792, lng: 170.463352 }
    ]
}



var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function (results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}





/*class Scanner {
    constructor (){
        this.borough = "MANHATTAN";
        this.agency = "NYPD";
    }

//async nycData(borough) 
//{

$.ajax({
    url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      //"$$app_token" : "YOURAPPTOKENHERE"
    }
}).then(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
}

/*
async getWeather(cityToSearch)
    {        
        const weatherPromise = await $.ajax({ url:`https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=c0241f6d3761550c2fc7e047e3b31358&units=metric`});
        
        //notify robo widgets and anything else wanting to know when the robot has new weather information
        this.notifyWeatherListeners(weatherPromise, this.getWeatherIconFromResult(weatherPromise));

        return weatherPromise;                
    }
    */

//

/*
$.ajax({
    url:`https://data.cityofnewyork.us/resource/5ucz-vwe8.json?boro=MANHATTAN&statistical_murder_flag=true`
}).then(
    (data)=>{
        console.log(data);
        console.log(data[0].vic_race);
        console.log(data[0].statistical_murder_flag);
        console.log(data[0].latitude);
        console.log(data[0].longitude);
    },
    (err)=>{
        console.log('bad request' + err);
    }
);
*/

//Get API Data
//Limit to 10 ???
//Get Complaint Details
//Get Police response details

//Print to DOM in columns
//
/*
$.ajax({
    url:`https://api.unsplash.com/photos/random?client_id=9d9324b414180e071c71590443b1c33e77e688835a8cdb90c8df7914cf2dc53a&query=Amsterdam`
}).then(
    (data)=>{
        console.log(data);
        console.log(data.urls.regular);
    },
    (err)=>{
        console.log('bad request + err');
    }
);

*/


// MAP 
/*
<script>
function initMap() {

    // The location of Uluru
    //const uluru = { lat: -25.344, lng: 131.036 };
    //const nycMurder = {lat: data[0].latitude, lng: data[0].longitude};
    const nycMurder = { lat: 40.81254626700007, lng: -73.90126678999997 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        $('#map')[0], { zoom: 11, center: nycMurder });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({ position: nycMurder, map: map });

    var locations = [
        { lat: -31.563910, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.750000, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.773700, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438000 },
        { lat: -43.999792, lng: 170.463352 }
    ]
}
</script>

<script>
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function (results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3lMvxjMai29Xiy572YLKpIW0IPMbcXQE&callback=initMap">
</script>*/

/*

    //get value of number of murders
    //when you click on particular button you get an array of recent murders in that borough
    //get long and lat for those murders
    //display 



    //run our function when the window is ready
    //add the "async" keyword to flag our function as asynchronous
    //$().ready(async() => {    
    //    const robo = new Robot(); //create a new robot - Mark One

    //Ask the Robot to get the weather for Melbourne using Promise .then syntax
    /*
    robo.getWeather('Melbourne')
        .then((weather) => {
            console.log(weather);
        })
        .catch((err) => console.log(err));
    

    //Askt he Robot to get the weather for Melbourne using Promise async/await syntax
    //    try{
    //const hobartWeather = await robo.getWeather('Hobart')
    //        console.log(hobartWeather);
    //    }
    //    catch(err)
    //    {
    //        console.log(err);
    //    }
    //})
}
*/

/***
 * adds the home city form to the dom
 
showHomeCityForm() {
    console.log("show city form");

    this.addJumbotron('Set my home city!', 'mk1CityInput', 'Home City', 'Enter Movie Name!');

    //handle the form
    $("#mk1SettingsForm").submit((event) => {
        event.preventDefault(); //standard practice see here: https://api.jquery.com/submit/

        //set the home city
        this.homeCity = $('#mk1CityInput').val();
        this.homeCitySet = true;
        console.log("Robot home city set to: " + this.homeCity);

        //remove the settings 
        $("#mk1Settings").remove();

        this.roboSystemsCheck(); //see if all infomation has been collected
    });
}

    addJumbotron(task, inputName, labelText, inputPlaceholder) {

    $("#mk1Settings").remove(); //if the settings are already showing remove them and re-create

    this.roboDisplay.append(`
    <div class="col-12" id="mk1Settings">    
        <div class="jumbotron">
            <h1 class="display-4">${task}</h1>
            <hr class="my-4">
            <form id="mk1SettingsForm">
                <div class="form-group">
                    <label for="${inputName}">${this.roboName}'s ${labelText}</label>
                    <input id="${inputName}"type="text" class="form-control" placeholder="${inputPlaceholder}">                    
                </div>                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>`);
}
*/

/*
showRecentMurders() {
    //get the murders
    this.getMurders(this.borough)
        .then(
            (murders) => {


                //console.log(murders[0]);

                this.nycMurders = murders;
                this.printMurders(this.numOfMurders);

            },


        )
        .catch((err) => console.log(err));

}

*/