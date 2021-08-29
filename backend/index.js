const pino = require("pino");

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
  },
  level: "debug",
});

const App = require("./app/App");

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
