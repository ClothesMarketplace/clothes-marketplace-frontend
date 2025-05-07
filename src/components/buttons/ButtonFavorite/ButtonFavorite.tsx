import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/favorites/operations";
import { selectFavorites } from "../../../redux/favorites/selectors";
import sprite from "../../../assets/icons/sprite.svg";

type ButtonFavoriteProps = {
  productId: string;
};

const ButtonFavorite = ({ productId }: ButtonFavoriteProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.includes(productId);

  const handleToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };

  return (
    <button onClick={handleToggle} aria-label="Toggle favorite">
      <svg
        width="24"
        height="24"
        fill={isFavorite ? "red" : "none"}
        stroke="currentColor"
      >
        <use href={`${sprite}#hart`} />
      </svg>
    </button>
  );
};

export default ButtonFavorite;
