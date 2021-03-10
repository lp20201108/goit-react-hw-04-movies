import { Link, withRouter } from "react-router-dom";
import noImageAvailable from "../../components/images/noImageAvailable.jpg";
import styles from "./MovieListStyled.module.css";

const MoviesList = ({ movies, location }) => {
  console.log(movies);
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, poster_path, title, name, vote_average }) => (
        <li key={id} className={styles.movieListItem}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={styles.movieListImage}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : noImageAvailable
              }
              alt={title}
            />
            <span className={styles.titleContainer}>
              <p className={styles.movieTitle}> {title || name}</p>
              <p className={styles.movieRanking}>{vote_average}</p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
