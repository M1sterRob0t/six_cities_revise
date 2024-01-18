import { Redirect, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';

import { AppRoute } from '../../constants';
import { fetchOffer, fetchReviews, fetchOffersNearby } from '../../services/api-requests';

import type { TOffer } from '../../types/offers';
import type { TReview } from '../../types/review';


function PageProperty(): JSX.Element {
  const { id } = useParams<{ id: 'offerId' }>();
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [offersNearby, setOffersNearby] = useState<TOffer[]>([]);
  const [offer, setOffer] = useState<TOffer | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchOffer(id).then((result) => setOffer(result)).finally(() => setIsLoading(false));
    fetchOffersNearby(id).then((result) => setOffersNearby(result));
    fetchReviews(id).then((result) => setReviews(result));
  }, [id]);

  if(!isLoading && !offer) {
    return <Redirect to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Header />
      {isLoading || !offer ? (
        <Spinner />
      ) : (
        <main className="page__main page__main--property">
          <Property place={offer} reviews={reviews} placesNearby={offersNearby || []} />
          <div className="container">
            <PlacesNearby places={offersNearby || []} />
          </div>
        </main>
      )}
    </div>
  );
}

export default PageProperty;
