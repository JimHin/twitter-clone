import PropTypes from 'prop-types';
import moment from "moment";

function Comment({ comment }) {
  return comment.map((item) => {
    let dt = moment(item.createdAt).fromNow()
    return (
      <div key={item.id} className="commentaires">
        <div>
          <img
            src={item.user.profilePicture}
            alt="profile"
            className="avatar"
          />
        </div>
        <div className="commentBody">
            <div className="nameDate">
                <h3 className="usernameComment">{item.user.username}</h3>
                <ul><li>{dt}</li></ul>
            </div>
            <div>{item.body}</div>
        </div>
      </div>
    );
  });
}
Comment.propTypes = {
  comment: PropTypes.array.isRequired,
};
export default Comment;
