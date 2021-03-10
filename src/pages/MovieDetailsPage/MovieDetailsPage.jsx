import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../../components/Cast";
import MovieCard from "../../components/MovieCard/MovieCard";
import Reviews from "../../components/Reviews";
import routes from "../../routes";
import { fetchData } from "../../services/fetchApi";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchData(movieId).then(([movie, cast, reviews]) => {
      this.setState({ movie, cast, reviews });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movie, cast, reviews } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MovieCard {...movie} />

        <h3>More information</h3>
        <p>
          <NavLink
            exact
            to={{
              pathname: `${url}/cast`,
              state: {
                from: this.props.location?.state?.from,
              },
            }}
          >
            Cast crew
          </NavLink>
        </p>
        <p>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: this.props.location?.state?.from,
              },
            }}
          >
            Reviews
          </NavLink>
        </p>
        <Switch>
          <Route path={`${path}/cast`} render={() => <Cast cast={cast} />} />
          <Route
            path={`${path}/reviews`}
            render={() => <Reviews reviews={reviews} />}
          />
        </Switch>
      </>
    );
  }
}
