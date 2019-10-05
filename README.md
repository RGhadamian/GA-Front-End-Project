# Project 1: Rosh's Robot

## Aim:
The 'Robot' project is the first project from our Software Engineering Immersive at General Assembly where we were given some code from our instructor part of which was working. It featured:
- some basic DOM manipulation and one API call all within the one JS file that could only display on the DOM if both a 'favourite movie' of the Robot and 'home city' was selected. 
- partially working bootstrap structure

My goal for this project was to work with the existing code base rather than starting from scratch to be more like working with legacy code. I wanted to:
- make sure all existing functionality could be used more intuitively as a user
- refactor the code so that the JS code is split amongst a number of different files that is simpler to understand and semantic
- extend the functionality to include a number of more advanced bootstrap components
- added a few more API calls
- make the bootstrap structure work better
- have the option add and remove elements 

## Project Includes: 
- JQuery
    - Toasts
    - Modals
    - Animation
    - Basic DOM manipulation
    - Carousels

- API's
    - Open Weather API
    - OMDB Movie API
    - Unsplash Picture API
    - Google Maps API
    - NYC Open Data API

- HTML & CSS
    - Bootstrap

---

#### Name & Picture
- You can set it's name and it will dynamically change all instances where the Robot's name is called throughout the document at any time
- when name is set a Toast displays saying the name has changed
- You can change it's profile picture through a carousel in the modal
- On hover the profile pic will fade and fade out
    
To do: 
- Clicking on carousel picture will change the profile picture of the Robot
- On Hover a overlay will come over to display 'Change Profile Picture'

#### Weather
- When you click 'Weather' button a modal pops up to Search City
- When you set a City the weather in that city is displayed (Open Weather API)
- When you search the city it gets a random photo from that city (Unsplash API)
- When you click 'Listeners' the weather listeners block displays or closes

To do:
- Clean up the HTML so that the city is more human
- Get Weather listeners to work 
- It will show on a map where the Robot has lived
- Clean up removing of old information when setting weather

#### Movie
- When you clikc on 'Movie' button a model pops up to search Movie database 
- When you set a Movie the movie review is displayed (OMDB API)
- When click on murder it shows what the police did
- Shows the murders on a map

To do:
- Clean up removing of old information when setting movie

#### Safety
- When user clicks on 'Safety' button a map (Google Maps API) displays with all the boroughs of NYC

To do: 
- When a user clicks on a borough it displays the latest murders and shows it on the Map
- if user selected number of murders in the New York region based on the borough selected, with default of 10, and display as a drop down list
- When click on murder it shows what the police did


### General Improvements 
U/I extensions to do: 
- Clean up toasts so they are more human and display when a city and favourite movie has been set
- Clean up carousel for the robot profile picture 
- Progress bar for when searching an API
- Spinners for button clicks


### Requirements: 
 
✅ Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM

✅ The weather API has been included in RobotMk1 - you will need one additional API intergration 

✅ Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)

✅ Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc
What I'd like to build is a Robot that do multiple things. 