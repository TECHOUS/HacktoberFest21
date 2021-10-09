import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [option, setOption] = useState(false);

    /**
     * BUTTON HANDLERS
     **/
    const toggle = () => {
        setOption(!option);
    };
    const faqHandler = () => {
        window.location.href = '#faq';
        toggle();
    };
    const participateHandler = () => {
        window.location.href = '#participate';
        toggle();
    };
    const mainHandler = () => {
        window.location.href = '#mainPage';
        toggle();
    };
    const progressHandler = () => {
        window.location.href = '#checkProgress';
        toggle();
    };

    /**
     * conditional button styles
     **/
    const hidden = {
        display: 'none',
    };
    const block = {
        display: 'block',
    };

    return (
        <React.Fragment>
            <div id="mobileNav">
                <div id="mobileNavLogo" onClick={toggle}>
                    <img src="Icon.svg" alt="hacktober fest logo" />
                </div>
                <div
                    id="mobileNavCross"
                    onClick={toggle}
                    style={option ? block : hidden}
                >
                    <i className="fas fa-times"></i>
                </div>
                <div
                    className="mobileOptions"
                    style={option ? block : hidden}
                    onClick={progressHandler}
                >
                    <i className="fas fa-search"></i>
                </div>
                <div
                    className="mobileOptions"
                    style={option ? block : hidden}
                    onClick={participateHandler}
                >
                    <i className="fas fa-user-plus"></i>
                </div>
                <div
                    className="mobileOptions"
                    style={option ? block : hidden}
                    onClick={faqHandler}
                >
                    <i className="far fa-question-circle"></i>
                </div>
            </div>
            <div id="desktopNav">
                <img
                    src="Icon.svg"
                    alt="hacktober fest logo"
                    className="desktopHeader"
                    onClick={mainHandler}
                    id="hack-logo"
                />
                <img src="hackoberfest21New.svg"
                className="desktopHeader"
                alt="logo"
                id="hack-header"
                onClick={mainHandler}
                />
                <div className="desktopHeader rightHeader" onClick={faqHandler}>
                    FAQ
                </div>
                <div
                    className="desktopHeader rightHeader"
                    onClick={participateHandler}
                >
                    Participate
                </div>
            </div>
            <div id="forkOnGithub">
                <a href="https://github.com/TechOUs/HacktoberFest21" title="github">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </React.Fragment>
    );
};

export default Header;
