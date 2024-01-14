
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

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property place={offers[0]} reviews={reviews} />
        <div className="container">
          <PlacesNearby places={offers.slice(0,3)} />
        </div>
      </main>
    </div>
  );
}

export default PageProperty;
