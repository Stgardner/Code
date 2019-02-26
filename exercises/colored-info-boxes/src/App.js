import React from 'react';
import Infobox from "./Infobox"

const App = () => {
  return  <div>
        <Infobox title="Samus" subtitle="Good Fighter" 
        information="Strong punch, flame throw" color="red" />
        
        <Infobox title="Kirby" subtitle="The Dangerous"
        information="Watch out for this one" color="blue"/>
        
        <Infobox title="Mario" subtitle="Pizza Delivery Guy"
        information="Brother of Luigi" color="purple"/>
        
        <Infobox title="Luigi" subtitle="Sus delivery guy"
        information="Good uppercut" color="pink"/>
        
        <Infobox title="Starfox" subtitle="n64 God"
        information="Good attacks and defense" color="red"/>
       
        <Infobox title="Bowser" subtitle="Boss Level"
        information="Very strong attack" color="orange"/>
        
        <Infobox title="Princess Peach" subtitle="Princess"
        information="Often rescued but a good fighter" color="yellow"/>
        
        <Infobox title="Yoshi" subtitle="The lizard guy"
        information="Eats mushrooms as power-ups" color="green"/>
        
        <Infobox title="Wario" subtitle="Who Knows"
        information="Little known about this fighter" color="blue"/>
    
    
    </div>

}

export default App;
