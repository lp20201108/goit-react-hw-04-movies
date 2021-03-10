import { Link, withRouter } from "react-router-dom";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
