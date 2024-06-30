import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Posts from './Posts';

function SearchBar() {

    const [text, setText] = useState('');

    // array to store the previously analyzed texts and their sentiment
    const [history, setHistory] = useState([]);

    // Function to send api request to the server to analyze the sentiment of the text
    const analyzeText = async (text) => {
        try {
            const response = await axios.post("https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest", { text }, {
                headers: { "Authorization" : "Bearer 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"}
            });
            // response data is an array of objects, each object contains the sentiment and the score
            // the sentiment is the one with the highest score 
            const sentimentScores = response.data;
            const sentiment = sentimentScores.reduce((prev, current) => (prev.score > current.score) ? prev : current);
            // add the text and its sentiment to the history array at the beginning
            setHistory([{ text, sentiment: sentiment.label }, ...history]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // Create a search bar using floating label and a search button to its right side
        // the user can also submit using the enter key

        <div>
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Text to analyze"
                    className="mb-3"
                    style={{ margin: '15px' }}
                    onChange={(e) => setText(e.target.value)}
                >
                    <Form.Control type="text" placeholder="I am happy!" />
                </FloatingLabel>
                <Button variant="primary" style={{ marginLeft: "5px" }} onClick={() => {{(text === "")?alert("Enter the text!"):analyzeText(text)}} }>Analyze</Button>
                {/* Display the previously analyzed texts and their sentiment. The history array will be reversed */}
                <Posts documents={history} style={{margin: "15px"}}/>
            </>
        </div>

    );
}

export default SearchBar;