import { Link } from 'react-router-dom';

import { AppRoute } from '../../constants';

import ErrorImage from './image/sad-cat.png';
import './style.css';


function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        <img src={ErrorImage} width="50" height="50" style={{ marginRight: '10px' }} alt="cat" />
        404. Page not found...
      </h1>
      <p className="not-found__message-additional">
        <Link to={AppRoute.Main}>Go to Main Page</Link>
      </p>
    </div>
  );
}

export default NotFound;
