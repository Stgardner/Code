import React, {Component} from "react"
import WeatherSummary from "./WeatherSummary"
import {withDataProvider} from "./DataProvider"

class Weather extends Component  {
    
    render() {
        const styles = {
            parentDiv:{
                width: "100%",
                backgroundSize: "cover",
                height: "100vh",
                overflow: "hidden",
                backgroundImage: ""
            }
        }
                
                switch (this.props.icon) {
                case "01d" : 
                styles.parentDiv.backgroundImage = "url("+ "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_2-1?wid=1024&hei=576&$wide-bg$"+ ")";
                break;
                case "02d" :
                styles.parentDiv.backgroundImage = "url("+ "https://www.eoas.ubc.ca/courses/atsc113/flying/met_concepts/01-met_concepts/01c-cloud_coverage/images-01c/g2.jpg"+ ")";
                break; 
                case "03d" :
                styles.parentDiv.backgroundImage = "url("+ "https://www.blackstratus.com/wp-content/uploads/2016/04/cloud.jpg"+ ")";
                break; 
                case "04d" :
                styles.parentDiv.backgroundImage = "url("+ "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/FX4wpBo/videoblocks-dramatic-time-lapse-of-broken-clouds-over-athens_hizqer8qeg_thumbnail-full01.png"+ ")";
                break; 
                case "09d" :
                styles.parentDiv.backgroundImage = "url("+ "https://cdn.pixabay.com/photo/2015/08/03/22/25/rain-874041_960_720.jpg"+ ")";
                break; 
                case "10d" :
                styles.parentDiv.backgroundImage = "url("+ "https://bluestemamphitheater.org/wp-content/uploads/blog-rain-or-shine.jpg"+ ")";
                break; 
                case "11d" :
                styles.parentDiv.backgroundImage = "url("+ "http://www.stormgeo.com/assets/ArticleImages/_resampled/CroppedFocusedImageWzQyODgsMjcwMCwieSIsNzRd/thunderstorm-flipped.jpg"+ ")";
                break; 
                case "13d" :
                styles.parentDiv.backgroundImage = "url("+ "https://i2-prod.gloucestershirelive.co.uk/news/article2374072.ece/ALTERNATES/s1200/2_snow-WEATHER_06JPG.jpg"+ ")";
                break; 
                case "50d" :
                styles.parentDiv.backgroundImage = "url("+ "https://www.thisiscolossal.com/wp-content/uploads/2017/12/sanfrancisco_fog_photography_33.jpg"+ ")";
                break; 
}
         
          
        
        
    return (
        <div style={styles.parentDiv}>
            
                    <WeatherSummary />
        
        </div>
    )
}
}
        

export default withDataProvider(Weather)