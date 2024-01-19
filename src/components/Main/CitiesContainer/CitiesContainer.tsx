import { TOffer } from '../../../types/offers';
import NoPlaces from '../../NoPlaces';
import Spinner from '../../Spinner';

interface ICities {
  children: JSX.Element;
  isDataLoadding: boolean;
  currentOffers: TOffer[];
}

function CitiesContainer({ children, currentOffers, isDataLoadding }: ICities): JSX.Element {

  if (isDataLoadding) {
    return <Spinner />;
  }

  if (!currentOffers.length) {
    return <NoPlaces />;
  }

  return children;
}

export default CitiesContainer;
