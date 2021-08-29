import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/cardList/cardList';
import AppHeader from '../../components/header/appHeader';
import { getMovies } from '../../api/movies';
import useStyles from './style';
import getRandInt from "../../utils";

const Page = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.page}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.shape({}).isRequired,
}

const SUGGESTION_LIST = [
  'Star Wars',
  'Toy Story',
  'Matrix',
  'Jurassic Park',
  'Lord of the Rings',
  'Harry Potter',
  'The Hunger Games',
];



const Home = ({ favorites, movies, dispatch }) => {
  const [searchedTitle, setSearchedTitle] = useState();
  const [areaTitle, setAreaTitle] = useState();

  const toggleFavorite = (movieId) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      movieId,
    })
  };

  const fetchMovies = (params) => {
    return getMovies(false, params.title).then((data) => {
      // dispatch
      console.log('Coments', data);
      if (data) {
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
    // In the initial loading we should fetch for suggestion movies
    const index = getRandInt(0, SUGGESTION_LIST.length - 1);
    const suggestion = SUGGESTION_LIST[Number(index)];
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
      </AppHeader>
      <Page>
        <CardList toggleFavorite={toggleFavorite} areaTitle={areaTitle} favorites={favorites} movies={movies} />
      </Page>
    </div>
  );
};

Home.defaultProps = {
  favorites: {},
  movies: [],
}


Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.shape({}),
  movies: PropTypes.shape({}),
}

const mapStateToProps = (state) => ({
  movies: [...state.movies],
  favorites: { ...state.favorite },
});

export default connect(mapStateToProps, null)(Home);
