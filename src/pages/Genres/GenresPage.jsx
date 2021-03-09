import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import Genres from "../../components/Genres";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class GenresPage extends Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
    );

    const genresRes = response.data.genres;

    console.log(genresRes);
    this.setState({ genres: genresRes });
  }

  render() {
    const { match } = this.props;
    const { genres } = this.state;
    return (
      <>
        <h2>Genres page</h2>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              <NavLink to={`${match.url}/${genre.id}`}>{genre.name}</NavLink>
            </li>
          ))}
        </ul>
        <Route path={`${match.path}/:genreId`} component={Genres} />
      </>
    );
  }
}
