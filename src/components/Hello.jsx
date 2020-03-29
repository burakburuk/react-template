import React from "react";
import PropTypes from "prop-types";

const Hello = props => <div>{props.message}</div>;

Hello.propTypes = {
  message: PropTypes.string.isRequired
};

export default Hello;
