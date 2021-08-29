const mockGet = jest.fn();

const mockAxios = {
  get: mockGet,
};

const mockConfig = {
  OMDB_HOST: "localhost",
  API_KEY: "randomkey",
  LOGGER_LEVEL: "debug",
};

jest.mock("axios", () => mockAxios);

const { fetchData } = require("../../app/services/http");

jest.mock("../../config", () => mockConfig);


describe("Test Http", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Checking URL creation", async () => {
    expect.assertions(2);
    mockGet.mockImplementationOnce((params) => {
      expect(params).toEqual("localhost/?apikey=randomkey&type=movie");
      return Promise.resolve([]);
    });

    fetchData("&type=movie");
    expect(mockGet).toBeCalled();
  });
});
