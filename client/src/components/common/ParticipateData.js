import React from 'react'

const ParticipateData = (props) => {
    return (
        <div className="dataDiv">
            <h2>{props.h}</h2>
            <hr className="hrUnderline"/>
            <p>{props.para}</p>
        </div>
    )
}

export default ParticipateData
