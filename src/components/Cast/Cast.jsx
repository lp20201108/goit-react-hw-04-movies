import React from "react";
import profileDefault from "../images/profileDefault.png";
import styles from "./CastStyled.module.css";

const Cast = ({ cast }) => {
  return (
    <>
      {cast.length ? (
        <ul className={styles.castList}>
          {cast.map(({ name, profile_path, character, id }) => (
            <li key={id} className={styles.castListItem}>
              {
                <img
                  className={styles.castImage}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : profileDefault
                  }
                  alt={name}
                />
              }
              <h3 className={styles.castName}>{name}</h3>
              <p className={styles.castCharacter}>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.castError}>
          There is no available information about the cast crew.
        </h2>
      )}
    </>
  );
};

export default Cast;
