import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import React from 'react';
import { useState } from 'react';


const Posts = ({ documents }) => {

  const getSentimentPill = (sentiment) => {
    let variant = 'success';
    if (sentiment === 'negative') {
      variant = 'danger';
    } else if (sentiment === 'neutral') {
      variant = 'warning';
    }
    return (
      <Button variant={variant} size="sm" disabled>{sentiment}</Button>
    );
  }

  return (
    <div>
      {documents.map((document, index) => (
        <div key={index} className="post">
          <Card style={{ margin: "5px" }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>
                {getSentimentPill(document.sentiment)}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text style={{textAlign: "left"}}>{document.text == "NaN"? "" : document.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Posts;