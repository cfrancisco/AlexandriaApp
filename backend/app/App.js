const express = require("express");

const cors = require("cors");
const { graphqlRoute } = require("./routes/Movies");

const PORT = 3000;
/**
 * Wrapper to initialize the service
 */
class App {
  /**
   * Constructor App
   * that instantiate
   */
  constructor(logger) {
    this.logger = logger;
    this.logger.info("constructor: instantiate app...");
    try {
      this.server = express();
    } catch (e) {
      this.logger.error("constructor:", e);
      const er = new Error(e);
      er.message = `constructor: ${e.message}`;
      throw er;
    }
  }

  /**
   * Initialize the server and influxdb
   */
  async init() {
    this.logger.info("init: Initializing the alexandria-backend...");
    try {
      /**
       * Creates Express Router
       */
      this.server.use(cors());
      this.server.use(graphqlRoute.mountPoint, graphqlRoute.middleware);

      this.server.listen(PORT, () => {
        this.logger.info(`init: App listening at port:${PORT}`);
      });
    } catch (e) {
      this.logger.error("init:", e.message);
      throw e;
    }
  }
}

module.exports = App;
