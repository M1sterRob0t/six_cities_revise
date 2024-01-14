
import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';
import { TPlace } from '../../types/place';

interface IPageProperty {
  offers: TPlace[];
}

function PageProperty({offers}: IPageProperty): JSX.Element {

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property place={offers[0]}/>
        <PlacesNearby places={offers.slice(0,3)} />
      </main>
    </div>
  );
}

export default PageProperty;
