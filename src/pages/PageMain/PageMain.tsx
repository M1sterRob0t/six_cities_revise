
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { getCurrentOffers } from '../../store/reducers/offers-reducer/selectors';

function PageMain(): JSX.Element {
  const currentOffers = useSelector(getCurrentOffers);
  return (
    <div className={`page page--gray page--main ${currentOffers.length ? '' : 'page__main--index-empty'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default PageMain;
