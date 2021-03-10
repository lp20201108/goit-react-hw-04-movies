import noImageAvailable from "../images/noImageAvailable.jpg";

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
    <div>
      <h1> Movie: {title}</h1>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : noImageAvailable
        }
        alt={title}
      />
      <ul>
        <li> Release date: {release_date}</li>
        <li>Popularity: {popularity}</li>
        <li>Vote average: {vote_average}</li>
      </ul>
      <h3>Genres</h3>
      {genres &&
        genres.map((genre) => <span key={genre.id}> {genre.name} </span>)}
      <h2>Overview</h2>
      <p> {overview ? overview : "No description available"}</p>
    </div>
  );
};

export default MovieCard;
