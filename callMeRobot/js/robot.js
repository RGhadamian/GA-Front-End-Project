class Robot {

    constructor() {
        //todo setup the robo webpage here
        this.roboElement = $('#roboMK1'); //store a refernce to the robo DOM element 
        this.roboDisplay = $('#roboDisplay');

        this.profile = new Profile(this);
        this.movies = new Movies(this);
        this.weather = new Weather(this);
        this.murders = new Murders(this);
        this.map = new MapUtil(this);

        this.updateMK1Status();
    }

    updateMK1Status() {
        $('#MK1statusMovie').text(this.movies.favoriteMovie);
        $('#MK1statusCity').text(this.weather.homeCity);
        $('.currentRoboName').text(this.profile.roboName);
    }

    addModal(task, inputName, labelText, inputPlaceholder) {

        $("#modalForm").remove();

        $('#modal').append(`
    <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalFormTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFormTitle">${task}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                  
                  <form id="mk1SettingsForm">
                      <div class="form-group">
                          <label for="${inputName}"><span class="currentRobotName">${this.profile.roboName}</span>'s ${labelText}</label>
                          <input id="${inputName}"type="text" class="form-control" placeholder="${inputPlaceholder}">                    
                      </div>                
                  </form>
          </div>
          </div>
        </div>
      </div>
    </div>`)
    }

    addToast(task, inputName, labelText, inputPlaceholder) {

      $("#toasts").children().remove();

      $('#toasts').append(`
      <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
      <div id="liveToast" class="toast" data-delay="3000" style="position: absolute; top: 0; right: 0;">
        <div class="toast-header">
          <svg class="bd-placeholder-img rounded mr-2" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">...</svg>
          <strong class="mr-auto">Name Has Changed</strong>
          <small>11 mins ago</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          Name has changed to ${this.profile.roboName}
        </div>
      </div>
    </div>`)
  }



    /**
    * Check if all settings have been added
    */

    roboSystemsCheck() {
        if (this.weather.homeCitySet) {
            console.log("City is set, time to query the Weather API");
            this.weather.homeCitySet = false;
            this.weather.showHomeTownWeather();
        }

        if (this.movies.favMovieSet) {
            console.log("Movie is set, time to query the Movie API");
            this.movies.favMovieSet = false;
            this.movies.showFavMovieDetails();
        }

        if (this.profile.roboNameSet) {
            console.log("Name is set, resetting names everywhere on document");
            this.profile.roboNameSet = false;
        }

        this.updateMK1Status();
    }


}