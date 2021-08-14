import React from 'react';

const Disclaimer = (props) => {
    return (
        <div
            style={{
                bottom: 0,
                width: '100%',
                textAlign:'center',
                marginTop: props.topValue
            }}
        >
            Disclaimer: This site is fan made.
        </div>
    );
};

export default Disclaimer;
