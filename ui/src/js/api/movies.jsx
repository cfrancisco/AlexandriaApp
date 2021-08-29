import axios from 'axios';

const API_URL = 'http://localhost:3000/';
const instance = axios.create({
  baseURL: API_URL,
});

const GQL_MOVIES_LIST = `
query getMovies($isspecific:Boolean!, $title:String, $page:Int,$plot:String) {
  getMovies(filter:{isSpecific:$isspecific, title:$title, page:$page,plot:$plot}) {
    movies {
      Title
      Year
      Rated
      Released
      Runtime
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
      Type
      DVD
      BoxOffice
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

const fetchMoviesList = (isspecific = false, title, page, plot) => {
  return instance.post(
    'movies/graphql?',
    parseMoviesListQuery({
      isspecific,
      title,
      page,
      plot,
    }),
  );
};

const getMovies = async (isDetails = false, title, page, plot) => {
  try {
    const res = await fetchMoviesList(isDetails, title, page, plot);
    return res.data.data.getMovies.movies;
  } catch (error) {
    if (error) {
      console.log(error.message);
    }
    return null;
  }
};

export { getMovies };
