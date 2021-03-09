import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BaseURL}trending/all/day?api_key=${KEY}`
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    const { url } = this.props.match;
    const { movies } = this.state;
    return (
      <>
        <ul>
          <h2>Trending today</h2>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`${url}/${movie.id}`}>
                {movie.title || movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
