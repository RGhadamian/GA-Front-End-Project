class Movies {
    constructor (robot) {
        this.favoriteMovie = "Find a Movie";
        this.favMovieSet = false; //set to true when favorite move is set via the DOM
        this.robot = robot;

        $('#searchMovieModal').click(() => this.searchMovieModal());
    }

    /***
     * adds the fav movie form to the dom
     */
    searchMovieModal() {
        console.log("show movie form");
        this.robot.addModal('Set my Favourite Movie!', 'mk1MovieInput', 'Favourite Movie', 'Enter Movie Name!');


        //handle the form
        $("#mk1SettingsForm").submit((event) => {
            event.preventDefault(); 

            $(function () {
                $('#modalForm').modal('toggle');
             });
             
            //set the robots favorite movie
            this.favoriteMovie = $('#mk1MovieInput').val();
            this.favMovieSet = true;
            console.log("Robot favorite movie set to: " + this.favoriteMovie);

            $("#mk1Settings").remove(); //remove the settings from the dom

            this.robot.roboSystemsCheck(); //see if all infomation has been collected

        });
    }

    showFavMovieDetails() {

        this.getFavMovie(this.favoriteMovie)
            .then((movie) => {
                console.log(movie);

                $('#roboDisplay').children().remove(); //remove this if it exists

                const poster = this.getMoviePosterFromResult(movie);
                //let movieWebsite = "<a href='#'>Website</a>"

                let movieScore = "No Score on IMDB"

                if (movie.imdbRating > 7.0) {
                    movieScore = "Awesome!"
                }
                else if (movie.imdbRating >= 4) {
                    movieScore = "not that great..."
                }

                else {
                    movieScore = "terrible"
                }

                //show the weather on the DOM        
                this.robot.roboDisplay.append(`
        <div class="col-12" id="mk1StatusJumbo">    
            <div class="jumbotron">
                <h1 class="display-4"><span class="currentRoboName">${this.robot.profile.roboName}</span>'s Favourite Movie is "${this.favoriteMovie}"!</h1>
                <p class="lead">The movie got a <span class="special">${movie.imdbRating}</span> score on IMDB which is ${movieScore}</p>
                <hr class="my-4">
                <div class="row">
                <div class="col-5">${poster}</div>   
                <div class="col-7">
                <p><span class="font-weight-bold">The Plot of the movie is:</span> "${movie.Plot}"</p>
                <p><span class="font-weight-bold">It Stars:</span> ${movie.Actors}</p>
                <p><span class="font-weight-bold">Box Office:</span> ${movie.BoxOffice}</p>
                <a id="movieWebsite" href="#">Website</a>
                </div>
                </div>
                
            </div>
        </div>`);

                if (movie.Website !== "N/A") {
                    $('#movieWebsite').attr('href', movie.Website).attr('target', '_blank');
                }

            })
            .catch((err) => console.log(err));
    }

    async getFavMovie(movie) {
        const moviePromise = await $.ajax({ url: `http://www.omdbapi.com/?apikey=53aa2cd6&t=${movie}` });
        //console.log(moviePromise);

        return moviePromise;
    }

    getMoviePosterFromResult(movieResult) {
        const url = movieResult.Poster;

        return `<img width="100%" src="${url}">`;
    }

}