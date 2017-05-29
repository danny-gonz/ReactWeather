var React = require('react');


var WeatherMessage = ({temp, location })=>{
            
         return (
            <h3>It is always sunny in {location} with a high of {temp}</h3>
        )
    }




module.exports = WeatherMessage;