import React from 'react';
import '../styles/NoData.css';

const NoData = ({ apiData, message }) => {
    // when no data left come from the API
    if (Object.keys(apiData).length > 0) {
        return (
            <div className="noDataView">
                <i className="fas fa-exclamation-circle fa-5x no-data-exc"></i>
                <h3>{apiData.message!=null ? apiData.message : message}</h3>
            </div>
        );
    } else {
        // default view for the app
        return (
            <div className="noDataView">
                <i className="fab fa-searchengin fa-6x"></i>
                <h2>Let us Hack the October</h2>
                <p>
                    Check the progress above and see where you are
                </p>
            </div>
        );
    }
};

export default NoData;
