import React, { Component } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import { fetchTrending } from "../../services/fetchApi";
import styles from "./HomePageStyled.module.css";

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
      <div className={styles.movieContainer}>
        <MoviesList movies={movies} />
      </div>
    );
  }
}
