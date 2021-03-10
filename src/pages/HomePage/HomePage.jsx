import React, { Component } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import { fetchTrending } from "../../services/fetchApi";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrending().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <MoviesList movies={movies} />
      </>
    );
  }
}
