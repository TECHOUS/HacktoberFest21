import React from 'react';
import '../styles/Faq.css';
import Disclaimer from '../common/Disclaimer';
import FaqList from '../common/FaqList';

const Faq = () => {
    return (
        <div className="sectionPage" id="faq">
            <div className="faqLogoDiv">
                <img src="hackfest21FAQ.svg" alt="faq logo" />
                {/*
                <div id="FAQlogo">
                    <i className="fab fa-foursquare fa-2x"></i>
                    <i className="fab fa-autoprefixer fa-2x"></i>
                    <i className="fab fa-quora fa-2x"></i>
                </div>*/}
            </div>
            <div className="questionsDiv">
                <FaqList
                    questions={[
                        'My pull request was labeled as invalid by a maintainer, why doesn’t it count?',
                        'Why is my pull request in a maturing state on my profile?',
                        'How do I get started?',
                        'How do I track my progress?',
                        'I completed four pull requests. When will I receive my T-shirt?',
                        'My draft pull requests don’t seem to be counting toward Hacktoberfest. What’s going on?',
                        'What happens if I complete fewer than four pull requests by the end of the month?',
                        'My PR was labeled as invalid, but it isn’t. What should I do?',
                        'My pull request is marked as being on an excluded repository. What does this mean?',
                        'Do I get a prize for participating?',
                        'How is DigitalOcean helping the environment?',
                        'As a maintainer, how should I handle spam pull requests?',
                        'What is open source?',
                        'How do I get stickers?',
                        'As a maintainer, how do I encourage contributions to my repos?',
                        'What is considered a valid pull request?',
                        'Can I receive a shirt and plant a tree?',
                        'What is Hacktoberfest?',
                        'What is a pull request?'
                    ]}
                    answers={[
                        'If a repository maintainer decides a pull request you made was spammy or an unhelpful contribution to the project, they can add an invalid or spam label to your PR. This lets us know they do not think your pull request is a quality contribution, so it will not count toward Hacktoberfest.',
                        'In an effort to reduce spam and help maintainers, we’ve introduced a one week review period for all pull requests. Once you have submitted an eligible pull request (ready for review, not draft), the seven-day review window begins. This period gives maintainers time to identify and label any spammy pull requests as invalid. If your pull request is not marked invalid during that window, it will contribute toward the four you need to complete the Hacktoberfest challenge. If during this period your pull request is labeled as invalid, you will need to submit another eligible pull request (or resolve the issue with the current pull request), at which point the review period will start again.',
                        'First, register at hacktoberfest.digitalocean.com. Then, submit at least four pull requests to any public GitHub repository. You can look for open issues labeled Hacktoberfest for inspiration. Quality contributions are encouraged! Are you maintaining a repo? Create issues or label existing ones with Hacktoberfest on your GitHub projects to help new contributors know what to work on. Tag any spam or irrelevant pull requests with the invalid label to disqualify them.',
                        'Log in with your GitHub account at hacktoberfest.digitalocean.com to check your progress and stats.',
                        'T-shirts (or the option to plant a tree) will be awarded on a first-come, first-serve basis to the first 70,000 participants who successfully complete the Hacktoberfest challenge. We’ll start sending out emails with more details on redeeming T-shirts throughout the month, so stay tuned.',
                        'For Hacktoberfest, pull requests on GitHub will not be counted until they are marked as ready for review: those marked as draft will not be counted. Please make sure to mark any draft pull requests as ready for review so that project maintainers can merge them.',
                        'Unfortunately, you will have to submit at least four pull requests to receive a prize.',
                        'If a maintainer labels your pull request as invalid or spam, but you don’t believe this is correct, please begin a conversation with the maintainer within the PR and explain your position.',
                        'Unfortunately, your pull request was made on a repository that doesn’t align with the core values of Hacktoberfest. We’ve decided that pull requests made to this repository will not count toward completing the challenge.',
                        'Aside from the knowledge you’ll gain (and the fun you’ll have), you’ll also receive a limited edition Hacktoberfest T-shirt for submitting 4 valid pull requests.',
                        'To limit our carbon impact, we are paying for carbon offsets. And to further help the environment, we’re offering the option to plant a tree rather than receive a shirt. Fun fact: Hacktoberfest shirts flew 336 million miles internationally last year. In total, it adds up to a fully loaded 747 flying 676 miles.',
                        'We dislike seeing spam pull requests just as much as you, so please give them an invalid or spam label and close them. Pull requests that contain a label with the word invalid or spam won’t be counted toward Hacktoberfest.',
                        'Open source refers to source code that is publicly accessible and allows anyone to inspect, modify or learn from it. Open source projects encourage collaboration and the freedom to use the software for any purpose you wish.',
                        'Stickers are included with your T-shirt, once you complete 4 pull requests.',
                        'Create issues for anything you’d like contributors to help with, making sure to give them a Hacktoberfest label so they’re easier to discover.You can also share issues or repositories on Twitter, using #Hacktoberfest. We’ll try to retweet as many as we can for contributors to see!',
                        'Review our quality standards and spam reduction tips on the Resources page for more information.',
                        'When completing four pull requests, you will have the option to choose either a Hacktoberfest shirt in white or blue, OR the option to donate a tree. You will not have the option to choose both swag options.However, if you want to plant a tree on your own, you can do so here: tree-nation.com/profile/digitalocean.',
                        'Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean.Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1 and October 31.',
                        'Pull requests are proposed code changes you can submit to a branch in a repository on GitHub. Once submitted, a project maintainer will review and discuss the changes before they become final.'
                    ]}
                />
            </div>
            <Disclaimer />
        </div>
    );
};

export default Faq;
