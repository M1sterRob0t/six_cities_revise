import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageFavorites from '../../pages/PageFavorites';
import PageProperty from '../../pages/PageProperty';
import PageLogin from '../../pages/PageLogin';
import PageMain from '../../pages/PageMain/PageMain';
import NotFound from '../NotFound';
import { AppRoute } from '../../constants';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { TReview } from '../../types/review';


interface IApp {
  reviews: TReview[];
}

function App({reviews}: IApp): JSX.Element {
  const isAuthorized = true;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain />
        </Route>
        <Route path={AppRoute.Login} exact>
          <PageLogin />
        </Route>
        <Route path={AppRoute.Property} exact>
          <PageProperty reviews={reviews} />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} isAuthorized={isAuthorized} exact render={() => (
          <PageFavorites />
        )}
        />
        <Route path={AppRoute.NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
