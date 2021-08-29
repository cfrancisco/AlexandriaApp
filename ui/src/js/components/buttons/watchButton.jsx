import React from "react";
import PropTypes from "prop-types";
import useStyles from './style';

const WatchButton = ({ value }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bg}>
        <span className={classes.textTitle}>
          {value}
        </span>
      </div>
    </>
  );
}

WatchButton.propTypes = {
  value: PropTypes.string.isRequired,
}


export default WatchButton;
