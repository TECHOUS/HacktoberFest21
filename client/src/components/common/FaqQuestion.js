import React, { useState } from 'react';

const FaqQuestion = (props) => {
    const [answer, setAnswer] = useState(false);

    const showAnswer = () => {
        if (answer) {
            return (
                <p>
                    <i className="fab fa-artstation"></i> {props.answer}
                </p>
            );
        }
    };
    const answerHandler = (event) => {
        setAnswer(!answer);
    };
    return (
        <div className="faqQuestion" onClick={answerHandler}>
            <span className="showIcon">
                <i
                    className={
                        answer ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
                    }
                ></i>
            </span>
            <p>
                <i className="fas fa-laptop-code"></i> {props.question}
            </p>
            {showAnswer()}
            <hr />
        </div>
    );
};

export default FaqQuestion;
