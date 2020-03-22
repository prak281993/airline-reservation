import React, { Fragment } from 'react'

function SortComponent(props) {
    const sortBy = (name) => {
        props.sortBy(name);
    }
    return (
        <Fragment>
            <div className="row desktop">
                <div className="col-2 col-lg-2">
                    <div onClick={() => sortBy('Airline')} className="sort-headers">
                        <h4>Airline</h4>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2">
                    <div onClick={() => sortBy('Departure')} className="sort-headers">
                        <h4>Departure</h4>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2">
                    <div onClick={() => sortBy('Duration')} className="sort-headers">
                        <h4>Duration</h4>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2">
                    <div onClick={() => sortBy('Arrival')} className="sort-headers">
                        <h4>Arrival</h4>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2">
                    <div onClick={() => sortBy('Price')} className="sort-headers">
                        <h4>Price</h4>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
            </div>
            <div className="row mobile">
                <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                    <div onClick={() => sortBy('Airline')} className="sort-headers">
                        <span><i className="fa fa-fw fa-plane"></i></span>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                    <div onClick={() => sortBy('Departure')} className="sort-headers">
                        <i className="fas">&#xf5b0;</i>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                    <div onClick={() => sortBy('Duration')} className="sort-headers">
                        <i className="fa fa-fw fa-hourglass-half"></i>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                    <div onClick={() => sortBy('Arrival')} className="sort-headers">
                        <i className="fa fa-fw fa-plane-arrival"></i>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
                <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                    <div onClick={() => sortBy('Price')} className="sort-headers">
                        <i className="fas fa-rupee-sign"></i>
                        <span><i className="fa fa-fw fa-sort"></i></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SortComponent
