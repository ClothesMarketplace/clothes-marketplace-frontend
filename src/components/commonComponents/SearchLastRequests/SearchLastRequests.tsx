import React from "react";
import css from "./SearchLastRequests.module.css";
import { useAppSelector } from "../../../redux/store";
import { selectLastSearchRequests } from "../../../redux/additional/slice";
import { nanoid } from "nanoid";

const SearchLastRequests: React.FC = () => {
  const lastRequests = useAppSelector(selectLastSearchRequests);

  return (
    <div className={css.searchLastRequests}>
      <span>остінні </span>
      <span>видалити все</span>
      {lastRequests && Array.isArray(lastRequests) && (
        <ul>
          {lastRequests.slice(0, 3).map((request) => {
            return (
              <li key={nanoid()}>
                <span>{request}</span>
                <span className={css.deleteIcon}>X</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchLastRequests;
