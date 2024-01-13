
import Header from '../../components/Header';
import PlacesNearby from '../../components/PlacesNearby/PlacesNearby';
import Property from '../../components/Property';
import { mockPlaces } from '../../mock';

function PageProperty(): JSX.Element {

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property place={mockPlaces[0]}/>
        <PlacesNearby places={mockPlaces.slice(0,3)} />
      </main>
    </div>
  );
}

export default PageProperty;
