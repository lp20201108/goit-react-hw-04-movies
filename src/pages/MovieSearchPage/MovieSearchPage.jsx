import React, { Component } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/fetchApi";
import styles from "./MovieSearch.module.css";

export default class MovieSearchPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      const { query } = Object.fromEntries(
        new URL(window.location).searchParams.entries()
      );
      searchMovies(query).then((movies) => this.setState({ movies }));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      searchMovies(this.state.query).then((movies) =>
        this.setState({ movies })
      );
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${this.state.query}`,
    });
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
      <div className={styles.searchContainer}>
        <form className={styles.submitForm} onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={this.onHandleChange}
          />

          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </form>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
