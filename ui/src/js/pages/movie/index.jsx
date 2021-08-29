
import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';

import Grid from '@material-ui/core/Grid';
import ReactLoading from 'react-loading';
import useStyles from './style';
import { getMovieById } from '../../api/movies';


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


const Description = ({ actors, description, language, director }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.description}>
          <span>
            <br />
            {description}
          </span>
        </Grid>
        <Grid item xs={4}>
          Actors:&nbsp;
          {' '}
          <span className={classes.columnInfo}>{actors}</span>
        </Grid>
        <Grid item xs={4}>
          Language:&nbsp;
          {' '}
          <span className={classes.columnInfo}>{language}</span>
        </Grid>
        <Grid item xs={4}>
          Director:&nbsp;
          {' '}
          <span className={classes.columnInfo}>{director}</span>
        </Grid>
      </Grid>

    </>
  );
};

Description.propTypes = {
  actors: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
}



const MovieDetails = ({ toggleFavorite, favorites, movie }) => {
  const classes = useStyles();
  if (!movie)
    return <ReactLoading className={classes.loading} />;
  return (
    <>
      <Grid item xs={12}>
        <span className={classes.minorInfos}>
          {' '}
          {movie.Country}
        </span>
        <span className={classes.minorInfos}>
          {movie.Year}
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
          genre={movie.Genre}
          isFavorite={favorites[movie.imdbID]}
          toggleFavorite={toggleFavorite} />
        <Description
          director={movie.Director}
          description={movie.Plot}
          language={movie.Language}
          actors={movie.Actors} />
      </Grid>
    </>
  );
};


const ActionBar = ({ genre, id, idmb, toggleFavorite, isFavorite }) => {
  const classes = useStyles();

  return (
    <div className={classes.idmb}>
      <Chip className={classes.chipRating} label={idmb} variant="outlined" />
      <Chip label={genre} variant="outlined" />
      <Chip
        className={classes.chip}
        variant="outlined"
        label="Favorite"
        onClick={() => toggleFavorite(id)}
        icon={!isFavorite ? (
          <StarIcon
            alt="favorite this movie"
            className={classes.isfavorite} />
        ) : (
          <StarIcon
            alt="remove favorite"
            className={classes.notfavorite} />
        )
        } />
    </div>
  );
};

ActionBar.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
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
    console.log("toggleFavorite", id);
    dispatch({
      type: 'TOGGLE_FAVORITE',
      movieId: id,
    })
  };

  return (
    <>
      <Link className={classes.link} to='/'>
        {' '}
        <KeyboardBackspaceIcon />
      </Link>

      <div className={classes.page}>
        <Grid container spacing={2}>
          <Grid item lg={1} md={1} sm={0} />
          <Grid item lg={11} md={11} sm={12}>
            <MovieDetails
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              movie={movies[0]} />
          </Grid>

        </Grid>
      </div>
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
