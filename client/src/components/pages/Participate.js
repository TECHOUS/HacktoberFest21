import React from 'react';
import ParticipateData from '../common/ParticipateData';
import List from '../common/List';
import Disclaimer from '../common/Disclaimer';
import '../styles/Participate.css';
import AnchorList from '../common/AnchorList';

const Participate = () => {
    return (
        <div className="sectionPage" id="participate">
            <ParticipateData
                h="Getting Started with Hacktoberfest"
                para="We ask all participants to read through the details to ensure that the global community is working toward a shared
                goal. Thank you for honoring the values and following the rules of participation."
            />
            <div className="dataDiv">
                <h2>Participation details</h2>
                <hr className="hrUnderline" />
                <ul>
                    <List
                        list={[
                            'Hacktoberfest is open to everyone in our global community. Whether you’re a seasoned contributor or looking for projects to contribute to for the first time, you’re welcome to participate.',
                            'Pull requests can be made in any participating GitHub or GitLab hosted repository/project. Look for the \'hacktoberfest\' topic to know if a repository/project is participating in Hacktoberfest. Pull requests must be approved by a maintainer of the repository/project to count.',
                            'You can sign up anytime between October 1 and October 31. Just be sure to sign up on the official Hacktoberfest website for your pull requests to count.',
                        ]}
                    />
                </ul>
            </div>
            <div className="dataDiv">
                <h2>Participation rules</h2>
                <hr className="hrUnderline" />
                <ul>
                    <List
                        list={[
                            'Pull requests can be submitted to any opted-in repository on GitHub or GitLab.',
                            'The pull request must contain commits you made yourself.',
                            'If a maintainer reports your pull request as spam, it will not be counted toward your participation in Hacktoberfest.',
                            'If a maintainer reports behavior that’s not in line with the project’s code of conduct, you will be ineligible to participate.',
                            'To get a shirt, you must make four approved pull requests (PRs) on opted-in projects between October 1-31 in any time zone.',
                            'This year, the first 55,000 participants can earn a T-shirt.'
                        ]}
                    />
                </ul>
                <p>
                    A repository/project is considered to be participating in Hacktoberfest if the 'hacktoberfest' topic is present and is accepting public 
                    contributions via pull requests. An individual pull request can also be opted-in directly by adding the 'hacktoberfest-accepted' label.
                </p>
                <p>
                    A pull request is considered approved once it has an overall approving review from maintainers, or has been merged by maintainers, or 
                    has been given the 'hacktoberfest-accepted' label. A pull request with any label containing the word 'spam' or 'invalid' will be considered ineligible for Hacktoberfest.
                </p>
            </div>
            <div className="dataDiv">
                <ParticipateData
                    h="Quality standards"
                    para="In line with Hacktoberfest value #2 (Quantity is fun, quality is key), 
                    we have provided examples of the pull requests that we consider to be low quality 
                    contributions (which we discourage and may be marked as spam by maintainers)."
                />
                <ul>
                    <List
                        list={[
                            "Pull requests that are automated e.g. scripted opening pull requests to remove whitespace / fix typos / optimize images.",
                            "Pull requests that are disruptive e.g. taking someone else's branch/commits and making a pull request.",
                            "Pull requests that are regarded by a project maintainer as a hindrance vs. helping.",
                            "Something that's clearly an attempt to simply +1 your pull request count for October.",
                            "Last but not least, one pull request to fix a typo is fine, but 5 pull requests to remove a stray whitespace is not."
                        ]}
                    />
                </ul>
            </div>
            <div className="dataDiv">
                <h2>Important Resources</h2>
                <hr className="hrUnderline" />
                <p>If you’re new to open source (which everyone was once!), you can take a look 
                at the <a href="https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source">Introduction to Open Source</a> tutorial series. To make your first contribution, 
                it’s required to familiarize yourself with how to create a pull request.</p>
                
                <ParticipateData
                    h="Beginners"
                    para="The following resources share repositories that curate tasks for beginners:" />
                <ul>
                    <AnchorList 
                        list={[
                            "Awesome for Beginners",
                            "Up For Grabs",
                            "First Timers Only"
                        ]}
                        links={[
                            "https://github.com/mungell/awesome-for-beginners",
                            "https://up-for-grabs.net/#/",
                            "https://www.firsttimersonly.com/"
                        ]}
                    />
                </ul>

                <ParticipateData
                    h="Intermediates"
                    para="Once you start feeling more comfortable, you can find more open source projects that can use your help through the following programs:" 
                />
                <ul>
                    <AnchorList
                        list={[
                            "Pull Request Roulette",
                            "CodeTriage",
                            "24 Pull Requests (like Hacktoberfest, but in December)",
                            "Visit this guide to find out more about how you can contribute to open source."
                        ]}
                        links={[
                            "http://www.pullrequestroulette.com/",
                            "https://www.codetriage.com/",
                            "https://24pullrequests.com/",
                            "https://opensource.guide/how-to-contribute/"
                        ]}
                    />
                </ul>

                <ParticipateData
                    h="More"
                    para="Don't forget to checkout these resources !!" 
                />
                <ul>
                    <AnchorList
                        list={[
                            'GitHub Training Kit',
                            'Understanding the GitHub flow',
                            'Getting Started With GitLab',
                            'An Introduction to Open Source',
                            'How open source contributions can boost your career',
                            'How to write the perfect pull request',
                            'How to write a good commit message',
                            'Github Desktop',
                            'Community help in our Hacktoberfest Discord server'
                        ]}
                        links={[
                            'https://github.github.com/training-kit/',
                            'https://guides.github.com/introduction/flow/',
                            'https://about.gitlab.com/get-started/',
                            'https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source',
                            'https://opensource.com/article/19/5/how-get-job-doing-open-source',
                            'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
                            'https://dev.to/chrissiemhrk/git-commit-message-5e21',
                            'https://desktop.github.com/',
                            'https://discord.gg/hacktoberfest'
                        ]}
                    />
                </ul>
            </div>
            <div className="dataDiv">
                <h2>Hacktober Fest 2021 Contribution steps</h2>
                <hr className="hrUnderline" />
                <ol>
                    <li className="listItem">
                        For contributing firstly register on{' '}
                        <a href="https://hacktoberfest.digitalocean.com/">
                            hacktoberfest.digitalocean.com
                        </a>{' '}
                        with your GitHub username.
                    </li>
                    <li className="listItem">
                        In this event you have to make 4 good Pull Requests on
                        any Open Source Project (Repositories) on GitHub.
                    </li>
                    <li className="listItem">
                        Checkout the above <a href="#participate">resources</a> for
                        more information. See the below GITHUB Repositories for
                        contributing in Hacktober Fest 2021.
                    </li>
                    <li className="listItem">
                        Secondly finalise your skill set and the programming
                        languages you are comfortable with.
                    </li>
                    <li className="listItem">
                        After finalise find and choose the project you like to
                        contribute this is the main step.
                    </li>
                    <li className="listItem">
                        <b>Fork the project</b> after choosing. Then find the{' '}
                        <b>CONTRIBUTION</b> details for the project. Most of the
                        times <b>CONTRIBUTING.md file</b> is there in every Open
                        Source Project search that.
                    </li>
                    <li className="listItem">
                        After you got the Contribution Details read it and
                        understand. For every project there are different
                        guidelines which you have to follow to contribute in
                        that project.
                    </li>
                    <li className="listItem">
                        You can also search for HacktoberFest or HacktoberFest21 or related tags
                        issues which you can solve.
                    </li>
                    <li className="listItem">
                        After adding the changes make the Pull Request. Hurrah!
                        you have raised your first Pull Request.
                    </li>
                    <li className="listItem">
                        You can the check your progress also on{' '}
                        <a href="#checkProgress">HacktoberFest21 Checker Website</a> or on the{' '}
                        <a href="https://hacktoberfest.digitalocean.com/">
                            Official Website.
                        </a>
                    </li>
                </ol>
            </div>
            <div className="dataDiv">
                <h3>Hacktober Fest 2021 Updates</h3>
                <hr className="hrUnderline" />
                <p>
                    PRs count if:
                    <br />
                    &nbsp;&nbsp;<i className="far fa-hand-point-right"></i>{' '}
                    Submitted in a public repo with the <b>hacktoberfest</b> topic on GitHub/GitLab AND
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-hand-point-right"></i>{' '}
                    Submitted during the month of October 1-31 AND
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-greater-than"></i> The PR has been
                    approved OR
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-greater-than"></i> The PR is merged OR
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-greater-than"></i> The PR is
                    labelled as hacktoberfest-accepted by a maintainer
                </p>
            </div>
            <div className="dataDiv">
                <h3>
                    <a href="https://github.com/TechOUs/HacktoberFest21Community">
                        Hacktober Fest 21 Community
                    </a>
                </h3>
                <hr className="hrUnderline" />
                <p>
                    Contribute to this beginner level project and get Pull
                    Requests merged easily.
                </p>
            </div>
            <div className="dataDiv">
                <h3>Repositories you can Contribute and win a chance to get in <a href="https://github.com/TECHOUS">TECHOUS</a> Open Source Organization</h3>
                <hr className="hrUnderline" />
                <ul>
                    <AnchorList
                        list={[
                            'AlgoHeist',
                            'DSKaKhel',
                            'HacktoberFest21Community',
                            'HacktoberFest21',
                            'And many more...'
                        ]}
                        links={[
                            'https://github.com/TECHOUS/AlgoHeist',
                            'https://github.com/TECHOUS/DSKaKhel',
                            'https://github.com/TECHOUS/HacktoberFest21Community',
                            'https://github.com/TECHOUS/HacktoberFest21',
                            'https://github.com/TECHOUS'
                        ]}
                    />
                </ul>
            </div>
            <Disclaimer />
        </div>
    );
};

export default Participate;
