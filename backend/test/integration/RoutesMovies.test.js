const request = require("supertest");

const express = require("express");

const { graphqlRoute } = require("../../app/routes/Movies");

const mockQueryDataUsingGraphql = jest.fn();

const mockQueries = jest.fn().mockImplementation(() => ({
  queryDataUsingGraphql: mockQueryDataUsingGraphql,
}));

// jest.spyOn(axios, 'get');
/*
queryDataUsingGraphql.mockImplementation(() => {
  console.log("asdasd");
});

mockQueryDataUsingGraphql.mockImplementationOnce(
      (title, id, isSpecific, page, plot) => {
        expect(title).toBe("chess");
        return Promise.resolve({
          data: [{}],
        });
      }
    );
*/
jest.mock("./../../app/Queries", () => ({
  queryDataUsingGraphql: jest.fn(),
}));

const app = express();
app.use(graphqlRoute.mountPoint, graphqlRoute.middleware);

describe("Test Movies Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const graphqlQuery = `query {
          getMovies(filter:{isSpecific:false,title:"chess"}) {
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
      }`;

  const graphqlInvalidQuery = `query {
         getMovies(filter:{isSpecific:false,title:"chess"}) {
          data { id, attr }
        }
      }`;

  test("Test graphQl endpoint - valid graphql query", (done) => {
    expect.assertions(2);
    request(app)
      .get("/movies/graphql")
      .send({ query: graphqlQuery })
      .set("Accept", "application/json")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({
          data: { getMovies: null },
        });
        done();
      });
  });

  test("Test graphQl endpoint - invalid graphql query", (done) => {
    expect.assertions(2);
    request(app)
      .get("/movies/graphql")
      .send({ query: graphqlInvalidQuery })
      .set("Accept", "application/json")
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body).toStrictEqual({
          errors: [
            {
              locations: [{ column: 11, line: 3 }],
              message: 'Cannot query field "data" on type "FetchedData".',
            },
          ],
        });
        done();
      });
  });
});
