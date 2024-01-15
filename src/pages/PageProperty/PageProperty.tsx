
import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';
import { TOffer } from '../../types/offers';
import { TReview } from '../../types/review';

interface IPageProperty {
  offers: TOffer[];
  reviews: TReview[];
}

function PageProperty({offers, reviews}: IPageProperty): JSX.Element {
  const placesNearby = offers.slice(0,3);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property place={offers[0]} reviews={reviews} placesNearby={placesNearby} />
        <div className="container">
          <PlacesNearby places={placesNearby} />
        </div>
      </main>
    </div>
  );
}

export default PageProperty;
