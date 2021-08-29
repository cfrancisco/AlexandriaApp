const mockFetchData = jest.fn();

const mockHttp = {
  fetchData: mockFetchData,
};

jest.mock("../../app/services/http", () => mockHttp);

const { Movies } = require("../../app/services/omdb");


describe("Test OMDB API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Checking parameters creation", async () => {
    const attrs = [
      { attr: "i", value: "movieid123" },
      { attr: "type", value: "movie" }];

    expect.assertions(2);
    mockFetchData.mockImplementationOnce((params) => {
      const res = { data: [] };
      expect(params).toEqual("&i=movieid123&type=movie");
      return Promise.resolve(res);
    });

    Movies.getMovies(attrs);
    expect(mockFetchData).toBeCalled();
  });
});
