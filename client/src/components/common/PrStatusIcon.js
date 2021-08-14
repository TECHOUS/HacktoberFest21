import React from 'react'

const PrStatusIcon = (props) => {
    
    switch(props.prStatus){
        case 'right':
            return (
                <span style={{color: 'green',fontSize: '20px'}} title="Approved Pull Request">
                    <i className="fas fa-check-circle"></i>
                </span>
            );
        case 'wrong':
            return (
                <span style={{color: 'red', fontSize: '20px'}} title="Rejected Pull Request">
                    <i className="fas fa-times-circle"></i>
                </span>
            );
        default:
            return (
                <span style={{color: '#5b6987', fontSize: '20px'}} title="Pending Pull Request">
                    <i className="fas fa-exclamation-circle"></i>
                </span>
            );
    }
}

export default PrStatusIcon;
