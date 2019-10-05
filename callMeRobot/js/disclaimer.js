class Disclaimer {
    constructor(robot) {
        this.robot = robot;

        this.disclaimer();
    }


    disclaimer() {

        $("#modal").children().remove();

        $('#modal').append(`
<div class="modal fade" id="modalDisclaimer" tabindex="-1" role="dialog" aria-labelledby="modalFormTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalFormTitle">Robot Project</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3>Project 1: Rosh's Robot</h3>

        <h4>Aim:</h4>
      <p>The 'Robot' project is the first project from our Software Engineering Immersive at General Assembly where we were given some code from our instructor part of which was working. It featured:</p>
      <ul>
      <li>some basic DOM manipulation and one API call all within the one JS file that could only display on the DOM if both a 'favourite movie' of the Robot and 'home city' was selected. </li>
      <li>partially working bootstrap structure</li>
      </ul>
      
      <p>My goal for this project was to work with the existing code base rather than starting from scratch to be more like working with legacy code. I wanted to:</p>
      <ul>
      <li>make sure all existing functionality could be used more intuitively as a user</li>
      <li>refactor the code so that the JS code is split amongst a number of different files that is simpler to understand and semantic</li>
      <li>extend the functionality to include a number of more advanced bootstrap components</li>
      <li>added a few more API calls</li>
      <li>make the bootstrap structure work better</li>
      <li>have the option add and remove elements </li>
      </ul>

      <h4>Project Includes: </h4>
      <ul>
        <li>JQuery
      <ul>
      <li>Toasts</li>
      <li>Modals</li>
      <li>Animation</li>
      <li>Basic DOM manipulation</li>
      <li>Carousels</li>
          </ul>
          </ul>
          <ul><li>
          API's</li>
      <ul>
      <li>Open Weather API</li>
      <li>OMDB Movie API</li>
      <li>Unsplash Picture API</li>
      <li>Google Maps API</li>
      <li>NYC Open Data API</li>
      </ul>
      </ul>
      <ul>
      <li> HTML & CSS</li>
      <ul>
          <li>Bootstrap
          </li>
          </ul>
          </ul>
      <hr>
      
     <h4> Name & Picture</h4>
      <ul>
      <li>You can set it's name and it will dynamically change all instances where the Robot's name is called throughout the document at any time</li>
      <li>when name is set a Toast displays saying the name has changed</li>
      <li> You can change it's profile picture through a carousel in the modal</li>
      <li> On hover the profile pic will fade and fade out</li>
      </ul>

      <p>To do: </p>
      <ul>
      <li> Clicking on carousel picture will change the profile picture of the Robot</li>
      <li>On Hover a overlay will come over to display 'Change Profile Picture'</li>
      </ul>

      <h4>Weather</h4>
      <ul>
      <li>When you click 'Weather' button a modal pops up to Search City</li>
      <li> When you set a City the weather in that city is displayed (Open Weather API)</li>
      <li>When you search the city it gets a random photo from that city (Unsplash API)</li>
      <li> When you click 'Listeners' the weather listeners block displays or closes</li>
      </ul>

      <p>To do:</p>
      <ul>
      <li> Clean up the HTML so that the city is more human</li>
      <li> Get Weather listeners to work </li>
      <li> It will show on a map where the Robot has lived</li>
      <li> Clean up removing of old information when setting weather</li>
      </ul>

      <h4> Movie</h4>
      <ul>
      <li> When you clikc on 'Movie' button a model pops up to search Movie database </li>
      <li> When you set a Movie the movie review is displayed (OMDB API)</li>
      <li> When click on murder it shows what the police did</li>
      <li> Shows the murders on a map</li>
      </ul>

      <p>To do:</p>
      <ul>
      <li> Clean up removing of old information when setting movie</li>
      </ul>

      <h4>Safety</h4>
      <ul>
      <li> When user clicks on 'Safety' button a map (Google Maps API) displays with all the boroughs of NYC</li>
      </ul>

      <p>To do: </p>
      <ul>
      <li> When a user clicks on a borough it displays the latest murders and shows it on the Map</li>
      <li> if user selected number of murders in the New York region based on the borough selected, with default of 10, and display as a drop down list</li>
      <li> When click on murder it shows what the police did</li>
      </ul>
      
      <h4>General Improvements </h4>
      <p>U/I extensions to do: </p>
      <ul>
      <li> Clean up toasts so they are more human and display when a city and favourite movie has been set</li>
      <li> Clean up carousel for the robot profile picture </li>
      <li> Progress bar for when searching an API</li>
      <li> Spinners for button clicks</li>
      </ul>
      
      <h4> Requirements: </h4>
      <ul>
      <li>✅ Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM</li>
      
      <li>✅ The weather API has been included in RobotMk1 - you will need one additional API intergration </li>
      
      <li>✅ Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)</li>
      
      <li>✅ Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc</li>
      </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>`)

$('#modalDisclaimer').modal('show');
    }

}