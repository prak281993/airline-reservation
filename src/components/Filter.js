import React, { useState, useEffect } from 'react';
import './Filter.css';

function Filter(props) {
    const [priceRange, setPriceRange] = useState('2000-8000');
    const [duration, setDuration] = useState([]);
    const [airline, setAirline] = useState([]);
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);

    const setDurationHandler = (value) => {
        const allDurations = pushAndDelete(duration, value);
        setDuration(allDurations);
    }

    const setAirlineHandler = (value) => {
        const allAirlines = pushAndDelete(airline, value);
        setAirline(allAirlines);
    }
    const setDepartureHandler = (value) => {
        const allDepartures = pushAndDelete(departure, value);
        setDeparture(allDepartures);
    }

    const setArrivalHandler = (value) => {
        const allArrivals = pushAndDelete(arrival, value);
        setArrival(allArrivals);
    }

    useEffect(() => {
        props.filterValues(
            {
                priceRange,
                duration,
                airline,
                departure,
                arrival
            }
        )
    }, [
        priceRange,
        duration,
        airline,
        departure,
        arrival
    ])

    const pushAndDelete = (data, value) => {
        const allData = [...data];
        if (allData.findIndex(x => x === value) < 0) {
            allData.push(value);
        }
        else {
            const itemIndex = allData.findIndex(x => x === value);
            allData.splice(itemIndex, 1);
        }
        return allData
    }
    return (
        <div className="filters">
            <div className="slide-container filter-item">
                <h4 className="filter-header">Price Range</h4>
                <input onChange={(e) => setPriceRange(`${e.target.value} - ${e.target.max}`)}
                    className="slider"
                    type="range"
                    name="price"
                    id="price"
                    min="2000"
                    max="8000" />
                <div className="range-values">
                    <span className="values">&#8377; 2000</span>
                    <span className="values">&#8377; 8000</span>
                </div>
            </div>
            <div className="filter-item duration-filter">
                <h4 className="filter-header">Duration</h4>
                <span className="checkbox-item">
                    <input onChange={(e) => setDurationHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="duration-first" id="duration-first"
                        value="<2" />
                    <h4 className="checkbox-item__heading">&lt;2 Hours</h4>
                </span>
                <span className="checkbox-item">
                    <input onChange={(e) => setDurationHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="duration-second" id="duration-second"
                        value="2-3" />
                    <h4 className="checkbox-item__heading">2 - 3 Hours</h4>
                </span>
                <span className="checkbox-item">
                    <input onChange={(e) => setDurationHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="duration-third" id="duration-third"
                        value=">3" />
                    <h4 className="checkbox-item__heading">&gt;3 Hours</h4>
                </span>
            </div>
            <div className="filter-item airline-filter">
                <h4 className="filter-header">Airline</h4>
                <span className="checkbox-item">
                    <input onChange={(e) => setAirlineHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="airline-first" id="airline-first"
                        value="Jet Airways" />
                    <i className="airline-logo"><img src="/images/jet-airways-logo.png" alt="jet-airways" /></i>
                    <h4 className="checkbox-item__heading">Jet Airways</h4>
                </span>
                <span className="checkbox-item">
                    <input onChange={(e) => setAirlineHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="airline-second" id="airline-second"
                        value="Indigo" />
                    <i className="airline-logo"><img src="/images/indigo-logo.png" alt="indigo" /></i>
                    <h4 className="checkbox-item__heading">Indigo</h4>
                </span>
                <span className="checkbox-item">
                    <input onChange={(e) => setAirlineHandler(e.target.value)}
                        className="checkbox-item__input"
                        type="checkbox" name="airline-third" id="airline-third"
                        value="Air India" />
                    <i className="airline-logo"><img src="/images/air-india-logo.png" alt="air-india" /></i>
                    <h4 className="checkbox-item__heading">Air India</h4>
                </span>
            </div>
            <div className="filter-item">
                <h4 className="filter-header">Departure Time</h4>
                <div className="departure-filter">
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="12:00 AM-2:59 AM"
                            type="checkbox" name="departure-first" id="departure-first" />
                        <h4 className="checkbox-item__heading">12AM to 2:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="3:00 AM-5:59 AM"
                            type="checkbox" name="departure-second" id="departure-second" />
                        <h4 className="checkbox-item__heading">3AM to 5:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="6:00 AM-8:59 AM"
                            type="checkbox" name="departure-third" id="departure-third" />
                        <h4 className="checkbox-item__heading">6AM to 8:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="9:00 AM-11:59 AM"
                            type="checkbox" name="departure-fourth" id="departure-fourth" />
                        <h4 className="checkbox-item__heading">9AM to 11:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="12:00 PM-2:59 PM"
                            type="checkbox" name="departure-fifth" id="departure-fifth" />
                        <h4 className="checkbox-item__heading">12PM to 2:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="3:00 PM-5:59 PM"
                            type="checkbox" name="departure-sixth" id="departure-sixth" />
                        <h4 className="checkbox-item__heading">3PM to 5:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="6:00 PM-8:59 PM"
                            type="checkbox" name="departure-seventh" id="departure-seventh" />
                        <h4 className="checkbox-item__heading">6PM to 8:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setDepartureHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="9:00 PM-11:59 PM"
                            type="checkbox" name="departure-eighth" id="departure-eighth" />
                        <h4 className="checkbox-item__heading">9PM to 11:59PM</h4>
                    </span>
                </div>
            </div>
            <div className="filter-item">
                <h4 className="filter-header">Arrival Time</h4>
                <div className="arrival-filter">
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="12:00 AM-2:59 AM"
                            type="checkbox" name="arrival-first" id="arrival-first" />
                        <h4 className="checkbox-item__heading">12AM to 2:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="3:00 AM-5:59 AM"
                            type="checkbox" name="arrival-second" id="arrival-second" />
                        <h4 className="checkbox-item__heading">3AM to 5:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="6:00 AM-8:59 AM"
                            type="checkbox" name="arrival-third" id="arrival-third" />
                        <h4 className="checkbox-item__heading">6AM to 8:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="9:00 AM-11:59 AM"
                            type="checkbox" name="arrival-fourth" id="arrival-fourth" />
                        <h4 className="checkbox-item__heading">9AM to 11:59AM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="12:00 PM-2:59 PM"
                            type="checkbox" name="arrival-fifth" id="arrival-fifth" />
                        <h4 className="checkbox-item__heading">12PM to 2:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="3:00 PM-5:59 PM"
                            type="checkbox" name="arrival-sixth" id="arrival-sixth" />
                        <h4 className="checkbox-item__heading">3PM to 5:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="6:00 PM-8:59 PM"
                            type="checkbox" name="arrival-seventh" id="arrival-seventh" />
                        <h4 className="checkbox-item__heading">6PM to 8:59PM</h4>
                    </span>
                    <span className="checkbox-item">
                        <input onChange={(e) => setArrivalHandler(e.target.value)}
                            className="checkbox-item__input"
                            value="9:00 PM-11:59 PM"
                            type="checkbox" name="arrival-eigth" id="arrival-eigth" />
                        <h4 className="checkbox-item__heading">9PM to 11:59PM</h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Filter
