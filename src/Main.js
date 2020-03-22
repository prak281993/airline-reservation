import React from 'react';
import InputForm from './components/InputForm';
import allFlights from './FlightData.json';

function Main() {
    return (
        <main className="main">
            <header className="header">
                <div className="header__logo-box">
                    <img src="images/logo.png" alt="Logo" className="header__logo" />
                    <h2 className="header__text">Happy Travels</h2>
                </div>
            </header>
            <section className="section-book">
                <div className="book">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <InputForm allFlights={allFlights} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="composition">
                                    <img src="/images/portrait1.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                                    <img src="/images/portrait2.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                                    <img src="/images/portrait3.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
