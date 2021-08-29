const App = require("./app/App");

const { logger } = require("./app/Logger");

// Initializing the service...
(async () => {
  try {
    logger.info("Initializing...");
    const app = new App(logger);
    await app.init();
  } catch (err) {
    logger.error("Service will be closed", err);
    process.kill(process.pid, "SIGTERM");
  }
})();
