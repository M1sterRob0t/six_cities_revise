import { TCityName } from '../../types/map';

interface ITabs {
  cities: Array<TCityName>; // или (keyof typeof City) []
  currentCity: TCityName;
  onChange: (newCity: TCityName) => void;
}

function Tabs({ currentCity, cities, onChange }: ITabs): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
                onClick={() => onChange(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
