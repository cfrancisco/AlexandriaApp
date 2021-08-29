import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './style';

const sideBar = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      Temas:
      <Menu id='simple-menu' keepMounted>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default sideBar;
