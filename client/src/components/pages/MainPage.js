import React from 'react';
import '../styles/MainPage.css';
import Disclaimer from '../common/Disclaimer';

const MainPage = () => {
    return (
        <div className="sectionPage" id="mainPage">
            <div className="mainPageContent">
                <img src="mainLogo.svg" alt="hacktober fest logo" />
                <span id="checker">Checker</span>
                <h1>
                    Open source is changing the <br />
                    world - one pull request at a time.
                </h1>
                <p>
                    Hacktoberfest encourages participation in the open source
                    community, which grows bigger every year. Complete the 2020
                    challenge and earn a limited edition T-shirt. Check your
                    progress <a href="#checkProgress">here</a>.
                </p>
            </div>
            <div id="hacktoberFestLeft">
                <img
                    src="fest2018.jpg"
                    alt="hacktober fest 18"
                    className="sideImages"
                />
            </div>
            <div id="hacktoberFestRight">
                <img
                    src="fest2019.jpg"
                    alt="hacktober fest 19"
                    className="sideImages"
                />
            </div>
            <Disclaimer topValue='25vh'/>
        </div>
    );
};

export default MainPage;
