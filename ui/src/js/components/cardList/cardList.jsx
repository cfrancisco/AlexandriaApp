import PropTypes from "prop-types";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import Card from "../card/card";
import useStyles from './style';

const CardList = ({ favorites, toggleFavorite, areaTitle, movies }) => {
  const classes = useStyles();

  /* Merge movies with Favorites list and sorting them */
  const moviesWithFav = movies.map((movie) => {
    const mv = { ...movie };
    mv.isFavorite = favorites[movie.imdbID] === true;
    return mv;
  });
  moviesWithFav.sort((a) => {
    if (a.isFavorite === true)
      return -1;
    return 0;
  });

  if (!movies.length) {
    return (
      <>
        <h1 className={classes.notFound}>
          &nbsp; No movies were found.
          {' '}
          <span role='img' aria-label='sad face'> 😥</span>
          <br />
          Let&apos;s try again.
          {' '}
          <LocalActivityIcon />
        </h1>
      </>
    )
  }

  return (
    <>
      <h3 className={classes.areaTitle}>
        {' '}
        <MovieFilterIcon className={classes.movieIcon} />
        &nbsp;
        {areaTitle}
      </h3>
      <div className={classes.rootMovieList}>
        {moviesWithFav.map((el) => (
          <Card
            toggleFavorite={toggleFavorite}
            key={uuidv4()}
            id={el.imdbID}
            isFavorite={el.isFavorite}
            poster={el.Poster}
            rating={el.imdbRating}
            title={el.Title}
            year={el.Year}
          />
        ))}
      </div>
    </>
  );
};

CardList.propTypes = {
  areaTitle: PropTypes.string.isRequired,
  favorites: PropTypes.shape({}).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    })).isRequired,
}

export default CardList;
