import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useStyles from './style';

const AppHeader = ({ children }) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Link to="/">
        <div className={classes.titlePage}>Alexandria</div>
      </Link>
      <div className={classes.children}>{children}</div>
    </AppBar>
  );
};

AppHeader.defaultProps = {
  children: React.createElement('div'),
};

AppHeader.propTypes = {
  children: PropTypes.shape({}),
};

export default AppHeader;
