const mockGetMovies = jest.fn();

const mockMovies = {
  Movies: {
    getMovies: mockGetMovies,
  },
};

jest.mock("./../../app/services/omdb", () => mockMovies);

const DataQuery = require("../../app/Queries");

describe("Test Graphql Data Query", () => {
  /* Cleaners */
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockThrowErrorInGetMovies = () => {
    mockGetMovies.mockImplementationOnce(() => {
      throw new Error("Error when fetching API.");
    });
  };

  test("queryDataUsingGraphql - error on fetching ", async () => {
    mockThrowErrorInGetMovies();
    try {
      await DataQuery.queryDataUsingGraphql("tree", false);
    } catch (e) {
      expect(e.message).toBe("queryUsingGraphql: Error when fetching API.");
    }
  });

  test("queryDataUsingGraphql - request all movies ", async () => {
    expect.assertions(2);
    mockGetMovies.mockImplementationOnce((params) => {
      const res = { data: [] };
      expect(params).toEqual([
        { attr: "s", value: "tree" },
        { attr: "i", value: "movieid123" },
        { attr: "page", value: 3 },
        { attr: "plot", value: "long" },
        { attr: "type", value: "movie" },
      ]);
      return Promise.resolve(res);
    });

    await DataQuery.queryDataUsingGraphql(
      "tree",
      "movieid123",
      false,
      3,
      "long"
    );
    expect(mockGetMovies).toBeCalled();
  });

  test("queryDataUsingGraphql - request specified movie ", async () => {
    expect.assertions(2);
    mockGetMovies.mockImplementationOnce((params) => {
      const res = { data: [] };
      expect(params).toEqual([
        { attr: "t", value: "tree" },
        { attr: "i", value: "movieid123" },
        { attr: "type", value: "movie" },
      ]);
      return Promise.resolve(res);
    });

    await DataQuery.queryDataUsingGraphql("tree", "movieid123", true);
    expect(mockGetMovies).toBeCalled();
  });
  test("queryDataUsingGraphql - request without title ", async () => {
    expect.assertions(2);
    mockGetMovies.mockImplementationOnce((params) => {
      const res = { data: [] };
      expect(params).toEqual([
        { attr: "i", value: "movieid123" },
        { attr: "type", value: "movie" },
      ]);
      return Promise.resolve(res);
    });

    await DataQuery.queryDataUsingGraphql("", "movieid123", true);
    expect(mockGetMovies).toBeCalled();
  });
});
