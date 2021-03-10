import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>Review: {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No reviews availables</h2>
      )}
    </>
  );
};

export default Reviews;
