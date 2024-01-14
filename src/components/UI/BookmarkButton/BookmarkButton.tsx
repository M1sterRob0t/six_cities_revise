
interface IBookmarkButton {
  isFavorite?: boolean;
  className?: string;
}

function BookmarkButton({isFavorite = false, className = 'place-card'}: IBookmarkButton): JSX.Element {
  return(
    isFavorite ?
      (
        <button className={`${className}__bookmark-button ${className}__bookmark-button--active button`} type="button">
          <svg className={`${className}__bookmark-icon`} width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      ) : (
        <button className={`${className}__bookmark-button button`} type="button">
          <svg className={`${className}__bookmark-icon`} width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      )
  );
}

export default BookmarkButton;
