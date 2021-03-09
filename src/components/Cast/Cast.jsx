import React, { Component } from "react";
import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    // const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BaseURL}movie/527774/credits?api_key=${KEY}`
    );
    const cast = response.data.cast;
    console.log(cast);

    this.setState({ cast: cast });
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map(({ name, profile_path, character, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt=""
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
