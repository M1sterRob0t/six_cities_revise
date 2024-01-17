import { Link } from 'react-router-dom';

import './style.css';

import ErrorImage from './image/sad-cat.png';
import { AppRoute } from '../../constants';

function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        <img src={ErrorImage} width="50" height="50" style={{ marginRight: '10px' }} alt="cat" />
        404. Page not found...
      </h1>
      <p className="not-found__message-additional">
        Go to <Link to={AppRoute.Main}>Main Page</Link>
      </p>
    </div>
  );
}

export default NotFound;
