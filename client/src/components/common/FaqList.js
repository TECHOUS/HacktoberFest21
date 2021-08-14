import React from 'react';
import FaqQuestion from './FaqQuestion';

const FaqList = (props) => {
    return props.questions.map((question, index) => (
        <FaqQuestion key={question} question={question} answer={props.answers[index]} />
    ));
};

export default FaqList;
