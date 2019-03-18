import React, { Component } from 'react';
import {withDataProvider} from "./DataProvider" 


class Bountiesdisplay extends Component {
    
    render() {
    
        const mappedBounties = this.props.list.map(bounty =>
            <div style={{width: 600, border:"solid"}}> 
               
                <h1>Name: {bounty.firstName} {bounty.lastName} </h1>
                <h1> Status: {bounty.living === "true" ? <img style={{width: 200}} src="https://png.pngtree.com/svg/20170309/548f9c3c9c.png" alt="alive icon" /> 
                : <img style={{width: 200}} src="https://cdn3.iconfinder.com/data/icons/halloween-29/64/grave-512.png" alt="dead icon"/>} </h1>
                <h1>Reward: {bounty.bountyAmount}</h1>
                <h1>Jedi or Sith: {bounty.type}</h1>
            </div>)
    
        return (
            <div>
                <h1>{mappedBounties}</h1>
            </div>
        );
    }

}

export default withDataProvider(Bountiesdisplay);