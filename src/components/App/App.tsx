import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageFavorites from '../../pages/PageFavorites';
import PageProperty from '../../pages/PageProperty';
import PageLogin from '../../pages/PageLogin';
import PageMain from '../../pages/PageMain/PageMain';
import NotFound from '../NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import { AppRoute } from '../../constants';


function App(): JSX.Element {
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
          <PageProperty />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact render={() => (
          <PageFavorites />
        )}
        />
        <Route path={AppRoute.NotFound}>
          <NotFound />
        </Route>
      </Switch>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
