import React from "react";
import css from "./SearchLastRequests.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  clearLastSearchRequests,
  removeLastSearchRequest,
  selectLastSearchRequests,
} from "../../../redux/additional/slice";
import { nanoid } from "nanoid";
import sprite from "../../../assets/icons/sprite.svg";

interface Props {
  handleSearchQueryChange: (query: string) => void;
}

const SearchLastRequests: React.FC<Props> = ({ handleSearchQueryChange }) => {
  const lastRequests = useAppSelector(selectLastSearchRequests);
  const dispatch = useAppDispatch();
  const handleDeleteAll = (): void => {
    dispatch(clearLastSearchRequests());
  };
  const handleDeleteRequest = (request: string) => {
    dispatch(removeLastSearchRequest(request));
  };

  return (
    lastRequests &&
    Array.isArray(lastRequests) &&
    lastRequests.length > 0 && (
      <div className={css.searchLastRequests}>
        <div className={css.searchLastRequestsHeader}>
          <h3 className={css.title}>Остінні</h3>
          <button className={css.removeAllBtn} onClick={handleDeleteAll}>
            Видалити все
          </button>
        </div>
        {
          <ul className={css.lastRequestsList}>
            {lastRequests.slice(0, 3).map((request) => {
              return (
                <li className={css.lastRequestsItem} key={nanoid()}>
                  <div
                    className={css.request}
                    role="button"
                    onClick={() => handleSearchQueryChange(request)}
                  >
                    <svg className={css.clockIcon} width="16" height="16">
                      <use href={`${sprite}#clock`}></use>
                    </svg>
                    <p className={css.requestText}> {request}</p>
                  </div>
                  <button
                    className={css.deleteBtn}
                    onClick={() => handleDeleteRequest(request)}
                    aria-label="delete request"
                  >
                    <svg
                      className={css.removeRequestIcon}
                      width="16"
                      height="16"
                    >
                      <use href={`${sprite}#close`}></use>
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        }
      </div>
    )
  );
};

export default SearchLastRequests;
