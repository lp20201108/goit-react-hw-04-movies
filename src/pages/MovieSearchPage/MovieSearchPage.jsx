import React, { Component } from "react";
import axios from "axios";

import MoviesList from "../../components/MovieList/MovieList";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class MovieSearchPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BaseURL}search/movie?api_key=${KEY}&page=1&query=avatar`
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.query);
    // this.props.onSubmit(this.state.query);
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={this.onHandleChange}
          />

          <button type="submit">Search</button>
        </form>

        <MoviesList movies={movies} />
      </>
    );
  }
}
