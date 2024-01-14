
import Favorites from '../../components/Favorites';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { TPlace } from '../../types/place';

interface IPageFavorites {
  offers: TPlace[];
}

function PageFavorites({offers}: IPageFavorites): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites offers={offers} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PageFavorites;
