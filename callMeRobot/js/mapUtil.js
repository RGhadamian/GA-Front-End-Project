class MapUtil
{
    constructor(robot)
    {
        this.map = null;
        this.mapMarkers = [];
        this.robot = robot;

        $('#searchMurders').click(() => this.showMap());
    }

    addMarkerToMap(lat, lng)
    {
        const latLng = new google.maps.LatLng(lat, lng);
        this.mapMarkers.push (
                new google.maps.Marker({
                position: latLng,
                map: this.map
            })
        );
    }

    addEarthquakeMarkers()
    {
        // Loop through the results array and place a marker for each
        // set of coordinates.
        window.eqfeed_callback = function (results) {
            for (var i = 0; i < results.features.length; i++) {
                var coords = results.features[i].geometry.coordinates;
                this.addMarkerToMap(coords[1], coords[0]);
            }
        }.bind(this);
    
        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    createMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3),
            mapTypeId: 'terrain'
        });
    }

    showMap() {
        this.addMapToDom();
        this.createMap();
        this.addEarthquakeMarkers();
    }

    addMapToDom()
    {

        if ($('#roboDisplay').children().length > 0) {
            $('#mk1StatusJumbo').remove();
            $('#mk1Map').remove();
        }

        this.robot.roboDisplay.append(`
        <div class="container" id="mk1Map">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Recent New York City Murder Locations</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <input id="policeInput" type="text" placeholder="# of complaints">
                <button id="BROOKLYN" class="policeScanner btn btn-secondary" data-borough="BROOKLYN">Brooklyn</button>
                <button id="MANHATTAN" class="policeScanner btn btn-primary" data-borough="MANHATTAN">Manhattan</button>
                <button id="QUEENS" class="policeScanner btn btn-primary" data-borough="QUEENS">Queens</button>
                <button id="BRONX" class="policeScanner btn btn-primary" data-borough="BRONX">Bronx</button>
                <button id="STANTEN-ISLAND" class="policeScanner btn btn-primary" data-borough="STANTEN ISLAND">Staten Island</button>
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



