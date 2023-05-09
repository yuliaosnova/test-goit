import PropTypes from "prop-types";
import { TWEETS } from "images/tweets";
import textTweets from "../../../src/assets/tweets.json";
import css from "../TweetsGallery/TweetsGallery.module.css";

const TweetsGallary = ({ name }) => {
  return (
    <div className={css.Container}>
      {name ? (
        <div>
          <h2 className={css.Title}>Posted by {name}</h2>
          <ul>
            {textTweets.map((tweet) => (
              <li className={css.Item} key={tweet.id}>
                <p>{tweet.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className={css.Title}>Popular posts</h2>
          <ul>
            {TWEETS.map((tweet) => (
              <li className={css.Item} key={tweet.id}>
                <img src={tweet.pic} alt="random tweet"></img>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

TweetsGallary.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TweetsGallary;
