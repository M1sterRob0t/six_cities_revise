import { ConnectedProps, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { useEffect } from 'react';

import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';

import type { TReview } from '../../types/review';
import type { TState } from '../../store/types/state';
import type { TActions } from '../../store/types/actions';

import { fetchOfferAction } from '../../services/api-actions';

import Spinner from '../../components/Spinner';

const mapStateToProps = ({ offer, city, isDataLoading }: TState) => ({
  offer,
  city,
  isDataLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<TActions>) =>
  bindActionCreators(
    {
      onOfferLoad: fetchOfferAction,
    },
    dispatch
  );

interface IPageProperty {
  reviews: TReview[];
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IPageProperty;

function PageProperty({
  offer,
  city,
  isDataLoading,
  reviews,
  onOfferLoad,
}: ConnectedComponentProps): JSX.Element {
  const { id } = useParams<{ id: 'offerId' }>();

  useEffect(() => {
    onOfferLoad(id);
  }, [onOfferLoad, id]);

  return (
    <div className="page">
      <Header />
      {isDataLoading || !offer ? (
        <Spinner />
      ) : (
        <main className="page__main page__main--property">
          <Property place={offer} reviews={reviews} placesNearby={[]} />
          <div className="container">
            <PlacesNearby places={[]} />
          </div>
        </main>
      )}
    </div>
  );
}

export default connector(PageProperty);
