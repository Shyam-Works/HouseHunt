
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/Listingdetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

const ListingById = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // Get the id parameter from the route
  const router = useRouter();
  const { id }= router.query;

  // Use SWR to fetch listing from the Listings API
  const { data: listing, error, isLoading } = useSWR(
    id ? `https://web-422-ass1.vercel.app/api/listings/${id}` : null,
    fetcher
  );


  
  if (isLoading) {
    return null;
  }


  if (error || !listing) {
    return <Error statusCode={404} />;
  }

  // Render component UI
  return (
    <div>
      <PageHeader>
        <h1>{listing.name}</h1></PageHeader>
      <ListingDetails listing={listing} />
    </div>
    
  );
};

export default ListingById;