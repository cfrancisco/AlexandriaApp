import PropTypes from 'prop-types';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import useStyles from './style';

const SearchBar = ({ value, onChange, onClick }) => {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <IconButton className={classes.iconButton} aria-label='movies'>
        <MovieFilterIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder='Search ...'
        inputProps={{ 'aria-label': 'search your next movie' }}
      />

      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchBar.defaultProps = {
  value: '',
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchBar;
