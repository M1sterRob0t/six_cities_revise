
import Header from '../../components/Header';
import Main from '../../components/Main';
import { TOffer } from '../../types/offers';

interface IPageMain {
  offers: TOffer[];
}

function PageMain({offers}: IPageMain): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main />
    </div>
  );
}

export default PageMain;
