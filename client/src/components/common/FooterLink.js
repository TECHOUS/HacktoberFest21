import React from 'react';
import '../styles/FooterLink.css';

const FooterLink = (props) => {
    return (
        <div className="footerLink">
            <i className={props.class}></i>{' '}
            <a href={props.link}>{props.title}</a>
            <hr />
        </div>
    );
};

export default FooterLink;
