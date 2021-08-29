import axios from 'axios';
import config from "../../../config.json";

const API_URL = `http://${config.BACKEND_URL}:${config.BACKEND_PORT}/`;

const GQL_MOVIES_LIST = `
query getMovies($isspecific:Boolean!, $title:String, $page:Int,$plot:String, $id:String) {
  getMovies(filter:{isSpecific:$isspecific, title:$title, page:$page,plot:$plot, id:$id}) {
    movies {
      Title
      Year
      Rated
      Released
      Genre
      Director
      Writer
      Actors
      Plot
      Language
      Country
      Awards
      Poster
      Metascore
      imdbRating
      imdbVotes
      imdbID
      Production
      Website
      Response
    }
  }
}
`;

const parseMoviesListQuery = (variables) => {
  return {
    query: GQL_MOVIES_LIST,
    variables: JSON.stringify(variables),
  };
};

const fetchMoviesList = ({ isspecific = false, title, page, plot, id }) => {
  return axios.post(
    `${API_URL}movies/graphql?`,
    parseMoviesListQuery({
      isspecific,
      title,
      page,
      plot,
      id,
    }),
  );
};

const getMovies = async (isDetails = false, title, page, plot) => {
  try {
    const res = await fetchMoviesList({ isspecific: isDetails, title, page, plot });
    return res.data.data.getMovies.movies;
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
    return null;
  }
};

const getMovieById = async (id) => {
  try {
    const res = await fetchMoviesList({ isspecific: true, id });
    return res.data.data.getMovies.movies;
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
    return null;
  }
};

export { getMovies, getMovieById };
