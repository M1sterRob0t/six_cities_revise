
import Header from '../../components/Header';
import Main from '../../components/Main';
import { TPlace } from '../../types/place';

interface IPageMain {
  offers: TPlace[];
}

function PageMain({offers}: IPageMain): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main offers={offers} />
    </div>
  );
}

export default PageMain;
