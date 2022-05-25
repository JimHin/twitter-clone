import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import moment from "moment";

function Card({ tweet }) {
    let dt = moment(tweet.createdAt).fromNow()
  return (
    <div className="card">
      <div>
        <img
          className="avatar"
          src={tweet.user.profilePicture}
          alt="profile_picture"
        />
      </div>
      <div className="content">
        <div className="tweet_text">
            <div className="nameDate">
                <h3>{tweet.user.username}</h3>
                <ul><li>{dt}</li></ul>
            </div>
            <div>
                <p>{tweet.body}</p>
            </div>
        </div>
        <div>{tweet.comments.length > 0 && <Comment comment={tweet.comments} />}</div>
      </div>
    </div>
  );
}
Card.propTypes = {
  tweet: PropTypes.array.isRequired,
};
export default Card;
