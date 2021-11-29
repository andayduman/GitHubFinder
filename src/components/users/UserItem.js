import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//UserItem requires a user prop, and the user prop contains the necessary information
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          Link to Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  //a user object must be passed in
  user: PropTypes.object.isRequired,
};

export default UserItem;
