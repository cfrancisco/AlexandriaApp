import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link, useParams } from 'react-router-dom';
import useStyles from './style';

const TitleBox = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.titleBox}>{title}</div>;
};

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

const Description = ({ cast, description, genre, director }) => {
  const classes = useStyles();
  return (
    <>
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

const ActionBar = ({ idmb, toggleFavorite, isFavorite }) => {
  const classes = useStyles();

  const BtnFavorite = isFavorite ? (
    <div className={classes.favoriteBox} onClick={toggleFavorite}>
      {title}
    </div>
  ) : null;

  return (
    <>
      <div className={classes.idmb}>{idmb}</div>
      <BtnFavorite />
    </>
  );
};

// We can use the `useParams` hook here to access
// the dynamic pieces of the URL.
const MoviePage = (props) => {
  const { movieId } = useParams();

  return (
    <>
      <Link to='/'>
        {' '}
        <KeyboardBackspaceIcon />
      </Link>
      {minutes}
      {year}
      <TitleBox />
      <ActionBar />
      <Description />
      <Poster />
    </>
  );
};

export default MoviePage;
