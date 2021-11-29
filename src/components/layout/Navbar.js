import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//The parameters icon and title for the function are there because the component has an icon and title props
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/*props are similar to parameters passed into a function but for JSX components */}
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

//The defaultProps is for providing default values for the props of the Navbar component
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
//The propTypes is adding constraints to what can be passed into the props and if a prop is required or not
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
