import React from 'react';
import '../styles/MainPage.css';
import Disclaimer from '../common/Disclaimer';

const MainPage = () => {
    return (
        <div className="sectionPage" id="mainPage">
            <div className="mainPageContent">
                <img src="hackfest21New.svg" alt="hacktober fest logo" />
                <h1>
                    Open source is changing the <br />
                    world - one pull request at a time.
                </h1>
                <p>
                    Hacktoberfest encourages participation in the open source
                    community, which grows bigger every year. Complete the 2021
                    challenge and earn a limited edition T-shirt. Check your
                    progress <a href="#checkProgress">here</a>.
                </p>
            </div>
            <div id="hf-images-div">
                <div id="img-div__right">
                    <picture>
                        <source type="image/webp" srcSet="fest2020_1.webp" />
                        <img
                            src="fest2020_1.jpg"
                            alt="hacktober fest 20"
                            className="img-inline"
                            id="right-first-img"
                        />
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet="fest2020.webp" />
                        <img
                            src="fest2020.jpg"
                            alt="hacktober fest 20"
                            className="img-right img-inline"
                            id="right-center-img"
                        />
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet="fest2020_2.webp" />
                        <img
                            src="fest2020_2.jpg"
                            alt="hacktober fest 20"
                            className="img-inline"
                            id="right-last-img"
                        />
                    </picture>
                </div>
                <div id="img-div__left">
                    <picture>
                        <source type="image/webp" srcSet="fest2019_1.webp" />
                        <img src="fest2019_1.jpg" 
                            alt="left1" 
                            className="img-inline"
                            id="left-first-img"
                        />
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet="fest2019.webp" />
                        <img
                            src="fest2019.jpg"
                            alt="hacktober fest 19"
                            className="img-left img-inline"
                            id="left-center-img"
                        />
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet="fest2019_2.webp" />
                        <img 
                            src="fest2019_2.jpg" 
                            alt="left2" 
                            className="img-inline"
                            id="left-last-img"
                        />
                    </picture>
                </div>
            </div>
            <Disclaimer topValue='15vh'/>
        </div>
    );
};

export default MainPage;
