import React, { Component } from "react";
import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3/";
const KEY = "4fbdbd8abdbcde78896e194e86813212";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BaseURL}movie/527774/reviews?api_key=${KEY}`
    );
    const reviewsRes = response.data.results;
    console.log(reviewsRes);

    this.setState({ reviews: reviewsRes });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>Review: {content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
