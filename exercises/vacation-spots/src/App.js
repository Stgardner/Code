import React from "react";
import Vacation from "./Vacation"

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

  const App = () => {
    const Mappedlocations = vacationSpots.map((spot) => {
        return (
            <Vacation 
            place={spot.place}
            price={spot.price}
            timeToGo={spot.timeToGo}
            />
        )
    })
    const styles = {
      display: "grid",
      gridGap: 5,
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"
    }
    return (
      <div style={styles}>
        {Mappedlocations}
      </div>
    )

  }


export default App