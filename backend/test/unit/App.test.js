const mockUse = jest.fn();

const mockExpress = jest.fn().mockImplementation(() => ({
  use: mockUse,
}));

jest.mock("express", () => mockExpress);

const App = require("../../app/App");

const mockLogger = {
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
};

describe("Test App", () => {
  let app = null;
  beforeAll(() => {
    app = null;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("instantiate class and init with error - express not ready", async () => {
    expect.assertions(1);
    app = new App(mockLogger);
    try {
      await app.init();
    } catch (e) {
      expect(e.message).toBe("this.server.listen is not a function");
    }
  });

  test("instantiate class", async () => {
    expect.assertions(1);
    // const spy = jest.spyOn(express, "uses");
    // express.uses.mockImplementation(() => ({}));
    app = new App(mockLogger);
    expect(mockExpress).toBeCalled();
  });

  test("instantiate class with  error in constructor", async () => {
    mockExpress.mockImplementationOnce(() => {
      throw new Error("Error in Server instantiation.");
    });
    try {
      app = new App(mockLogger);
    } catch (e) {
      expect(e.message).toBe("constructor: Error in Server instantiation.");
    }
  });
});
