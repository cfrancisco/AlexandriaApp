import React from 'react';

import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import useStyles from './style';

const PosterCard = ({ toggleFavorite, id, poster, rating, title, year, isFavorite }) => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
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
      <Link to={`/movies:${id}`}>

        <img
          src={poster}
          className={classes.poster}
          title={title}
          alt={title}
          crossOrigin='true'
          referrerPolicy='unsafe-url'
        />
        <span className={classes.rating}>{rating}</span>
        <div className={classes.hoverCard}>
          <span className={classes.title}>{title}</span>
          <span className={classes.year}>{year}</span>
        </div>
      </Link>

    </Card>
  );
};

PosterCard.defaultProps = {
  isFavorite: false,
};

PosterCard.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export default PosterCard;
