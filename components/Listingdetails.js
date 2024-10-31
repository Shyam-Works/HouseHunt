import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ListingDetails = ({ listing }) => {
  return (
    <Container>
      <Row>
        
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null; 
              event.target.src = "https://fellowshiphomeloans.com/wp-content/uploads/2023/03/no-photo-available-image.jpg";
            }}
            className="img-fluid w-100" 
            src={listing.images.picture_url || "https://fellowshiphomeloans.com/wp-content/uploads/2023/03/no-photo-available-image.jpg"} 
            alt="Listing Image"
          />
          <br /><br />
        </Col>

        
        <Col lg>
          <p>
            {listing.neighborhood_overview || 'No neighborhood overview available.'}
            <br /><br />
            <strong>Price:</strong> ${listing.price.toFixed(2)}<br />
            <strong>Room:</strong> {listing.room_type}<br />
            <strong>Bed:</strong> {listing.bed_type} ({listing.beds})<br /><br />
            <strong>Rating:</strong> {listing.review_scores?.review_scores_rating}/100 ({listing.number_of_reviews} Reviews)<br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
