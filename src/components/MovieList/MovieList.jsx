import { NavLink, withRouter } from "react-router-dom";

const MoviesList = ({ movies, match }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`${match.url}/${movie.id}`}>
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
