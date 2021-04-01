import React, {useState, Fragment} from 'react';
import {buildFeedbackPath, extractFeedback} from "../api/feedback/index";

const Index = (props) => {
    const [feedback, setFeedback] = useState(null)
    const loadFeedbackHandler = (id) => {
        fetch(`/api/feedback/${id}`).then(res => res.json())
            .then(data => setFeedback(data.data))
    }
    return (
        <Fragment>
            {feedback && <p>{feedback.email}</p>}
            <ul>
                {props.feedbackItem.map(item =>
                    <li key={item.id}> {item.message}
                        <button onClick={() => loadFeedbackHandler(item.id)}>Show Feedback</button>
                    </li>)}

            </ul>
        </Fragment>

    );
};

export async function getStaticProps() {
    const path = buildFeedbackPath();
    const data = extractFeedback(path);

    return {
        props: {
            feedbackItem: data
        }
    }
}

export default Index;
