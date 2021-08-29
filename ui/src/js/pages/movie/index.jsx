import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';

import useStyles from './style';
import { getMovieById } from '../../api/movies';
import WatchButton from '../../components/buttons/watchButton';

const TitleBox = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.titleBox}>{title}</div>;
};

TitleBox.propTypes = {
  title: PropTypes.string.isRequired,
}

const Poster = ({ poster, title }) => {
  const classes = useStyles();
  return (
    <img
      src={poster}
      className={classes.poster}
      title={title}
      alt={title}
      crossOrigin='true'
      referrerPolicy='unsafe-url'
    />
  );
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}


const Description = ({ cast, description, genre, director }) => {
  const classes = useStyles();
  return (
    <>
      <WatchButton value="asdasd" />

      <div className={classes.description}>
        Plot:
        {' '}
        <span>{description}</span>
      </div>
      <div className={classes.columnInfo}>
        Cast:
        {' '}
        <span>{cast}</span>
      </div>
      <div className={classes.columnInfo}>
        Genre:
        {' '}
        <span>{genre}</span>
      </div>
      <div className={classes.columnInfo}>
        Director:
        {' '}
        <span>{director}</span>
      </div>
    </>
  );
};

Description.propTypes = {
  cast: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
}


const ActionBar = ({ id, idmb, toggleFavorite, isFavorite }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.idmb}>{idmb}</div>
      {!isFavorite ? (
        <StarIcon
          onClick={() => toggleFavorite(id)}
          alt="favorite this movie"
          className={classes.isfavorite} />
      ) : (
        <StarIcon
          onClick={() => toggleFavorite(id)}
          alt="remove favorite"
          className={classes.notfavorite} />
      )}
    </>
  );
};

ActionBar.propTypes = {
  id: PropTypes.string.isRequired,
  idmb: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}



// We can use the `useParams` hook here to access
// the dynamic pieces of the URL.
const MoviePage = ({ favorites, movie, dispatch }) => {

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie({ id: movieId });
  }, []);

  const fetchMovie = (id) => {
    console.log('searchedid', id);
    return getMovieById(id).then((data) => {
      // dispatch
      console.log('Coments', data);
      if (data) {
        // add favorites in data
        dispatch({
          type: 'GET_MOVIE',
          data,
        });
      }
      else {
        dispatch({
          type: 'GET_MOVIE',
          data: [],
        });
      }
    });
  };

  const toggleFavorite = (id) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      id,
    })
  };


  return (
    <>
      <Link to='/'>
        {' '}
        <KeyboardBackspaceIcon />
      </Link>
      {movie.minutes}
      {movie.year}
      <TitleBox title={movie.Title} />
      <ActionBar
        id={movieId}
        idmb={movie.imdbID}
        isFavorite={favorites[movie.imdbID]}
        toggleFavorite={toggleFavorite} />
      <Description />
      <Poster poster={movie.Poster} title={movie.Title} />
    </>
  );
};



MoviePage.defaultProps = {
  favorites: {},
  movie: {},
}

MoviePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.shape({}),
  movie: PropTypes.shape({}),
}


const mapStateToProps = (state) => ({
  movie: { ...state.movies[0] },
  favorites: { ...state.favorite },
});

export default connect(mapStateToProps, null)(MoviePage);
