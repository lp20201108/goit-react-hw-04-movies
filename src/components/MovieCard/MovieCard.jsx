import noImageAvailable from "../images/noImageAvailable.jpg";
import styles from "./MovieCardStyled.module.css";

const MovieCard = ({
  title,
  poster_path,
  release_date,
  popularity,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div className={styles.movieCardContainer}>
      <img
        className={styles.moviePoster}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : noImageAvailable
        }
        alt={title}
      />
      <h1 className={styles.title}> Movie: {title}</h1>
      <ul className={styles.movieCardList}>
        <li className={styles.movieCardListItem}>
          Release date: {release_date}
        </li>
        <li>Popularity: {popularity}</li>
        <li>Vote average: {vote_average}</li>
      </ul>
      <h3 className={styles.genres}>Genres</h3>
      {genres &&
        genres.map((genre) => (
          <span className={styles.movieGenres} key={genre.id}>
            {genre.name}
          </span>
        ))}
      <h2 className={styles.overview}>Overview</h2>
      <p className={styles.overview}>
        {overview ? overview : "No description available"}
      </p>
    </div>
  );
};

export default MovieCard;
