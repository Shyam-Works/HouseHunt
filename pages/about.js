// about.js

import React from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import ListingDetails from '@/components/Listingdetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  
  const listingId = 1206363;


  const res = await fetch(`https://web-422-ass1.vercel.app/api/listings/${listingId}`);
  const data = await res.json();

  return {
    props: {
      listing: data,
    },
  };
}

const About = ({ listing }) => {
  return (
    <>
      
      <PageHeader text="About the Developer - Shyam Patel" />
      <Card className="bg-light">
        <Card.Body>
          <p>
            Hello, I am Shyam Patel, a passionate Seneca student and web developer with an interest in make web app by next.js and bootstrap. Moreover, I am tutor at studentScholars Markham and teach students web design, python, 3d printing, scratch between grade 1-10 and sales associate at 7 Eleven.
          </p>
          <p>
            My vision is to make web app which is user friendly and can useful to everyone and showcase my skill of web development with frontend and backend. Moreover, By this project and web app I have learned so many things and make my coding process more faster and think in various different way.
          </p>
          <p>Click here for My <a href='https://www.linkedin.com/in/shyam-patel-2b47a7297/'>linkedIn profile</a> </p>
          
        </Card.Body>
      </Card>
      <br />

      <Card className="bg-light">
        <Card.Body>
        <p>
            One of the places that I would like to visit is the:{" "}
            <a href="/listing/1206363" target="_blank" rel="noopener noreferrer">
              “Eco Hale Hawaii in the Rainforest Lots Of Aloha” Bed & Breakfast (Airbnb)
            </a>.
          </p>
          
        </Card.Body>

        <ListingDetails listing={listing} />
      </Card>
    </>
  );
};

export default About;
