import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/card/card';
import { AppHeader } from '../../components/header';
import { getMovies } from '../../api/movies';
import WatchedButton from '../../components/buttons/watchedButton';
import useStyles from './style';


const Page = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.page}>{children}</div>;
};

const SUGGESTION_LIST = [
  'Star Wars',
  'Toy Story',
  'Matrix',
  'Jurassic Park',
  'Lord of the Rings',
  'Harry Potter',
  'The Hunger Games',
];

// @ TODO set in Utils
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const CardList = ({ favorites, toggleFavorite, areaTitle, movies }) => {
  const classes = useStyles();

  const moviesWithFav = movies.map((movie) => {
    const mv = { ...movie };
    mv.isFavorite = favorites[movie.imdbID] === true;
    return mv;
  });
  moviesWithFav.sort((a, b) => {
    if (a.isFavorite === true)
      return -1;
    return 0;
  });
  console.log("moviesWithFav", moviesWithFav);
  if (!movies.length) {
    return (
      <>
        <h1 className={classes.notFound}>
          &nbsp; No movies were found.
          {' '}
          <span> 😥</span>
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
  areaTitle: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    })),
}

const Home = ({ favorites, movies, dispatch }) => {
  const [searchedTitle, setSearchedTitle] = useState();
  const [areaTitle, setAreaTitle] = useState();
  const [lastSearch, setLastSearch] = useState();

  const classes = useStyles();

  const toggleFavorite = (movieId) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      movieId,
    })
  };

  const fetchMovies = (params) => {
    console.log('searchedTitle', params);
    setLastSearch(params);
    return getMovies(false, params.title).then((data) => {
      // dispatch
      console.log('Coments', data);
      if (data) {
        // add favorites in data
        dispatch({
          type: 'GET_MOVIES',
          data,
        });
      }
      else {
        dispatch({
          type: 'GET_MOVIES',
          data: [],
        });
      }
    });
  };

  const searchByTitle = (e) => {
    e.preventDefault();
    if (searchedTitle) {
      fetchMovies({ title: searchedTitle });
      setAreaTitle(`Movies related to ${searchedTitle}`);
    }
  };

  useEffect(() => {
    // In the initial loads, fetch suggetion movies;
    const index = getRandInt(0, SUGGESTION_LIST.length - 1);
    const suggestion = SUGGESTION_LIST[index];
    fetchMovies({ title: suggestion });
    setAreaTitle(`How about watching ${suggestion} movies?`);
  }, []);

  return (
    <div>

      <AppHeader>
        <SearchBar
          value={searchedTitle}
          onClick={(e) => searchByTitle(e)}
          onChange={(e) => setSearchedTitle(e.target.value)}
        />
        <WatchedButton />
      </AppHeader>
      <Page>
        <CardList toggleFavorite={toggleFavorite} areaTitle={areaTitle} favorites={favorites} movies={movies} />
      </Page>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: [...state.movies],
  favorites: { ...state.favorite },
});

export default connect(mapStateToProps, null)(Home);
