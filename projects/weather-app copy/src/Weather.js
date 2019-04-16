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
                
            }
        }
                console.log(this.props.icon)
                switch (this.props.icon) {
                case "01d" : 
                styles.parentDiv.backgroundImage = "url("+ "https://www.welovesolo.com/wp-content/uploads/vector/58/blue_sky_01.jpg"+ ")";
                break;
                case "02d" :
                styles.parentDiv.backgroundImage = "url("+ "https://media3.giphy.com/media/Sm7xFaUN19e4E/giphy.gif"+ ")";
                break; 
                case "03d" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/qq5gwamAHVofm/giphy.gif"+ ")";
                break; 
                case "04d" :
                styles.parentDiv.backgroundImage = "url("+ "http://i.imgur.com/CHcpl8J.gif"+ ")";
                break; 
                case "09d" :
                styles.parentDiv.backgroundImage = "url("+ "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cd528245679701.58390bf326673.gif"+ ")";
                break; 
                case "10d" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/5PjafLZFxMWc/giphy.gif"+ ")";
                break; 
                case "11d" :
                styles.parentDiv.backgroundImage = "url("+ "http://awesome.superluckyland.com/wp-content/uploads/2018/10/thunderstorm-orig.gif"+ ")";
                break; 
                case "13d" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/Yy26NRbpB9lDi/giphy.gif"+ ")";
                break; 
                case "50d" :
                styles.parentDiv.backgroundImage = "url("+ "https://www.thisiscolossal.com/wp-content/uploads/2017/12/sanfrancisco_fog_photography_33.jpg"+ ")";
                break; 
                case "01n" : 
                styles.parentDiv.backgroundImage = "url("+ "https://media0.giphy.com/media/11kn6DFp9BNqWA/giphy.gif"+ ")";
                break;
                case "02n" :
                styles.parentDiv.backgroundImage = "url("+ "https://i.pinimg.com/originals/f9/50/30/f95030552b212348b35c807c8957fe54.gif"+ ")";
                break; 
                case "03n" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/Q6S3OYaRz4MKI/giphy.gif"+ ")";
                break; 
                case "04n" :
                styles.parentDiv.backgroundImage = "url("+ "https://i.gifer.com/23dX.gif"+ ")";
                break; 
                case "09n" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/fop5eTlBCgFCE/giphy.gif"+ ")";
                break; 
                case "10n" :
                styles.parentDiv.backgroundImage = "url("+ "https://media.giphy.com/media/fop5eTlBCgFCE/giphy.gif"+ ")";
                break; 
                case "11n" :
                styles.parentDiv.backgroundImage = "url("+ "https://i.kinja-img.com/gawker-media/image/upload/s--vtmzjsHQ--/c_scale,fl_progressive,q_80,w_800/nlf7pyldk4mrsbgpatnc.gif"+ ")";
                break; 
                case "13n" :
                styles.parentDiv.backgroundImage = "url("+ "https://media1.tenor.com/images/0758a0771c2929c841573585f9076d7d/tenor.gif?itemid=11971187"+ ")";
                break; 
                case "50n" :
                styles.parentDiv.backgroundImage = "url("+ "https://media0.giphy.com/media/dz6Nrk35xWP3q/giphy.gif?cid=3640f6095c7c5247762f485667701f87"+ ")";
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