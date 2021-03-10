import styles from "./ReviewsStyled.module.css";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul className={styles.reviewsList}>
          {reviews.map(({ author, content, id }) => (
            <li className={styles.reviewsListItem} key={id}>
              <h3>
                Author: <span className={styles.reviewsAuthor}>{author} </span>
              </h3>
              <p className={styles.reviews}> {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.reviewsError}>No reviews availables</h2>
      )}
    </>
  );
};

export default Reviews;
