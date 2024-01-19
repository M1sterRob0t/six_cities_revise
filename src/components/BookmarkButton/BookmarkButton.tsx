import { useState } from 'react';

import { postToFavorites } from '../../services/api-requests';

interface IBookmarkButton {
  isFavorite?: boolean;
  className?: string;
  id: number;
  onToggleFavorite?: () => void;
}

function BookmarkButton({
  isFavorite = false,
  className = 'place-card',
  id,
  onToggleFavorite,
}: IBookmarkButton): JSX.Element {
  const [isFavoriteUpdated, setFavoriteStatus] = useState<1 | 0>(isFavorite ? 1 : 0);

  function onFavoriteClick() {
    const newFavoriteStatus = isFavoriteUpdated ? 0 : 1;
    postToFavorites(id, newFavoriteStatus).then((result) => {
      setFavoriteStatus(result.isFavorite ? 1 : 0);

      if (onToggleFavorite) {
        onToggleFavorite();
      }
    });
  }

  return (
    <button
      className={`${className}__bookmark-button ${className}__bookmark-button${isFavoriteUpdated ? '--active' : ''} button`}
      type="button"
      onClick={onFavoriteClick}
    >
      <svg className={`${className}__bookmark-icon`} width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      {isFavorite ? (
        <span className="visually-hidden">In bookmarks</span>
      ) : (
        <span className="visually-hidden">To bookmarks</span>
      )}
    </button>
  );
}

export default BookmarkButton;
