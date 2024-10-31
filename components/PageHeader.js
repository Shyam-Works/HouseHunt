import React from 'react';
// card import from bootstrap
import Card from 'react-bootstrap/Card'; 


const PageHeader = ({text}) => {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default PageHeader;
