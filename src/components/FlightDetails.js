import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import SingleFlight from './SingleFlight';
import SortComponent from './SortComponent';
import allFlights from '../FlightData.json';
import { withRouter } from 'react-router-dom';

function FlightDetails(props) {
    const { tripType, source, destination, numberOfSeats, departure, returning } = props.location.state;
    const [foundFlights, setFoundFlights] = useState([]);
    const [finalFoundFlight,setFinalFoundFlights]=useState([]);

    useEffect(() => {
        const searchedFlight = allFlights.filter(searchFlights);
        setFinalFoundFlights(searchedFlight);
        setFoundFlights(searchedFlight);
    }, []);

    const sortBy = (name) => {
        const sortedFlights = [...foundFlights];
        sortedFlights.sort(customSort(name));
        setFoundFlights(sortedFlights);
    }

    const searchFlights = (flight) => {
        return flight.From === source
            && flight.To === destination
            && flight.SeatsAvailable >= parseInt(numberOfSeats);
    }

    const customSort = (name) => {
        return function (a, b) {
            switch (name) {
                case 'Airline':
                    if (a[name] > b[name]) {
                        return 1;
                    }
                    else if (a[name] < b[name]) {
                        return -1;
                    }
                    else {
                        return a["SeatsAvailable"] - b["SeatsAvailable"]
                    }

                case 'Departure':
                    return new Date('1970/01/01 ' + a[name]) - new Date('1970/01/01 ' + b[name]);

                case 'Duration':
                    if (a[name] > b[name]) {
                        return 1;
                    }
                    else {
                        return -1;
                    }

                case 'Arrival':
                    return new Date('1970/01/01 ' + a[name]) - new Date('1970/01/01 ' + b[name]);

                case 'Price':
                    return a[name] - b[name];

            }
        }
    }

    const getFilterValues = ({ priceRange, duration, airline, departure, arrival }) => {
        const price = priceRange.split('-');
        const flights = [...finalFoundFlight];
        let fd1, fd2, fd3, fd4, fd5;
        let allFilters = [];
        fd1 = flights.filter(flight => flight.Price >= parseInt(price[0]) && flight.Price <= parseInt(price[1]));
        allFilters.push(fd1);
        if (duration.length > 0) {
            let newDuration = mapDurationArray(duration);
            for (let i = 0; i < newDuration.length; i++) {
                if (i === 0) {
                    fd2 = flights.filter(newDuration[i]);
                }
                fd2 = fd2.filter(newDuration[i]);
            }
            allFilters.push(fd2);
        }
        if (airline.length > 0) {
            fd3 = flights.filter(flight => airline.includes(flight.Airline));
            allFilters.push(fd3);
        }
        if (departure.length > 0) {
            let newDeparture = mapDepartureArrivalArray(departure);
            for (let i = 0; i < newDeparture.length; i++) {
                console.log(newDeparture[i])
                if (i === 0) {
                    fd4 = flights.filter(newDeparture[i]);
                }
                fd4 = fd4.filter(newDeparture[i]);
            }
            allFilters.push(fd4);
        }

        if (arrival.length > 0) {
            let newArrival = mapDepartureArrivalArray(arrival);
            for (let i = 0; i < newArrival.length; i++) {
                if (i === 0) {
                    fd5 = flights.filter(newArrival[i]);
                }
                fd5 = fd5.filter(newArrival[i]);
            }
            allFilters.push(fd5);
        }
        let finalData = allFilters.shift().reduce((acc, item) => {
            if (acc.indexOf(item) === -1 && allFilters.every(a => {
                return a.indexOf(item) !== -1;
            })) {
                acc.push(item)
            }
            return acc;
        }, []);

        setFoundFlights(finalData);
    }

    const mapDepartureArrivalArray = (timeOfFlight) => {
        let newTime = timeOfFlight.map(time => {
            let t = time.split('-');
            return function (data) {
                return new Date('1970/01/01 ' + data.Departure) > new Date('1970/01/01 ' + t[0])
                    && new Date('1970/01/01 ' + data.Departure) < new Date('1970/01/01 ' + t[1]);
            }
        });
        return newTime;
    }

    const mapDurationArray = (duration) => {
        let newDuration = duration.map(time => {
            if (time.length > 2) {        // data is of type <t ,t1-t2 and >t
                let t = time.split('-');
                return function (data) {
                    return (new Date('1970/01/01 ' + data.Arrival) - new Date('1970/01/01 ' + data.Departure)) / 3600000 >= parseInt(t[0])
                        && (new Date('1970/01/01 ' + data.Arrival) - new Date('1970/01/01 ' + data.Departure)) / 3600000 <= parseInt(t[1]);
                }
            }
            else {
                return function (data) {
                    let t = time.split('');
                    if (t[0] === '<') {
                        return (new Date('1970/01/01 ' + data.Arrival) - new Date('1970/01/01 ' + data.Departure)) / 3600000 < parseInt(t[1]);
                    }
                    else {
                        return (new Date('1970/01/01 ' + data.Arrival) - new Date('1970/01/01 ' + data.Departure)) / 3600000 > parseInt(t[1]);
                    }
                }
            }
        });
        return newDuration;
    }

    return (
        // <div className="bg-video">
        //     <video autoPlay loop muted className="bg-video__content">
        //         <source src="/images/bg-video.mp4" type="video/mp4" />
        //         <source src="/images/bg-video.webm" type="video/webm" />
        //                         Your browser does not support this video
        //                         </video>
        // </div>
        <section className="flight-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <Filter filterValues={getFilterValues} />
                    </div>
                    {
                        (foundFlights && foundFlights.length > 0) ?
                            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                                <section className="flight-details__section">
                                    <SortComponent sortBy={sortBy} />
                                    {
                                        foundFlights.map((flight, index) => <SingleFlight key={index + '-' + flight.Airline} flightData={flight} />)
                                    }
                                </section>
                            </div> :
                            null
                    }
                </div>
            </div>
        </section>
    )
}

export default withRouter(FlightDetails);
