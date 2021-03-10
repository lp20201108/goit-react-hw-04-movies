import React from "react";

const Cast = ({ cast }) => {
  return (
    <>
      <ul>
        {cast.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
