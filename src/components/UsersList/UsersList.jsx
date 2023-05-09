import PropTypes from "prop-types";
import React from "react";
import css from "./UsersList.module.css";

import Card from "components/Card/Card";

const UsersList = ({ users }) => {
  return (
    <div className={css.Container}>
      <ul className={css.List}>
        {users.map((user) => (
          <li key={user.id} className={css.User}>
            <Card user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
