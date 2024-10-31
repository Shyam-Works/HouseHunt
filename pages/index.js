
/****************************************************************************
* I declare that this assignment is my own work in accordance with the Seneca Academic
* Policy. No part of this assignment has been copied manually or electronically from
* any other source (including web sites) or distributed to other students.
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Assignment: 2247 / 3
* Student Name: Shyam Patel
* Student Email: spatel695@myseneca.ca
* Course/Section: WEB422/ZAA
*
*****************************************************************************/


import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/Listingdetails';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  // Initialize state values
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://web-422-ass1.vercel.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function next() {
    setPage(page + 1);
  };
  const PageHeader = ({ children }) => {
    return <h4>{children}</h4>;
  };
  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <PageHeader>Browse Listings: Sorted by Number of Ratings</PageHeader>
      <Accordion defaultActiveKey="0">
        {pageData.map((listing, index) => (
          <Accordion.Item eventKey={listing._id} key={listing._id} >

            <Accordion.Header className="custom-accordion-header">
              <b>{listing.name}</b> - {listing.address.street}
            </Accordion.Header>
            
            <Accordion.Body style={{ backgroundColor: '#e0e1dd' }}>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
};

export default Home;