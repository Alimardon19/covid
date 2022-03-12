import React from 'react';
import { useSelector } from 'react-redux';

function Data () {
    const data = useSelector ( state => state.DataReducer.OneCountryData );
    const cases = data.response[0].cases;
    const deaths = data.response[0].deaths;
    const tests = data.response[0].tests;
    const day = data.response[0].day;
    return (
        <div className={ "data" }>
            <h3 className={ 'text' }>{ data.parameters.country }</h3>
            <p className={ 'text-success' }><b>Day: { day }</b></p>
            <div className="Box">
                <div className="Card">
                    <h3 className={ "text-primary" }> Cases </h3>
                    <hr/>
                    <p>
                        <b>New:</b> { cases.new === null ? 0 : cases.new }
                    </p>
                    <p>
                        <b>Active:</b> { cases.active === null ? 0 : cases.active }
                    </p>
                    <p>
                        <b>Critical:</b> { cases.critical === null ? 0 : cases.critical }
                    </p>
                    <p>
                        <b>Recovered:</b> { cases.recovered === null ? 0 : cases.recovered }
                    </p>
                    <p>
                        <b>Total:</b> { cases.total === null ? 0 : cases.total }
                    </p>
                </div>
                <div className="Card">
                    <h3 className={ "text-primary" }> Deaths </h3>
                    <hr/>
                    <p>
                        <b>New:</b> { deaths.new === null ? 0 : deaths.new }
                    </p>
                    <p>
                        <b>Total:</b> { deaths.total === null ? 0 : deaths.total }
                    </p>
                </div>
                <div className="Card">
                    <h3 className={ "text-primary" }> Tests </h3>
                    <hr/>
                    <p>
                        <b>Total:</b> { tests.total === null ? 0 : tests.total }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Data;