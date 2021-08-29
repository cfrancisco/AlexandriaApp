import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ReactLoading from 'react-loading';
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

      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.description}>
          Plot:
          {' '}
          <span>{description}</span>
        </Grid>
        <Grid className={classes.columnInfo} item xs={4}>
          Cast:
          {' '}
          <span>{cast}</span>
        </Grid>
        <Grid className={classes.columnInfo} item xs={4}>
          Genre:
          {' '}
          <span>{genre}</span>
        </Grid>
        <Grid className={classes.columnInfo} item xs={4}>
          Director:
          {' '}
          <span>{director}</span>
        </Grid>
      </Grid>

    </>
  );
};

Description.propTypes = {
  cast: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
}



const MovieDetails = ({ toggleFavorite, favorites, movie }) => {
  const classes = useStyles();
  if (!movie)
    return <ReactLoading />;

  return (
    <>
      <Grid item xs={12}>
        <span className={classes.minorInfos}>
          {' '}
          {movie.minutes}
        </span>
        <span className={classes.minorInfos}>
          {movie.year}
        </span>
      </Grid>
      <Grid item xs={6}>
        <TitleBox title={movie.Title} />
      </Grid>
      <Grid item xs={6}>
        <Poster poster={movie.Poster} title={movie.Title} />
      </Grid>
      <Grid item xs={6}>
        <ActionBar
          id={movie.imdbID}
          idmb={movie.imdbRating}
          isFavorite={favorites[movie.imdbID]}
          toggleFavorite={toggleFavorite} />
        <Description />
      </Grid>
    </>
  );
};



const ActionBar = ({ id, idmb, toggleFavorite, isFavorite }) => {
  const classes = useStyles();

  return (
    <>

      <div className={classes.idmb}>{idmb}</div>
      <WatchButton value={
        !isFavorite ? (
          <StarIcon
            onClick={() => toggleFavorite(id)}
            alt="favorite this movie"
            className={classes.isfavorite} />
        ) : (
          <StarIcon
            onClick={() => toggleFavorite(id)}
            alt="remove favorite"
            className={classes.notfavorite} />
        )
      } />
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
const MoviePage = ({ favorites, movies, dispatch }) => {
  const { movieId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    fetchMovie(movieId);
  }, []);

  const fetchMovie = (id) => {
    console.log('searchedid', id);
    return getMovieById(id).then((data) => {
      if (data) {
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
      <Link className={classes.link} to='/'>
        {' '}
        <KeyboardBackspaceIcon />
      </Link>
      <Grid container spacing={2}>
        <MovieDetails
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          movie={movies[0]} />
      </Grid>
    </>
  );
};



MoviePage.defaultProps = {
  favorites: {},
  movies: [],
}

MoviePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.shape({}),
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Poster: PropTypes.string,
      Title: PropTypes.string,
      imdbID: PropTypes.string,
      minutes: PropTypes.string,
      year: PropTypes.string,
    })),
}


const mapStateToProps = (state) => ({
  movies: [...state.movies],
  favorites: { ...state.favorite },
});

export default connect(mapStateToProps, null)(MoviePage);
