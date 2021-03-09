import axios from "axios";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";
import routes from "../../routes";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class MovieDetailsPage extends Component {
  state = {
    title: "",
    poster_path: "",
    release_date: "",
    popularity: "",
    vote_average: "",
    overview: "",
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BaseURL}movie/${movieId}?api_key=${KEY}`
    );

    // console.log(response.data);

    this.setState({ ...response.data });

    console.log(this.props.match.url);
  }

  render() {
    const { movieId } = this.props.match.params;
    const {
      title,
      poster_path,
      release_date,
      popularity,
      vote_average,
      overview,
      genres,
    } = this.state;

    const { url } = this.props.match;
    return (
      <>
        <h1> Movie: {title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <ul>
          <li> Release date: {release_date}</li>
          <li>Popularity: {popularity}</li>
          <li>Vote average: {vote_average}</li>
        </ul>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => (
            <li>{genre.id}</li>
          ))}
        </ul>
        <h2>Overview</h2>
        <p>{overview}</p>

        <h3>More information</h3>
        <p>
          <NavLink to={`${url}/cast`}>Cast crew</NavLink>
        </p>

        <p>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </p>
        <Route path={`${routes.movieDetails}/cast`} component={Cast} />
        <Route path={`${routes.movieDetails}/reviews`} component={Reviews} />
      </>
    );
  }
}
nm;
