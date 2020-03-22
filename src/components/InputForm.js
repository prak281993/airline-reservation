import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

function InputForm(props) {
    const [tripType, setTripType] = useState(0);
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [departure, setDeparture] = useState('');
    const [returning, setReturning] = useState('');

    return (
        <div className="book__form">
            <form className="form">
                <div className="form__radio-group">
                    <input onChange={(e) => setTripType(0)} className="form__radio-input" type="radio" name="trip-type" id="one-way" />
                    <label htmlFor="one-way" className="form__radio-label">
                        <span className="form__radio-button">
                        </span>
                            One Way
                    </label>
                </div>
                <div className="form__radio-group">
                    <input onChange={(e) => setTripType(1)} className="form__radio-input" type="radio" name="trip-type" id="round-trip" />
                    <label htmlFor="round-trip" className="form__radio-label">
                        <span className="form__radio-button">
                        </span>
                            Round Trip
                    </label>
                </div>

                <div className="form__group">
                    <input autoComplete="off" onChange={(e) => setSource(e.target.value)} type="text" className="form__input" placeholder="Source" id="source" required />
                    <label htmlFor="source" className="form__label">Source</label>
                </div>

                <div className="form__group">
                    <input autoComplete="off" onChange={(e) => setDestination(e.target.value)} type="text" className="form__input" placeholder="Destination" id="destination" required />
                    <label htmlFor="destination" className="form__label">Destination</label>
                </div>
                <div className="form__group">
                    <input onChange={(e) => setNumberOfSeats(e.target.value)}
                    value={numberOfSeats} 
                    type="number" 
                    className="form__input" 
                    placeholder="Number of Seats" 
                    id="seats" />
                    <label htmlFor="seats" className="form__label">Number of Seats</label>
                </div>

                <div className="journey__dates">
                    <div className="form__group--half">
                        <input onChange={(e) => setDeparture(e.target.value)} type="date" className="form__input departure" placeholder="Departure Date" id="departure" />
                        <label htmlFor="departure" className="form__label">Departure Date</label>
                    </div>
                    <div className="form__group--half">
                        <input onChange={(e) => setReturning(e.target.value)} disabled={(tripType === 1) ? '' : 'disabled'} type="date" className={(tripType === 1) ? "form__input return" : "form__input disabled"} placeholder="Returning Date" id="returning" />
                        <label htmlFor="returning" className="form__label">Returning Date</label>
                    </div>
                </div>
                <div className="form__group--button">
                    <Link to={{
                        pathname:"/details",
                        state:{
                            tripType,
                            source,
                            destination,
                            numberOfSeats,
                            departure,
                            returning
                        }
                    }}
                        className="btn"
                    >Search Flights</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(InputForm);
