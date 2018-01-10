import React, { PropTypes } from 'react';

const Alert = (props) => (
  <div className={`alert alert-${props.type}`}>
    <span
      className="close"
      onClick={() => { props.dismissMessage(); }}
    >&times;</span>
    {props.message}
  </div>
);

export default Alert;

Alert.propTypes = {
  message: PropTypes.text,
  type: PropTypes.text,
  dismissMessage: PropTypes.func,
};
