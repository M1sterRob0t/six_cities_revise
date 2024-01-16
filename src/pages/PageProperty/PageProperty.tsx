import { ConnectedProps, connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';
import { AppRoute } from '../../utils/constants';

import type { TReview } from '../../types/review';
import type { TState } from '../../store/types/state';


const mapStateToProps = ({ offers, city }: TState) => ({
  offers,
  city,
});

interface IPageProperty {
  reviews: TReview[];
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IPageProperty;

function PageProperty({ offers, city, reviews }: ConnectedComponentProps): JSX.Element {
  const params = useParams<{id: 'id'}>();
  const offer = offers.find((item) => item.id === +params.id);

  if (!offer) {
    return <Redirect to={AppRoute.NotFound} />;
  }

  const placesNearby = offers.filter((item) => item.city.name === offer.city.name).slice(0, 3);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property place={offer} reviews={reviews} placesNearby={placesNearby} />
        <div className="container">
          <PlacesNearby places={placesNearby} />
        </div>
      </main>
    </div>
  );
}

export default connector(PageProperty);
