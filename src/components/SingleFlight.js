import React, { Fragment } from 'react';
import './SingleFlight.css';

function SingleFlight(props) {
    const flightData = props.flightData;
    return (
        <Fragment>
            <div className={`row flight-details__card`}>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6 allcolumns flight-logo">
                    <img src={`/images/${flightData.Airline.toLowerCase().split(" ").join("-")}-logo.png`} />
                    <span className={`flight-score`}>
                        <span className={`flight-name`}>{flightData.Airline}</span>
                    </span>
                </div>
                <div className={`col-lg-2 col-md-6 col-sm-6 col-6 flight-time allcolumns`}>
                    <span><p>{flightData.Departure}</p></span>
                    <span><p>{flightData.From}</p></span>
                </div>
                <div className={`col-lg-2 col-md-12 col-sm-12 col-12 flight-info allcolumns`}>
                    <span><p>{flightData.Duration}</p></span>
                </div>
                <div className={`col-lg-2 col-md-6 col-sm-6 col-6 flight-time allcolumns`}>
                    <span><p>{flightData.Arrival}</p></span>
                    <span><p>{flightData.To}</p></span>
                </div>
                <div className={`col-lg-2 col-md-6 col-sm-6 col-6 flight-price allcolumns`}>
                    <span><p>&#8377;{flightData.Price}</p></span>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-12 allcolumns flight-summary">
                    <button className={`btn btn-success`}>Book Now</button>
                </div>
            </div>
        </Fragment>
    )
}

export default SingleFlight;
