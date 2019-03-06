import React from 'react';
import {withDataProvider} from "./DataProvider"

const WeatherSummary = (props) => {

    return (
        <div>
            <h1>{props.value}</h1>
        </div>
    )
};

export default withDataProvider(WeatherSummary);

