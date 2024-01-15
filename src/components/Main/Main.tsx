import Map from '../UI/Map';
import PlacesList from '../PlacesList';
import Sorting from '../Sorting';
import Tabs from '../Tabs';
import { TOffer } from '../../types/offers';
import { CITY as mockCity } from '../../mock/city';
import { POINTS as mockPoints } from '../../mock/points';

interface IMain {
  offers: TOffer[];
}

function Main({offers}: IMain): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <Sorting />
            <PlacesList places={offers}/>
          </section>
          <div className="cities__right-section">
            <Map city={mockCity} points={mockPoints} selectedPoint={mockPoints[0]}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
