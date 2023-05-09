import PropTypes from "prop-types";
import css from "./Card.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import { formatQuantity } from "utils/utils";
import { useUpdateUserMutation } from "redux/usersSlice";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";

const Card = ({ user }) => {
  const [updateUser] = useUpdateUserMutation();
  const location = useLocation();

  const clickHandler = () => {
    if (user.following) {
      changeFollowers(user.followers - 1, false);
      toast.success(`You unsubscribed from ${user.name}`);
    } else {
      changeFollowers(user.followers + 1, true);
      toast.success(`You follow ${user.name}`);
    }
  };

  const changeFollowers = async (number, state) => {
    try {
      await updateUser({
        followers: number,
        id: user.id,
        following: state,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.Container}>
      <Link to={"/tweets"} state={{ from: location, name: user.name }}>
        <div className={css.Card}>
          <svg aria-label="company logo" className={css.Logo}>
            <Logo />
          </svg>
          <img
            src={user.avatar ? user.avatar : defaultAvatar}
            alt="user's avatar"
            className={css.Avatar}
          ></img>
          <p className={css.TweetsAmount}>{user.tweets} TWEETS</p>
          <p className={css.FollowersAmount}>
            {formatQuantity(user.followers)} FOLLOWERS
          </p>
        </div>
      </Link>
      <button
        className={user.following ? `${css.activeButton}` : `${css.Button}`}
        onClick={() => clickHandler()}
      >
        <span className={css.BtnText}>
          {user.following ? "FOLLOWING" : "FOLLOW"}
        </span>
      </button>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Card;
