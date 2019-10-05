//run our function when the window is ready
//add the "async" keyword to flag our function as asynchronous
$().ready(async() => {    
    const robo = new Robot(); 
    const disclaimer = new Disclaimer();

    const roboWeatherWidgetOne = new RoboWeatherWidget( $("#RoboWeatherResults1"), "robo weather");
    robo.weather.addWeatherListener(roboWeatherWidgetOne.widgetCallback.bind(roboWeatherWidgetOne)); //use bind to preserve scope of the widget THIS, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

    
    const roboWeatherWidgetTwo = new RoboWeatherWidget( $("#RoboWeatherResults2"), "robo weather");
    robo.weather.addWeatherListener(roboWeatherWidgetTwo.widgetCallback.bind(roboWeatherWidgetTwo));

    const roboWeatherWidgetThree = new RoboWeatherWidget( $("#RoboWeatherResults3"), "robo weather");
    robo.weather.addWeatherListener(roboWeatherWidgetThree.widgetCallback.bind(roboWeatherWidgetThree));


    
})