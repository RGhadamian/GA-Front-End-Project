 class Profile {
    constructor (robot) {
        this.roboName = "Mark Zuckerberg"
        this.roboNameSet = false;
        this.robot = robot;

        $('#jack').click(() => this.profilePicChange());
        $('#roboName').submit(() => this.changeName()); 
        $('#profile-pic').click(() => this.profileModal());
        $('#profile-pic').hover(function() {
            $( this ).fadeOut( 1000 ),
            $( this ).fadeIn( 1000 );
          })

        
    }

    profileModal() {
        $("#modal").children().remove();
    
        $('#modal').append(`
        <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalFormTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalFormTitle">Choose Your Robot Profile Pic</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                      
              <div id="carouselExampleIndicators" class="carousel slide">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                      <img src="img/zuck.png" class="d-block img-fluid" id="jack" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src="img/billgates.jpeg" class="d-block img-fluid" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src="img/bezos-pp.jpeg" class="d-block img-fluid" alt="...">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
              </div>
              </div>
            </div>
          </div>
        </div>`)

        $('#modalForm').modal('show');
    }

    profilePicChange() {
      //$('#modalForm').modal('hide');
      console.log('hi');
      //$('#profile-pic').attr('src', 'event.target.attr('src');

    }


    changeName() {
        
        event.preventDefault(); 
        
        this.roboName = $('#roboNameInput').val();
        this.roboNameSet = true;
        console.log("Robot name set to: " + this.roboName);
        $('#roboNameInput').val("").attr('placeholder','Change name again...?');
        this.robot.addToast();
        $('#liveToast').toast('show');
        this.robot.roboSystemsCheck();
}




 }
 
