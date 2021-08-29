import * as axios from "axios";

/*
const mockPost = jest.fn();

const mockConfig = {
  BACKEND_URL: "fakeurl",
  BACKEND_PORT: "9999",

};
 jest.mock("../../../config.json", () => mockConfig);
*/

import { getMovies, getMovieById } from './movies';

jest.mock("axios", () => ({
  post: jest.fn(() => {
    return Promise.resolve();
  }),
}));


describe("Test Movies API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("[getMovies] - Checking parameters creation", async () => {
    expect.assertions(1);

    axios.post.mockImplementationOnce((url) => {
      expect(url).toEqual("http://localhost:3000/movies/graphql?");
      return Promise.resolve({ data: { data: { getMovies: { movies: [] } } } });
    });

    await getMovies(false, 'mytitle');
  });


  it("[getMovies] - Checking catch", async () => {
    axios.post.mockImplementationOnce(() => {
      throw new Error("Error when fetching API.");
    });
    try {
      await getMovies(false, 'mytitle');
    } catch (e) {
      expect(e.message).toBe("Error when fetching API.");
    }
  });


  it("[getMovieById] - Checking parameters creation", async () => {
    expect.assertions(1);

    axios.post.mockImplementationOnce((url) => {
      expect(url).toEqual("http://localhost:3000/movies/graphql?");
      return Promise.resolve({ data: { data: { getMovies: { movies: [] } } } });
    });

    await getMovieById('movieIdRandom');
  });


});
