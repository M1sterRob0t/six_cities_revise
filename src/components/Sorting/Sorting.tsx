import { memo, useState } from 'react';

import { SortType } from '../../constants';


const sortTypes = Object.values(SortType);

interface ISorting {
  currentSortType: SortType;
  onSortTypeChange: (newSortType: SortType) => void;
}

function Sorting({ currentSortType, onSortTypeChange }: ISorting): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  function onClick() {
    setIsOpened((prev) => !prev);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {sortTypes.map((sortType) => (
          <li
            className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={sortType}
            onClick={() => {
              setIsOpened((prev) => !prev);
              onSortTypeChange(sortType);
            }}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default memo(Sorting);
