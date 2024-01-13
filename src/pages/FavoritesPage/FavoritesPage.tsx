
import Favorites from '../../components/Favorites';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function PageMain(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PageMain;
