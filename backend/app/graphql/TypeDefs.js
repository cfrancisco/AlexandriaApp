const typeDefs = `
  #Defining a type for a movie
  type MovieDetails {
      Title: String
      Year: String
      Rated: String
      Released: String
      Runtime: String
      Genre: String
      Director: String
      Writer: String
      Actors: String
      Plot: String
      Language: String
      Country: String
      Awards: String
      Poster: String
      Metascore: String
      imdbRating :String
      imdbVotes: String
      imdbID: String
      Type: String
      DVD: String
      BoxOffice: String
      Production: String
      Website: String
      Response: String
  }

  #Defining a type for a movie
  type Movies {
      Title: String
      Year: String
      Poster: String
      imdbID: String
      Type: String
  }

  # @Todo create a union type with its resolvers #
  # union Data = Movies | MovieDetails

  #Type used to return the data
  type FetchedData {
    movies: [MovieDetails]
  }

  #main query schema to request Movies from OmdbAPI
  type Query {
    #Returns all data
    getMovies(filter: ParamsInput): FetchedData
  }

  #Parameters to query movies data
  input ParamsInput {
    # A valid IMDb ID (e.g. tt1285016) #
    id: String
    # Movie title to search for. #
    title: String
    # Return short or full plot. #
    plot: String
    # Page number to return. #
    page: Int
    # Should get details #
    isSpecific: Boolean!
  }
`;

module.exports = typeDefs;
