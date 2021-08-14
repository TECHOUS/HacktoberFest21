import React from 'react';
import '../styles/Footer.css';
import FooterLink from '../common/FooterLink';

const Footer = () => {
    return (
        <div className="footer">
            <div className="techousFooter footerContent">
                <h2>Powered by</h2>
                <div>
                    <img src="techousPNG.png" alt="techous logo" />
                </div>
            </div>
            <div className="techousLinks footerContent">
                <FooterLink
                    class="fab fa-node-js"
                    title="Source Code"
                    link="https://github.com/TechOUs/HacktoberFest20"
                />
                <FooterLink
                    class="fas fa-file-signature"
                    title="Contribution"
                    link="https://github.com/TechOUs/HacktoberFest20/tree/master/CONTRIBUTING.md"
                />
                <FooterLink
                    class="far fa-file-code"
                    title="Code of Conduct"
                    link="https://github.com/TechOUs/HacktoberFest20/blob/master/.github/CODE_OF_CONDUCT.md"
                />
                <FooterLink
                    class="far fa-comments"
                    title="Our Community"
                    link="https://github.com/TechOUs"
                />
                <FooterLink
                    class="far fa-file-alt"
                    title="LICENSE"
                    link="https://github.com/TechOUs/HacktoberFest20/blob/master/LICENSE"
                />
            </div>
            <div id="bottomFooter">
                <img src="Sponsors.svg" alt="sponsors" />
            </div>
        </div>
    );
};

export default Footer;
